import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.09 } },
};

const work = [
  {
    company: 'Push Chain',
    role: 'Frontend Engineer',
    period: '2022–Present',
    url: 'https://push.org',
  },
  {
    company: 'Ojindo',
    role: 'Full-Stack Engineer',
    period: '2025–Present',
    url: '#',
  },
  {
    company: 'Mobicure',
    role: 'Full-Stack Engineer',
    period: '2021–2022',
    url: '#',
  },
  {
    company: 'Datazen',
    role: 'Frontend Engineer',
    period: '2021',
    url: '#',
  },
  {
    company: 'Bowen University Digital Services',
    role: 'Software Developer Intern',
    period: '2020',
    url: '#',
  },
];

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Web3 / Ethers.js',
  'TailwindCSS',
  'AWS',
  'PostgreSQL',
  'Docker',
  'CI/CD',
];

const MoonIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export default function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <>
      <header className="header">
        {/* Name with blinking cursor */}
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

          {/* Creative dark mode toggle — icon morphs with rotate+fade */}
          <button
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
          >
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
        {/* Hero */}
        <motion.div
          className="hero"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
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

        {/* Experience */}
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

        {/* About */}
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

        {/* Connect */}
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
