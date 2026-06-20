export interface Skill {
  name: string;
  percentage: number;
  iconName: string;
  level: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile' | 'Cloud';
  isFeatured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
  glowing?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'error';
  text: string;
  timestamp: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}
