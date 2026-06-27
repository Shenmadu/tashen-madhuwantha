export interface Chunk {
  id: string;
  content: string;
  metadata: { category: string };
}

export const knowledgeBase: Chunk[] = [
  // ── ABOUT / STATS ──────────────────────────────────────────────────────────
  {
    id: "about-1",
    content:
      "Tashen is a full-stack software engineer with 2+ years of industry experience building custom SaaS and cloud-native systems.",
    metadata: { category: "about" },
  },
  {
    id: "about-2",
    content:
      "Tashen has completed 20+ projects spanning enterprise applications, open-source tools, and modern web apps.",
    metadata: { category: "about" },
  },
  {
    id: "about-3",
    content:
      "Tashen has mastered 15+ technologies across full-stack development, databases, and cloud DevOps, with a 100% client satisfaction rate.",
    metadata: { category: "about" },
  },

  // ── SKILLS ─────────────────────────────────────────────────────────────────
  {
    id: "skills-frontend",
    content:
      "Tashen's frontend skills: Next.js (95% – Expert), React (90% – Expert), JavaScript (95% – Master), TypeScript (92% – Expert).",
    metadata: { category: "skills" },
  },
  {
    id: "skills-backend",
    content:
      "Tashen's backend skills: Spring Boot (85% – Expert), Laravel (80% – Expert), Node.js (90% – Expert), Express.js (90% – Expert).",
    metadata: { category: "skills" },
  },
  {
    id: "skills-databases",
    content:
      "Tashen's database skills: PostgreSQL (88% – Expert), MySQL (85% – Experienced).",
    metadata: { category: "skills" },
  },
  {
    id: "skills-hosting",
    content:
      "Tashen's hosting and server management skills: Shared Hosting / cPanel (95% – Expert), DNS & Domains (90% – Experienced), SSL & Security (85% – Experienced).",
    metadata: { category: "skills" },
  },
  {
    id: "skills-other",
    content:
      "Tashen also works with: React, Angular, TypeScript, JavaScript, Spring Boot, Laravel, Node.js, Express.js, MySQL, PostgreSQL, AWS, Docker, GitHub Actions, Tailwind CSS, Framer Motion, Git, Redis, GraphQL.",
    metadata: { category: "skills" },
  },

  // ── EXPERIENCE ─────────────────────────────────────────────────────────────
  {
    id: "exp-1",
    content:
      "Tashen currently works as a Software Engineer at Candy Factory (Pvt) Ltd., Colombo, from September 2025 to the present. He develops modern web applications using AI-powered technologies. Tech stack: Node.js, React.js, Next.js, MySQL, Redux, AJAX, GitHub, Nginx on VPS.",
    metadata: { category: "experience" },
  },
  {
    id: "exp-2",
    content:
      "Tashen worked as a Software Engineer (Full Stack) at Codeaisys Software Solutions – 4A Technologies (Pvt) Ltd, Matara, Sri Lanka, from December 2024 to August 2025. He built applications with Stripe payment integration including subscriptions and webhooks. Delivered a Vehicle Management System, Restaurant Management System V2, and Event Management System. Stack: Node.js, React.js, Next.js, Spring Boot, Laravel, PHP, MySQL, Redux, AJAX, Firebase, GitHub, JIRA.",
    metadata: { category: "experience" },
  },
  {
    id: "exp-3",
    content:
      "Tashen worked as an Associate Software Engineer (Full Stack) at Codeaisys Software Solutions – 4A Technologies (Pvt) Ltd, Matara, Sri Lanka, from April 2024 to December 2024. He delivered a Restaurant Management System V1, Student Management System, and Vehicle Rental Management System. He also designed a custom caching layer on top of PostgreSQL that reduced database latency by 45ms per load.",
    metadata: { category: "experience" },
  },
  {
    id: "exp-4",
    content:
      "Tashen completed a traineeship as a Software Engineer at the Institute of Computer Engineering Technology (ICET), Panadura, from June 2023 to March 2024. He developed a full-featured Hotel and Restaurant Management System and assisted with schema index optimizations for high-volume transactions.",
    metadata: { category: "experience" },
  },

  // ── PROJECTS ───────────────────────────────────────────────────────────────
  {
    id: "proj-1",
    content:
      "Project: Luxury Hotel & Booking Platform. A high-performance hotel website with a seamless room booking system built with Next.js, React, TypeScript, and Tailwind CSS. Live demo: https://beach-hotel-matara-page.vercel.app",
    metadata: { category: "projects" },
  },
  {
    id: "proj-2",
    content:
      "Project: Mini Book Rental Platform. A full-stack platform built with Spring Boot and React for browsing, renting, and returning books. Features JWT authentication, Redux Toolkit (RTK Query), and paginated filtering. GitHub: https://github.com/Shenmadu/Library-managment-platform.git",
    metadata: { category: "projects" },
  },
  {
    id: "proj-3",
    content:
      "Project: Leave Management System. A full-stack platform with Laravel 11 and React.js featuring role-based access control, Laravel Passport OAuth2 authentication, and MySQL. GitHub: https://github.com/Shenmadu/Leave-management-system.git",
    metadata: { category: "projects" },
  },
  {
    id: "proj-4",
    content:
      "Project: Inventory Management System. A standalone desktop application built with JavaFX and Hibernate ORM using a layered architecture for real-time inventory tracking and order processing. GitHub: https://github.com/Shenmadu/Inventory-management.git",
    metadata: { category: "projects" },
  },
  {
    id: "proj-5",
    content:
      "Project: Pharmacy Management System. A comprehensive system built with Laravel and React.js for tracking medicine inventory with expiration alerts, supplier management, and point-of-sale billing. GitHub: https://github.com/Shenmadu/laravel-phamacy.git",
    metadata: { category: "projects" },
  },
  {
    id: "proj-6",
    content:
      "Project: POS System-FX. A Point of Sale desktop application built with JavaFX, Hibernate ORM, and Maven using a strict layered architecture for retail transactions and inventory management. GitHub: https://github.com/Shenmadu/POS-Layered-Architecture-FX.git",
    metadata: { category: "projects" },
  },

  // ── SERVICES ───────────────────────────────────────────────────────────────
  {
    id: "services-1",
    content:
      "Tashen offers Full Stack Development: robust end-to-end applications in TypeScript, Spring Boot, or Laravel.",
    metadata: { category: "services" },
  },
  {
    id: "services-2",
    content:
      "Tashen offers Web Application Development: Next.js and Vite-powered client systems with high-durability persistence.",
    metadata: { category: "services" },
  },
  {
    id: "services-3",
    content:
      "Tashen offers API Development & Gateways: OpenAPI-compliant REST routes, gRPC streams, and real-time WebSockets.",
    metadata: { category: "services" },
  },
  {
    id: "services-4",
    content:
      "Tashen offers UI/UX Interactive Engineering: futuristic animations, Apple-inspired responsiveness, bento grid layouts, and dark mode design.",
    metadata: { category: "services" },
  },
  {
    id: "services-5",
    content:
      "Tashen offers Cloud Orchestration & Deployment: Docker containerization, automated CI/CD pipelines, and cloud-native serverless models.",
    metadata: { category: "services" },
  },

  // ── TESTIMONIALS ───────────────────────────────────────────────────────────
  {
    id: "testimonial-1",
    content:
      "Elena Vokhmina, VP of Product at Synergy SaaS, said: Tashen completely rebuilt their API architecture, optimizing query times by 40%, and deployed a Next.js console the team uses daily. She described him as having a truly dedicated senior-level mindset.",
    metadata: { category: "testimonials" },
  },
  {
    id: "testimonial-2",
    content:
      "Marcus Thorne, Lead Architect at CloudStream Systems, said: Tashen containerized their Spring Boot microservices and designed automated deployment charts with outstanding code quality and clean documentation. He gave a 10/10 recommendation.",
    metadata: { category: "testimonials" },
  },
  {
    id: "testimonial-3",
    content:
      "Sarah Jenkins, Founder & CEO of Apex Analytics, said: Tashen has a rare ability to understand deep system design while delivering pixel-perfect UI. His dark glassmorphism SaaS layouts are incredibly smooth and performant.",
    metadata: { category: "testimonials" },
  },
];