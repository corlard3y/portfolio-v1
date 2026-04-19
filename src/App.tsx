import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
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

export default function App() {
  return (
    <>
      <header className="header">
        <span className="header-name">Kolade Oyewumi</span>
        <nav className="header-nav">
          <a
            href="https://linkedin.com/in/kolade-oyewumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/corlard3y"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:oyewumi.koladej@gmail.com">Email</a>
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

        {/* Work */}
        <motion.section
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.p className="section-label" variants={fadeUp}>
            Experience
          </motion.p>
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
                  {w.url !== '#' && (
                    <span className="project-arrow">→</span>
                  )}
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
          <motion.p className="section-label" variants={fadeUp}>
            About
          </motion.p>
          <motion.p className="about-text" variants={fadeUp}>
            Frontend engineer specializing in React, Next.js, and Web3. I've
            architected reward systems, design systems, and developer-facing
            tools — working across decentralized protocols, healthcare, and
            enterprise HR platforms.
          </motion.p>
          <motion.p className="about-text" variants={fadeUp}>
            I care about performance, accessibility, and shipping things that
            hold up at scale. B.Eng Computer Engineering, University of Ilorin.
            Cloud Engineering Certificate, AltSchool Africa (2025).
          </motion.p>
          <motion.div className="skills" variants={fadeUp}>
            {skills.map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <footer className="footer">
        <span className="footer-copy">© 2026 Kolade Oyewumi</span>
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/kolade-oyewumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/corlard3y"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:oyewumi.koladej@gmail.com">Email</a>
        </div>
      </footer>
    </>
  );
}
