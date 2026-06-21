'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import FloatingNavbar from "@/components/FloatingNavbar";
import DynamicBackground from "@/components/DynamicBackground";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollTop = () => {
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Tracking active section with scroll positions
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200; // Adding offset threshold

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
     <div className="min-h-screen text-white select-none relative scroll-smooth selection:bg-[#6366F1]/30 selection:text-white">
      {/* Dynamic Aurora background setup */}
      <DynamicBackground />

      {/* Glass navigation container */}
      <FloatingNavbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative flex flex-col items-center">
        {/* HERO SECTION */}
        <HeroSection onNavClick={handleNavClick} />

        {/* TRANSITION MARQUEE OF TECHS */}
        <TechMarquee />

        {/* ABOUT SECTION */}
        <AboutSection onNavClick={handleNavClick} />

        {/* COMPREHENSIVE SKILLS SHOWCASE */}
        <SkillsSection />

        {/* EXPERIENCE TIMELINE */}
        <ExperienceSection />

        {/* SHADOW-GATED PROJECTS PORTFOLIO */}
        {/* <ProjectsSection /> */}

        {/* PRODUCT DELIVERY SERVICES */}
        <ServicesSection />

        {/* TESTIMONIAL REVIEWS */}
        {/* <TestimonialsSection /> */}

        {/* CONTACT GATEWAY & AI CONSOLE ASSISTANT */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer onScrollTop={handleScrollTop} />
    </div>
    </>

  );
}
