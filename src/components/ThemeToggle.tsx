import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'sun' : 'moon'}
          initial={{ rotate: -60, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 60, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
