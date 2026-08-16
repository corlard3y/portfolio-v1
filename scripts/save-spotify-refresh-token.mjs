import fs from 'node:fs';

const code = process.argv[2];
const redirectUri = 'http://127.0.0.1:8888/callback';

if (!code) {
  console.error('Usage: node scripts/save-spotify-refresh-token.mjs "SPOTIFY_CODE"');
  process.exit(1);
}

const envPath = '.env';
const envText = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
const env = Object.fromEntries(
  envText
    .split(/\n/)
    .filter(Boolean)
    .filter((line) => !line.trim().startsWith('#'))
    .map((line) => {
      const index = line.indexOf('=');
      return [
        line.slice(0, index).trim(),
        line.slice(index + 1).trim().replace(/^['"]|['"]$/g, ''),
      ];
    })
);

const clientId = env.SPOTIFY_CLIENT_ID;
const clientSecret = env.SPOTIFY_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error('Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env');
  process.exit(1);
}

const response = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
  }),
});

const data = await response.json();

if (!response.ok) {
  console.error(`Spotify token exchange failed: ${data.error_description || data.error}`);
  process.exit(1);
}

if (!data.refresh_token) {
  console.error('Spotify did not return a refresh token. Generate a fresh code and try again.');
  process.exit(1);
}

const lines = envText.split(/\n/);
const key = 'SPOTIFY_REFRESH_TOKEN';
let updated = false;

const nextLines = lines.map((line) => {
  if (line.startsWith(`${key}=`)) {
    updated = true;
    return `${key}=${data.refresh_token}`;
  }

  return line;
});

if (!updated) {
  nextLines.push(`${key}=${data.refresh_token}`);
}

fs.writeFileSync(envPath, nextLines.join('\n').replace(/\n*$/, '\n'));
console.log('Saved SPOTIFY_REFRESH_TOKEN to .env');
