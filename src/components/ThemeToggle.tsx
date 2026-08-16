import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      className="theme-toggle"
      data-active-theme={dark ? 'dark' : 'light'}
      onClick={toggle}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
      aria-pressed={dark}
      type="button"
    >
      <span className="theme-toggle-knob" aria-hidden="true" />
    </button>
  );
}
