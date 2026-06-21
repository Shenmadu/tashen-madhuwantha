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
    location: 'colombo',
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
    location: 'Panadura',
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
    title: 'Luxury Hotel & Booking Platform',
    summary: 'A high-performance hotel website featuring a seamless room booking system, built with Next.js and Tailwind CSS.',
    description: 'This fully responsive hotel website provides guests with a premium digital experience, integrating an intuitive booking system for checking room availability and managing reservations. Engineered using Next.js and strictly typed with TypeScript, the application guarantees high performance and maintainability. The user interface is meticulously crafted with Tailwind CSS to deliver a luxurious, modern aesthetic that looks pristine across all devices.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    // githubUrl: 'https://github.com/tashenmadhuwantha/hotel-booking-website',
    demoUrl: 'https://beach-hotel-matara-page.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Full Stack',
    isFeatured: true
  },
  {
    id: 'p2',
    title: 'Mini Book Rental Platform',
    summary: 'A full-stack platform built with Spring Boot and React that allows users to seamlessly browse, rent, and return books.',
    description: 'This Mini Book Rental Platform provides a comprehensive solution for managing book inventories and user rentals. Engineered with clean architecture and scalability in mind, the backend is powered by Spring Boot, Spring Data JPA, and MySQL, offering a secure RESTful API with JWT-based authentication. The highly responsive frontend is built with React, utilizing Redux Toolkit (RTK Query) for efficient state management, Axios for data fetching, and React Hook Form for robust validation. Key features include paginated browsing, filtering by author and availability, and dedicated admin controls for adding new inventory.',
    technologies: ['React', 'Redux Toolkit', 'Spring Boot', 'MySQL', 'JWT'],
    githubUrl: 'https://github.com/Shenmadu/Library-managment-platform.git',
    // demoUrl: 'https://demo.apexflow.io',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Full Stack',
    isFeatured: true
  },
  {
    id: 'p3',
    title: 'Leave Management System',
    summary: 'A full-stack platform built with Laravel 11 and React.js for managing employee leave requests with secure role-based access.',
    description: 'This full-stack Leave Management System provides a complete platform for handling employee leave requests efficiently. Engineered with a Laravel 11 backend and a highly responsive React.js frontend, it features customized dashboards tailored for both Admins and Employees. The application ensures secure, role-based access control using Laravel Passport for OAuth2 token-based authentication, while smoothly interacting with a MySQL database via robust RESTful API endpoints.',
    technologies: ['React.js', 'Laravel 11', 'MySQL', 'Laravel Passport', 'REST API'],
    githubUrl: 'https://github.com/Shenmadu/Leave-management-system.git', // Update the repo name if needed
    // demoUrl: 'https://demo.yourdomain.com',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Full Stack',
    isFeatured: true
  },  
  {
    id: 'p4',
    title: 'Inventory-management',
    summary: 'A standalone desktop application designed to streamline order processing and real-time inventory tracking.',
    description: 'This standalone order and inventory management system provides a highly responsive desktop interface for tracking stock levels, managing product catalogs, and seamlessly processing customer orders. Built utilizing a robust layered architecture, it ensures a clean separation of concerns between the presentation, business logic, and data access layers. The UI is powered by JavaFX, while Hibernate ORM is implemented to efficiently handle complex database operations and data persistence, resulting in a reliable solution for business environments.',
    technologies: ['Java FX', 'Hibernate', 'Layered Architecture'],
    githubUrl: 'https://github.com/Shenmadu/Inventory-management.git',
    // demoUrl: 'https://demo.novabank.net',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Full Stack',
    isFeatured: true
  },
  {
    id: 'p5',
    title: 'Pharmacy Management System',
    summary: 'A comprehensive management system built with Laravel to efficiently track medicine inventory, manage suppliers, and process sales.',
    description: 'This Pharmacy Management System streamlines daily operations for medical dispensaries. Built with a robust Laravel backend, it features real-time inventory tracking with expiration date alerts, supplier management, and an efficient point-of-sale billing interface. The platform ensures secure data handling and provides insightful reporting for daily sales and stock levels to maintain seamless pharmacy workflows.',
    technologies: ['Laravel', 'React.js', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/Shenmadu/laravel-phamacy.git',
    // demoUrl: 'https://demo.yourdomain.com',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Full Stack',
    isFeatured: false
  },
  {
    id: 'p6',
    title: 'POS System-FX',
    summary: 'A robust Point of Sale desktop application utilizing a layered architecture for streamlined sales transactions and data management.',
    description: 'This Point of Sale (POS) system provides a comprehensive desktop interface designed to handle daily retail transactions, product inventory, and customer records efficiently. Engineered with a strict layered architecture, it ensures a clean separation between the JavaFX UI, business logic, and data access tiers. The project utilizes Maven for streamlined dependency management and integrates Hibernate ORM to handle complex database operations reliably, ensuring a smooth and responsive checkout experience.',
    technologies: ['JavaFX', 'Hibernate', 'Maven', 'Layered Architecture'],
    githubUrl: 'https://github.com/Shenmadu/POS-Layered-Architecture-FX.git',
    // demoUrl: 'https://demo.scribe-editor.app',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'Full Stack', 
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
