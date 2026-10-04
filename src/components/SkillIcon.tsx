import type { IconType } from 'react-icons';
import * as SimpleIcons from 'react-icons/si/index.js';

const icons: Record<string, IconType> = {
  JavaScript: SimpleIcons.SiJavascript,
  TypeScript: SimpleIcons.SiTypescript,
  React: SimpleIcons.SiReact,
  'React Native': SimpleIcons.SiReact,
  'Next.js': SimpleIcons.SiNextDotJs,
  'Vue.js': SimpleIcons.SiVueDotJs,
  'Node.js': SimpleIcons.SiNodeDotJs,
  Redux: SimpleIcons.SiRedux,
  'Styled Components': SimpleIcons.SiStyledComponents,
  'Tailwind CSS': SimpleIcons.SiTailwindcss,
  PostgreSQL: SimpleIcons.SiPostgresql,
  MySQL: SimpleIcons.SiMysql,
  Git: SimpleIcons.SiGit,
  GitHub: SimpleIcons.SiGithub,
  Docker: SimpleIcons.SiDocker,
  AWS: SimpleIcons.SiAmazonaws,
  'GitHub Actions': SimpleIcons.SiGithubactions,
  Netlify: SimpleIcons.SiNetlify,
  'ethers.js': SimpleIcons.SiEthereum,
  'Web3.js': SimpleIcons.SiEthereum,
};

const fallbackLabels: Record<string, string> = {
  NestJS: 'N',
  'TanStack Query': 'TQ',
  'Material UI': 'MUI',
  'Ant Design': 'AD',
  'Shadcn/ui': 'SC',
  Pinia: 'PI',
  'REST APIs': 'API',
  'CI/CD': 'CI',
  'LLM Integration': 'AI',
  'Prompt Engineering': 'PE',
  'AI Workflow Automation': 'WA',
  Vercel: 'VE',
};

const brandColors: Record<string, string> = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  React: '#61DAFB',
  'React Native': '#61DAFB',
  'Next.js': '#000000',
  'Vue.js': '#4FC08D',
  'Node.js': '#339933',
  NestJS: '#E0234E',
  'TanStack Query': '#FF4154',
  Redux: '#764ABC',
  'Styled Components': '#DB7093',
  'Tailwind CSS': '#06B6D4',
  'Material UI': '#007FFF',
  'Ant Design': '#0170FE',
  'Shadcn/ui': '#000000',
  Pinia: '#FFD859',
  PostgreSQL: '#4169E1',
  MySQL: '#4479A1',
  'REST APIs': '#6C757D',
  Git: '#F05032',
  GitHub: '#181717',
  Docker: '#2496ED',
  AWS: '#FF9900',
  'GitHub Actions': '#2088FF',
  'CI/CD': '#6C757D',
  Vercel: '#000000',
  Netlify: '#00C7B7',
  'ethers.js': '#627EEA',
  'Web3.js': '#F16822',
  'LLM Integration': '#8B5CF6',
  'Prompt Engineering': '#A855F7',
  'AI Workflow Automation': '#EC4899',
};

export function SkillIcon({ name }: { name: string }) {
  const Icon = icons[name];
  const color = brandColors[name] || 'var(--accent)';

  if (Icon) return <Icon className="skill-icon" color={color} aria-hidden="true" />;

  return (
    <span className="skill-icon skill-icon-fallback" style={{ color }} aria-hidden="true">
      {fallbackLabels[name] || name.slice(0, 2).toUpperCase()}
    </span>
  );
}
