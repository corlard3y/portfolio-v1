const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

exports.handler = async function handler() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return json({
      isPlaying: false,
      message: 'Spotify is not configured yet',
    });
  }

  try {
    const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    const tokenResponse = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    });

    if (!tokenResponse.ok) {
      return json({ isPlaying: false, message: 'Spotify auth failed' }, 502);
    }

    const { access_token: accessToken } = await tokenResponse.json();
    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (nowPlayingResponse.status === 204) {
      return json({
        isPlaying: false,
        message: 'Nothing playing right now',
      });
    }

    if (!nowPlayingResponse.ok) {
      return json({ isPlaying: false, message: 'Spotify playback unavailable' }, 502);
    }

    const current = await nowPlayingResponse.json();
    const item = current.item;

    if (!item) {
      return json({
        isPlaying: false,
        message: 'Nothing playing right now',
      });
    }

    return json({
      isPlaying: Boolean(current.is_playing),
      title: item.name,
      artist: item.artists?.map((artist) => artist.name).join(', ') || 'Unknown artist',
      album: item.album?.name || '',
      url: item.external_urls?.spotify || 'https://open.spotify.com/',
      image: item.album?.images?.[0]?.url || '',
    });
  } catch {
    return json({ isPlaying: false, message: 'Spotify unavailable' }, 500);
  }
};

function json(body, statusCode = 200) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify(body),
  };
}
