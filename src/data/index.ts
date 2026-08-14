export const work = [
  {
    company: 'Push Chain',
    role: 'Frontend Engineer',
    period: '2022–Present',
    url: 'https://push.org',
    eyebrow: 'Web3 product',
    summary:
      'Shipping React and Next.js interfaces for messaging, rewards, and ecosystem products used by a large daily audience.',
    impact: '100K+ daily active users',
    stack: ['React', 'Next.js', 'TypeScript', 'Web3'],
  },
  {
    company: 'Mobicure',
    role: 'Full-Stack Engineer',
    period: '2021–2022',
    url: 'https://mobicure.biz/',
    eyebrow: 'Healthcare',
    summary:
      'Built product surfaces across patient-facing and internal healthcare workflows, balancing speed with reliability.',
    impact: 'Healthcare tools shipped',
    stack: ['React', 'Node.js', 'REST APIs'],
  },
  {
    company: 'Datazen',
    role: 'Frontend Engineer',
    period: '2021',
    url: 'https://datazensolutions.com/',
    eyebrow: 'Enterprise software',
    summary:
      'Created frontend experiences for data-heavy business tools with reusable UI patterns and maintainable styling.',
    impact: 'Enterprise UI delivery',
    stack: ['React', 'SASS', 'Redux'],
  },
  {
    company: 'Bowen University Digital Services',
    role: 'Software Developer Intern',
    period: '2020',
    url: 'https://bowen.edu.ng/',
    eyebrow: 'Early systems work',
    summary:
      'Supported digital service delivery and learned how production software behaves inside real organizations.',
    impact: 'Foundation in production teams',
    stack: ['JavaScript', 'Web apps'],
  },
];

export const featuredProjects = [
  {
    name: 'Push dApp',
    category: 'Web3 / Communication / Production Application',
    status: 'Production team product',
    role: 'Core Frontend / Product Engineer',
    period: '2022–2026',
    summary:
      'A production Web3 communication application for wallet-native notifications, channels, chat, Spaces, rewards and social interactions.',
    contribution:
      'Contributed extensively to Push Protocol’s core production application, building and maintaining wallet-native communication, rewards, notification, social and monetization experiences used across the Web3 ecosystem.',
    bullets: [
      'Built and maintained frontend features across notifications, channels, chat and Spaces.',
      'Worked on wallet connection, SDK integration, profile access and vault-related user flows.',
      'Implemented responsive, mobile and dark-theme interfaces across complex product surfaces.',
      'Built email, Telegram, rewards, claims, activity and season-statistics experiences.',
      'Supported pull-request previews, staged deployments, release maintenance and production fixes.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Redux Toolkit',
      'TanStack Query',
      'Ethers.js',
      'Web3 Onboard',
      'Push SDK',
    ],
    links: [
      { label: 'Live app', url: 'https://app.push.org' },
      {
        label: 'Source',
        url: 'https://github.com/push-protocol/push-dapp',
      },
    ],
  },
  {
    name: 'Push Rewards',
    category: 'Web3 / Rewards / User Portal',
    status: 'Production team product',
    role: 'Core Frontend Engineer',
    period: '2024–2026',
    summary:
      'A wallet-connected Push Chain portal for quests, rewards, migration flows, campaign participation and user activity.',
    contribution:
      'Built and maintained production portal experiences around quests, rewards, migration, campaigns and wallet-connected user actions.',
    bullets: [
      'Built and maintained quest, task, campaign and rewards interfaces.',
      'Implemented migration deposit flows and wallet-connected user interactions.',
      'Worked on activity, statistics, timers, task filtering and balance-related interfaces.',
      'Fixed production issues across high-friction wallet and reward flows.',
      'Supported deployment and pull-request preview workflows.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Web3',
    ],
    links: [
      { label: 'Live portal', url: 'https://portal.push.org' },
      {
        label: 'Source',
        url: 'https://github.com/pushchain/push-portal',
      },
    ],
  },
  {
    name: 'Push Web Ecosystem',
    category: 'Landing Page / Developer Platform / Documentation / Marketing',
    status: 'Production team product',
    role: 'Core Frontend and Web Platform Contributor',
    period: '2022–2026',
    summary:
      'A multilingual product, documentation and developer platform spanning Push Protocol’s communication site and the newer Push Chain ecosystem.',
    contribution:
      'Helped evolve Push’s public web ecosystem from a communication-protocol website into the Push Chain product, documentation and developer platform.',
    bullets: [
      'Built and maintained product pages, documentation, knowledge-base and blog experiences.',
      'Contributed to multilingual support, translation workflows and long-running content architecture.',
      'Worked on SEO, metadata, redirects, structured content and discoverability.',
      'Maintained navigation, banners, alerts, articles, ecosystem pages and interactive developer content.',
      'Supported production and pull-request preview deployment workflows through a major brand/product transition.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Docusaurus',
      'MDX',
      'i18next',
      'Styled Components',
      'GSAP',
      'Node.js Scripts',
    ],
    links: [
      { label: 'Push Chain', url: 'https://push.org' },
      { label: 'Comms site', url: 'https://comms.push.org' },
      {
        label: 'Source',
        url: 'https://github.com/pushchain/push-chain-website',
      },
    ],
  },
  {
    name: 'myPaddi Admin and Analytics',
    category: 'Digital Health / Admin Platform / Analytics',
    status: 'Private commercial platform',
    role: 'Frontend Engineer',
    period: '2021–2022',
    summary:
      'An internal administration and analytics platform supporting a Nigerian reproductive-health and wellness product.',
    contribution:
      'Built administrative and analytics workflows supporting myPaddi, a Mobicure product providing young people with private access to reproductive-health information, products and professional support.',
    bullets: [
      'Built administrative dashboard interfaces for user, account and operational workflows.',
      'Implemented subscription, coupon, purchase, content and session-management features.',
      'Worked on blog/content validation, rich-text workflows and internal API integrations.',
      'Built analytics and data-visualization interfaces for operational teams.',
      'Handled sensitive product context without exposing private admin URLs or user data.',
    ],
    stack: [
      'Next.js',
      'React',
      'Redux Toolkit',
      'Chakra UI',
      'Ant Design',
      'Chart.js',
      'Nivo',
      'CKEditor',
    ],
    links: [
      { label: 'Mobicure', url: 'https://mobicure.biz' },
      { label: 'myPaddi store', url: 'https://shop.mypaddiapp.com' },
    ],
  },
  {
    name: 'Datazen HR Platform',
    category: 'B2B SaaS / HR Technology',
    status: 'Archived commercial platform',
    role: 'Lead / Major Frontend Contributor',
    period: '2021',
    summary:
      'A comprehensive HR operations platform for employee records, requests, approvals, credentials and payroll-related workflows.',
    contribution:
      'Led frontend development across employee management, approval workflows, credentials, navigation and payroll-related experiences.',
    bullets: [
      'Built employee and HR administration workflows across data-heavy screens.',
      'Implemented request, approval, payslip, credential and multi-stage form experiences.',
      'Worked on employee sidebars, navigation, pagination and application structure.',
      'Integrated frontend workflows with application APIs and fixed complex state behavior.',
      'Improved responsiveness and usability across dashboard modules.',
    ],
    stack: [
      'React',
      'Redux',
      'Redux Thunk',
      'React Router',
      'Material UI',
      'Ant Design',
      'Styled Components',
      'Axios',
    ],
    links: [
      {
        label: 'Source',
        url: 'https://github.com/mactay-github/Datazen-hr-app',
      },
    ],
  },
  {
    name: 'Peak Hertz',
    category: 'Commercial Website / Renewable Energy',
    status: 'Live solo delivery',
    role: 'Frontend Developer',
    period: '2026',
    summary:
      'A responsive, search-optimized commercial website for a Nigerian solar-energy company.',
    contribution:
      'Delivered a complete business website combining brand communication, lead generation, responsive design and technical SEO.',
    bullets: [
      'Built and deployed the complete frontend experience.',
      'Created service, trust, lead-generation and campaign-routing sections.',
      'Implemented responsive pages for solar installation and energy services.',
      'Added structured metadata, Open Graph tags, sitemap and robots configuration.',
      'Maintained and updated the live production site.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'GSAP',
      'SEO',
      'Schema.org',
      'Netlify',
    ],
    links: [
      { label: 'Live site', url: 'https://peakhertz.com' },
      {
        label: 'Source',
        url: 'https://github.com/corlard3y/peakhertz',
      },
    ],
  },
];

export const additionalProjects = [
  {
    name: 'Push Browser Extension',
    category: 'Browser Extension / Web3 / Notifications',
    role: 'Frontend Contributor',
    summary:
      'Wallet-aware browser extension work for receiving and managing decentralized Push notifications.',
    bullets: [
      'Built and refined extension interfaces, notification flows and spam-handling behavior.',
      'Worked on socket notification behavior, manifests, versioning and release preparation.',
    ],
    stack: ['React', 'Chrome Extension APIs', 'Ethers.js', 'Web3.js', 'Push SDK', 'Firebase'],
    links: [
      {
        label: 'Source',
        url: 'https://github.com/push-protocol/epns-browser-ext',
      },
    ],
  },
  {
    name: 'Merchant and Rider Logistics Platform',
    category: 'Logistics / Operations',
    role: 'Frontend Engineer',
    summary:
      'A multi-sided logistics platform covering merchant administration, delivery analytics and rider operations.',
    bullets: [
      'Built dashboards, settings, delivery summaries, roles, subscriptions and account workflows.',
      'Worked on rider signup, active orders, delivery history, maps, notifications and image uploads.',
    ],
    stack: ['React', 'Redux', 'Ant Design', 'Tailwind CSS', 'Charts', 'Paystack', 'React Cropper'],
    links: [
      {
        label: 'Merchant repo',
        url: 'https://github.com/primhexng/merchant-admin-frontend',
      },
      {
        label: 'Rider repo',
        url: 'https://github.com/primhexng/rider-web-app',
      },
    ],
  },
  // {
  //   name: 'Project Bedrock — AWS Retail Platform on EKS',
  //   category: 'Cloud / DevOps / Kubernetes',
  //   role: 'Cloud / DevOps Engineer',
  //   summary:
  //     'Infrastructure-as-code deployment of AWS’s retail-store sample application to Amazon EKS with networking, Kubernetes services and CI/CD automation.',
  //   bullets: [
  //     'Provisioned EKS infrastructure, VPC networking, public/private subnet separation and load-balanced access.',
  //     'Deployed multi-service workloads and configured CI/CD automation with documented operating procedures.',
  //   ],
  //   stack: ['AWS', 'EKS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Docker', 'Redis'],
  //   links: [
  //     {
  //       label: 'Source',
  //       url: 'https://github.com/corlard3y/project-bedrock',
  //     },
  //   ],
  // },
];

export const capabilities = [
  {
    title: 'Product interfaces',
    body: 'React and Next.js frontends that make dense product flows feel clear, fast, and usable.',
  },
  {
    title: 'Design systems',
    body: 'Reusable UI foundations, tokens, and component patterns that help teams ship consistently.',
  },
  {
    title: 'Web3 UX',
    body: 'Wallet, reward, protocol, and messaging experiences that reduce friction for mainstream users.',
  },
  {
    title: 'Performance polish',
    body: 'Interaction, loading, accessibility, and frontend architecture decisions that hold up at scale.',
  },
];

export const skills = [
  'Javascript/TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Web3 / Ethers.js',
  'CSS/SASS/SCSS',
  'Redux/Zustand',
  'Git/GitHub',
  'REST APIs',
  'TailwindCSS',
  'Styled-Components',
  'Ant design',
  'TanStack Query',
  'SEO/Performance optimization',
  'CI/CD',
];

export const quotes = [
  "The best error message is the one that never shows up.",
  "Simplicity is the ultimate sophistication.",
  "Code is read more often than it is written.",
  "First, solve the problem. Then, write the code.",
  "Make it work, make it right, make it fast.",
  "Every great developer you know got there by solving problems they were unqualified to solve.",
  "The function of good software is to make the complex appear simple.",
  "It's not a bug — it's an undocumented feature.",
  "Stay curious. Break things. Learn fast.",
  "Good design is as little design as possible.",
  "Ships that don't sail serve no one.",
  "Done is better than perfect, but perfect ships.",
];
