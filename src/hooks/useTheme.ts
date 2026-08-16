import { useEffect, useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof localStorage === 'undefined') return true;
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
