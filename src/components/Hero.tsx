import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, ChevronDown, CheckCircle2, Terminal, Code2, Sparkles, Activity, X } from 'lucide-react';
import profileImage from '@/assets/profile-photo.png';
import githubData from '../data/github-data.json';
import HeroWorkspace from './HeroWorkspace';

const Hero = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsImageModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 relative overflow-hidden min-h-[90vh] flex flex-col justify-between">
      
      {/* Imperceptible atmosphere glow (max 0.04 opacity) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(circle_at_50%_0%,rgba(94,106,210,0.04),transparent_45%)] pointer-events-none blur-3xl z-0" />

      {/* SatNaing Inspired Background Watermark Ticker Tape Overlay (From the Top) */}
      <div className="absolute -top-16 inset-x-0 bottom-0 overflow-hidden pointer-events-none z-0 select-none flex flex-col justify-start pt-4 gap-8 sm:gap-12 opacity-[0.03] scale-110">
        {[
          "FULL-STACK DEVELOPER • AI ENGINEER • REACT NATIVE • FASTAPI • PYTHON • TYPESCRIPT •",
          "SOFTWARE DEVELOPER INTERN • TRUCK HAI • IAD HOSPITAL SYSTEM • RESUMEROAST •",
          "REACT.JS • EXPO • POSTGRESQL • SUPABASE • SENTENCE-BERT • U-NET • OPENCV •",
          "FULL-STACK DEVELOPER • AI ENGINEER • REACT NATIVE • FASTAPI • PYTHON • TYPESCRIPT •",
          "SOFTWARE DEVELOPER INTERN • TRUCK HAI • IAD HOSPITAL SYSTEM • RESUMEROAST •",
          "REACT.JS • EXPO • POSTGRESQL • SUPABASE • SENTENCE-BERT • U-NET • OPENCV •",
          "FULL-STACK DEVELOPER • AI ENGINEER • REACT NATIVE • FASTAPI • PYTHON • TYPESCRIPT •",
          "SOFTWARE DEVELOPER INTERN • TRUCK HAI • IAD HOSPITAL SYSTEM • RESUMEROAST •",
          "REACT.JS • EXPO • POSTGRESQL • SUPABASE • SENTENCE-BERT • U-NET • OPENCV •",
          "FULL-STACK DEVELOPER • AI ENGINEER • REACT NATIVE • FASTAPI • PYTHON • TYPESCRIPT •",
        ].map((tapeText, idx) => (
          <div 
            key={idx} 
            className={`font-mono text-5xl sm:text-7xl font-extrabold uppercase tracking-widest text-[#F7F8F8] whitespace-nowrap leading-none ${
              idx % 2 === 0 ? 'rotate-[-6deg] -translate-x-16' : 'rotate-[-6deg] translate-x-16'
            }`}
          >
            {tapeText} {tapeText}
          </div>
        ))}
      </div>

      {/* Fixed Right-Hand Social Media Bar (SatNaing Style) */}
      <div className="fixed right-6 bottom-8 z-40 hidden xl:flex flex-col items-center gap-4 text-[#A7ADB8] font-sans">
        <a
          href="https://github.com/Yashas8gatty"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors p-1"
          title="GitHub Profile"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/yashasgatty"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors p-1"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:yashasgatty0@gmail.com"
          className="hover:text-white transition-colors p-1"
          title="Direct Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-16 bg-white/[0.1]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full my-auto space-y-12">
        
        {/* SatNaing Inspired Split 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN: Hero Introduction Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 font-sans">
            
            {/* Greeting Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101113] border border-white/[0.06] text-xs font-mono text-[#A7ADB8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#26B56B]" />
              <span>Hi, my name is</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F8F8] font-sans leading-[1.08]">
              Yashas H Gatty
            </h1>

            {/* Highlighted Role Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#26B56B] font-sans tracking-tight">
              Software Developer Intern & AI Engineer
            </h2>

            {/* Paragraph Description */}
            <p className="text-xs sm:text-sm text-[#A7ADB8] leading-relaxed max-w-xl">
              I am a Software Developer Intern and AI Engineer with a passion for building production applications. With expertise in React Native (Expo), TypeScript, React, and FastAPI on the backend, I bring structured technical skills and creative problem-solving to every system.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-3 pt-2 items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="linear-btn-primary px-5 py-2.5 text-xs flex items-center gap-2 font-medium"
              >
                <span>Contact me!</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="linear-btn-secondary px-4 py-2.5 text-xs flex items-center gap-2 font-medium"
              >
                <span>View Projects</span>
              </button>

              <a
                href="/Yashas-H-Gatty.pdf?v=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="linear-btn-secondary px-4 py-2.5 text-xs flex items-center gap-2 font-medium"
                >
                  <Download className="w-3.5 h-3.5 text-[#A7ADB8]" />
                  <span>Resume</span>
                </button>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Featured Developer Profile & Workspace Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="linear-panel rounded-xl border border-white/[0.08] bg-[#0C0D0F] p-5 space-y-4 shadow-2xl relative group">
              
              {/* Profile Image & Status Header */}
              <div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
                <div className="relative shrink-0">
                  <img 
                    src={profileImage} 
                    alt="Yashas H Gatty" 
                    onClick={() => setIsImageModalOpen(true)}
                    className="w-16 h-16 rounded-lg object-cover border border-white/[0.1] shadow-lg group-hover:scale-105 transition-all duration-300 cursor-pointer hover:border-white/30" 
                    title="Click to enlarge photo"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#08090A] flex items-center justify-center pointer-events-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#26B56B] animate-pulse" />
                  </div>
                </div>

                <div className="space-y-1 font-sans text-xs">
                  <div className="font-semibold text-sm text-[#F7F8F8]">Yashas H Gatty</div>
                  <div className="text-[11px] text-[#A7ADB8]">B.E. AI & ML (2023-2027)</div>
                  <div className="text-[10px] font-mono text-[#26B56B] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Open for Software Roles</span>
                  </div>
                </div>
              </div>

              {/* Active Roles & Core Specs */}
              <div className="space-y-2 font-sans text-xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85]">CURRENT ENGAGEMENTS</div>
                
                <div className="p-2.5 rounded bg-[#101113] border border-white/[0.04] space-y-1">
                  <div className="text-[#F7F8F8] font-medium text-xs">Truck Hai Technologies</div>
                  <div className="text-[11px] text-[#A7ADB8]">Software Developer Intern • Production Web & Mobile</div>
                </div>

                <div className="p-2.5 rounded bg-[#101113] border border-white/[0.04] space-y-1">
                  <div className="text-[#F7F8F8] font-medium text-xs">Institute of Applied Dermatology</div>
                  <div className="text-[11px] text-[#A7ADB8]">Full Stack Developer • Enterprise Hospital System</div>
                </div>
              </div>

              {/* Core Technologies Badges */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85]">CORE STACK</div>
                <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                  {['React Native', 'Expo', 'TypeScript', 'React.js', 'FastAPI', 'PostgreSQL', 'Python'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.06] text-[#F7F8F8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Live Contributions Badge */}
              <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between font-mono text-[11px] text-[#747A85]">
                <span>GitHub Past Year</span>
                <span className="text-[#F7F8F8] font-semibold">{githubData.stats.totalContributions} Contributions</span>
              </div>

            </div>
          </div>

        </div>

        {/* Live Workspace Preview Below Split Grid */}
        <div className="pt-6">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-3 text-center">
            ACTIVE DEVELOPMENT WORKSPACE // YASHAS WORKSPACE
          </div>
          <HeroWorkspace />
        </div>

      </div>

      {/* SatNaing Inspired Bottom Scroll Mouse Indicator */}
      <div className="pt-8 flex flex-col items-center gap-1.5 text-[#747A85] font-mono text-[10px] select-none">
        <span>Scroll</span>
        <button
          onClick={() => scrollToSection('about')}
          className="w-5 h-8 rounded-full border border-white/[0.1] flex items-center justify-center hover:border-white/30 transition-colors"
          title="Scroll to About"
        >
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#A7ADB8]" />
        </button>
      </div>

      {/* Interactive Profile Image Pop-Up Lightbox Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090A]/90 backdrop-blur-md font-sans text-xs select-none transition-all duration-300"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div 
            className="linear-panel rounded-xl border border-white/[0.1] bg-[#0C0D0F] p-4 shadow-2xl max-w-sm sm:max-w-md w-full space-y-3 relative transition-all transform scale-100 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-2 text-[11px] font-mono text-[#A7ADB8]">
              <span className="text-[#F7F8F8] font-medium font-sans">Yashas H Gatty — Profile Photo</span>
              <button 
                onClick={() => setIsImageModalOpen(false)}
                className="p-1 rounded hover:bg-white/[0.06] text-[#A7ADB8] hover:text-white transition-colors"
                title="Close modal (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Enlarged Photo Container */}
            <div className="overflow-hidden rounded-lg border border-white/[0.08] bg-[#08090A] flex items-center justify-center">
              <img 
                src={profileImage} 
                alt="Yashas H Gatty Profile" 
                className="w-full max-h-[65vh] object-cover rounded-lg"
              />
            </div>

            {/* Footer Specifications */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#747A85] pt-1">
              <span>Software Developer Intern & AI Engineer</span>
              <span>Press Esc to close</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;