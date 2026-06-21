import { SkillCategory, Project, Experience, Service, Testimonial, StatItem } from './types';

export const statsData: StatItem[] = [
  {
    id: 'exp',
    value: '2+ Years',
    label: 'Industry Experience',
    sublabel: 'Custom SaaS & Cloud Native Systems',
    iconName: 'Award'
  },
  {
    id: 'projs',
    value: '20+ Projects',
    label: 'Completed Solutions',
    sublabel: 'Enterprise, Open-Source & Web Apps',
    iconName: 'CodeXml'
  },
  {
    id: 'techs',
    value: '15+ Technologies',
    label: 'Mastered Tools',
    sublabel: 'Full Stack, Database & cloud devops',
    iconName: 'Cpu'
  },
  {
    id: 'satis',
    value: '100%',
    label: 'Client Satisfaction',
    sublabel: 'Pragmatic Delivery & Pure Craft',
    iconName: 'Sparkles'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    iconName: 'Layers',
    skills: [
      { name: 'Next.js', percentage: 95, iconName: 'Atom', level: 'Expert' },
      { name: 'React', percentage: 90, iconName: 'Terminal', level: 'Expert' },
      // { name: 'Angular', percentage: 75, iconName: 'ShieldAlert', level: 'Competent' },
      { name: 'JavaScript', percentage: 95, iconName: 'FileJson', level: 'Master' },
      { name: 'TypeScript', percentage: 92, iconName: 'Braces', level: 'Expert' }
    ]
  },
  {
    category: 'Backend Architecture',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot', percentage: 85, iconName: 'Leaf', level: 'Expert' },
      { name: 'Laravel', percentage: 80, iconName: 'Wind', level: 'Expert' },
      { name: 'Node.js', percentage: 90, iconName: 'Coffee', level: 'Expert' },
      { name: 'Express.js', percentage: 90, iconName: 'Activity', level: 'Expert' }
    ]
  },
  {
    category: 'Databases',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', percentage: 88, iconName: 'Scale', level: 'Expert' },
      { name: 'MySQL', percentage: 85, iconName: 'Database', level: 'Experienced' }
    ]
  },
  {
    category: 'Hosting & Server Management',
    iconName: 'Server',
    skills: [
      { name: 'Shared Hosting', percentage: 95, iconName: 'Database', level: 'Expert' }, // cPanel/DirectAdmin දන්නවා නම් ඒකත් සඳහන් කරන්න
      { name: 'DNS & Domains', percentage: 90, iconName: 'Globe', level: 'Experienced' },
      { name: 'SSL/Security', percentage: 85, iconName: 'Shield', level: 'Experienced' }
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'xp1',
    role: 'Software Engineer',
    company: 'Candy Factory (Pvt) Ltd.',
    location: 'Pannipitiya, Sri Lanka',
    duration: '2025 Sep- Present',
    bullets: [
      'Developing modern web applications using AI-powered technologies and industrystandard frameworks. API-driven systems, and building efficient, maintainable, and scalable solutions.',
      'Working with Node.js, React.js, Next.js, MySQL, managing state with Redux, integrating APIs with AJAX , using GitHub for version control.  deployed and hosted applications on a VPS server, configuring Nginx for production.',
    ],
    glowing: true
  },
  {
    id: 'xp2',
    role: 'Software Engineer - Full stack',
    company: 'Codeaisys Software Solutions - 4A Technologies (pvt) Ltd',
    location: 'Matara, Sri Lanka',
    duration: '2024 Dec- 2025 Aug',
    bullets: [
      'Developing web applications using modern full-stack technologies, including secure payment integrations with Stripe, ensuring efficient and maintainable solutions.',
      'Working with Node.js, React.js, Next.js, Spring Boot, Laravel, PHP, MySQL, managing state with Redux, integrating APIs with AJAX & Firebase, using GitHub for version control, and collaborating through JIRA for agile development. Integrated Stripe payment gateway for card payments, subscriptions, and webhook handling',
      'Continued contribution in the Vehicle Management System, Restaurant Management System - V2, Event Management System delivering high-quality, scalable solutions'
    ],
    glowing: false
  },
  {
    id: 'xp3',
    role: 'Associate Software Engineer - Full stack',
    company: 'Codeaisys Software Solutions - 4A Technologies (pvt) Ltd',
    location: 'Matara, Sri Lanka',
    duration: '2024 April- 2024 Dec',
    bullets: [
      'Developing front-end and back-end solutions using Node.js, React.js, Next.js, Spring Boot, Laravel, PHP, and MySQL, Managing state with Redux and handling API integrations with AJAX and Firebase, used GitHub for version control, and collaborated through JIRA..',
      'Restaurant Management System-V1, Student Management System, Vehicle Rental Management System, Successfully Delivered that Projects, showcasing dedication and technical expertise.',
      'Designed a custom caching layer on top of PostgreSQL that dropped database latency by 45ms per load.'
    ],
    glowing: false
  },
  {
    id: 'xp4',
    role: 'Trainee Software Engineer',
    company: 'Institute Of Computer Engineering Technology- ICET.',
    location: 'Panadura, Srilanka',
    duration: '2023 June- 2024 March',
    bullets: [
      'Contributed to requirements gathering, design, and implementation as a full-stack developer',
      'Developed a full-featured Hotel & Restaurant Management System, optimizing room and restaurant operations, customer data handling, and order/booking management..',
      'Assisted database administrators in executing schema index optimizations for high-volume transactions.'
    ],
    glowing: false
  }
];

export const projectsData: Project[] = [
  {
    id: 'p1',
    title: 'CognitiveOS - AI Dashboard',
    summary: 'A luxury Vercel-style real-time analytical workspace connected to complex Large Language Models.',
    description: 'CognitiveOS is a professional AI assistant and analytical sandbox that allows users to prompt, orchestrate, and index local knowledge blocks. Built inside a secure Next.js architecture with high-fidelity glassmorphic cards.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'TailwindCSS'],
    githubUrl: 'https://github.com/tashenmadhuwantha/cognitive-os',
    demoUrl: 'https://demo.cognitive-os.io',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Full Stack',
    isFeatured: true
  },
  {
    id: 'p2',
    title: 'ApexFlow API Gateway',
    summary: 'A lightning-fast, ultra-secure token-gated microservice router built with Node.js and AWS.',
    description: 'A custom, developer-first microservice API gateway configured for hyper-growth startups. Designed with built-in rate-limiting, IP whitelisting, and a beautifully structured telemetry logging grid.',
    technologies: ['Node.js', 'Express.js', 'AWS', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/tashenmadhuwantha/apexflow-gateway',
    demoUrl: 'https://demo.apexflow.io',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Cloud',
    isFeatured: true
  },
  {
    id: 'p3',
    title: 'NovaBank - Fintech SaaS',
    summary: 'A responsive digital banking dashboard featuring interactive charting (Recharts) and multi-currency ledgers.',
    description: 'NovaBank displays instant asset transfers, user portfolio trends, and multi-ledger entries in high contrast Dark Mode. Connects secure client state to PostgreSQL through optimized repositories.',
    technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Recharts', 'TailwindCSS'],
    githubUrl: 'https://github.com/tashenmadhuwantha/novabank-fintech',
    demoUrl: 'https://demo.novabank.net',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Full Stack',
    isFeatured: true
  },
  {
    id: 'p4',
    title: 'Stratus - Docker Scheduler',
    summary: 'A clean developer console to orchestrate, analyze, and deploy containerized instances locally and on AWS.',
    description: 'Stratus replaces dirty terminal routines with a beautiful bento box configuration suite. Tracks real-time container CPU load, RAM metrics, and system status markers gracefully.',
    technologies: ['Laravel', 'React', 'Docker', 'AWS', 'MySQL'],
    githubUrl: 'https://github.com/tashenmadhuwantha/stratus-orchestration',
    demoUrl: 'https://demo.stratus.dev',
    imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Cloud',
    isFeatured: false
  },
  {
    id: 'p5',
    title: 'Scribe - Minimalist Markdown editor',
    summary: 'An Apple-inspired local markdown workspace with instant HTML previewing, stats, and PDF export.',
    description: 'Scribe implements the ultimate distraction-free writing environment. Focused purely on custom beautiful typography paired with fluid line counts and automatic draft saves to localStorage.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Motion'],
    githubUrl: 'https://github.com/tashenmadhuwantha/scribe-editor',
    demoUrl: 'https://demo.scribe-editor.app',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Frontend',
    isFeatured: false
  }
];

export const servicesData: Service[] = [
  {
    id: 's1',
    title: 'Full Stack Development',
    description: 'Robust end-to-end applications written in high-grade TypeScript, Spring Boot, or Laravel environments.',
    iconName: 'Laptop'
  },
  {
    id: 's2',
    title: 'Web Application Development',
    description: 'Pristine Vite-powered or Next.js stateful client systems complete with high-durability persistence structures.',
    iconName: 'Globe'
  },
  {
    id: 's3',
    title: 'API Development & Gateways',
    description: 'Optimized OpenAPI compliant REST routes, gRPC streams, and real-time WebSockets with low latency.',
    iconName: 'GitMerge'
  },
  {
    id: 's4',
    title: 'UI/UX Interactive Engineering',
    description: 'Futuristic animations, Apple-inspired responsiveness, bento grid structures, and precise dark layouts.',
    iconName: 'Workflow'
  },
  {
    id: 's5',
    title: 'Cloud Orchestration & Deployment',
    description: 'Containerized infrastructure designs with Docker, automated CI/CD chains, and cloud-native serverless models.',
    iconName: 'Server'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    quote: 'Tashen is an exceptional engineer. He completely rebuilt our API architecture, optimizing query times by 40% and deploying a state-of-the-art NextJS console that our team uses daily. A truly dedicated senior-level mindset.',
    author: 'Elena Vokhmina',
    role: 'VP of Product',
    company: 'Synergy SaaS',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 't2',
    quote: 'We hired Tashen to containerize our spring boot microservices and design automated deployment charts. The quality of his code delivery, clean documentation, and focus on details was outstanding. 10/10 recommend!',
    author: 'Marcus Thorne',
    role: 'Lead Architect',
    company: 'CloudStream Systems',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 't3',
    quote: 'Tashen has a rare ability to understand deep system design constraints while being extremely precise about pixel perfect UI elements. His dark glassmorphism SaaS layouts are incredibly smooth and performant.',
    author: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'Apex Analytics',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120'
  }
];

export const techMarqueeData: string[] = [
  'React',
  'Next.js',
  'Angular',
  'TypeScript',
  'JavaScript',
  'Spring Boot',
  'Laravel',
  'Node.js',
  'Express.js',
  'MySQL',
  'PostgreSQL',
  'AWS',
  'Docker',
  'GitHub Actions',
  'Tailwind CSS',
  'Framer Motion',
  'Git',
  'Redis',
  'GraphQL',
  'Framer'
];
