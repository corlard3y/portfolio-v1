import { AnimatePresence, motion } from 'framer-motion';

import { fadeUp, stagger } from './animations';
import { work, skills } from './data';
import { useTheme } from './hooks/useTheme';
import { ScrambleDecode } from './components/ScrambleDecode';
import { MoonIcon, SunIcon } from './components/Icons';

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <>
      <header className="header">
        <span className="header-name">
          Kolade Oyewumi
          <motion.span
            className="cursor"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'linear', times: [0, 0.45, 0.45, 1] }}
          >
            _
          </motion.span>
        </span>

        <nav className="header-nav">
          <a href="https://www.linkedin.com/in/kolade-oyewumi-644492195/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/corlard3y" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:oyewumi.koladej@gmail.com">Email</a>

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
        </nav>
      </header>

      <main className="main">
        <motion.div className="hero" initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="hero-title">
            Frontend Engineer,
            <br />
            based in Nigeria.
          </h1>
          <p className="hero-desc">
            5+ years building products with React, Next.js & Web3. Currently at
            Push Chain — shipping for 100K+ daily active users.
          </p>
        </motion.div>

        <motion.section
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.p className="section-label" variants={fadeUp}>Experience</motion.p>
          <div className="project-list">
            {work.map((w) => (
              <motion.a
                key={w.company}
                href={w.url}
                target={w.url !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="project-item"
                variants={fadeUp}
              >
                <div className="project-left">
                  <span className="project-name">{w.company}</span>
                  <span className="project-desc">{w.role}</span>
                </div>
                <div className="project-right">
                  <span>{w.period}</span>
                  {w.url !== '#' && <span className="project-arrow">→</span>}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.p className="section-label" variants={fadeUp}>About</motion.p>
          <motion.p className="about-text" variants={fadeUp}>
            Frontend engineer specializing in React, Next.js, and Web3. I've
            architected reward systems, design systems, and developer-facing
            tools — working across decentralized protocols, healthcare, and
            enterprise HR platforms.
          </motion.p>
          <motion.p className="about-text" variants={fadeUp}>
            I care about performance, accessibility, and shipping things that
            hold up at scale.
          </motion.p>
          <motion.div className="skills" variants={fadeUp}>
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </motion.div>
        </motion.section>

        <ScrambleDecode />

        <motion.section
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.p className="section-label" variants={fadeUp}>Connect</motion.p>
          <motion.p className="about-text" variants={fadeUp}>
            Reach me at{' '}
            <a href="mailto:oyewumi.koladej@gmail.com" className="connect-email">
              oyewumi.koladej@gmail.com
            </a>
          </motion.p>
        </motion.section>
      </main>

      <footer className="footer">
        <span className="footer-copy">© 2026 Kolade Oyewumi</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/kolade-oyewumi-644492195/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/corlard3y" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:oyewumi.koladej@gmail.com">Email</a>
        </div>
      </footer>
    </>
  );
}
