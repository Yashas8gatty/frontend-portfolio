import { useState, useEffect } from 'react';
import { Download, MapPin, Clock, Award, FileText } from 'lucide-react';
import profileImage from '@/assets/profile-photo.png';

const About = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      } as const;
      setLocalTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">

        {/* Section Header (Flat White #F7F8F8) */}
        <div className="border-b border-white/[0.06] pb-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-0.5">SETTINGS // PROFILE</div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F7F8F8] font-sans">
              About & Developer Profile
            </h2>
          </div>
          <div className="text-xs font-mono text-[#747A85] hidden sm:block">
            USER_ID: YASHAS_GATTY
          </div>
        </div>

        {/* Linear Settings Structured Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Profile Quick Info & Live IST Clock (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Identity Badge */}
            <div className="flex items-center gap-3.5 py-2">
              <div className="w-12 h-12 rounded-md overflow-hidden border border-white/[0.08] bg-[#101113] shrink-0">
                <img src={profileImage} alt="Yashas H Gatty" className="w-full h-full object-cover filter brightness-95" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-sm text-[#F7F8F8]">Yashas H Gatty</h3>
                <p className="text-xs text-[#A7ADB8]">Software Developer Intern</p>
                <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded status-badge-ongoing">
                  ● AVAILABLE FOR ROLES
                </span>
              </div>
            </div>

            {/* Profile Rows Divider List */}
            <div className="border-t border-b border-white/[0.06] py-3 space-y-2 text-xs font-sans">
              <div className="flex justify-between items-center py-1">
                <span className="text-[#747A85]">Location</span>
                <span className="text-[#F7F8F8] font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#747A85]" />
                  Mangaluru, Karnataka
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-t border-white/[0.04]">
                <span className="text-[#747A85]">Education</span>
                <span className="text-[#F7F8F8] font-medium">B.E. AI & ML</span>
              </div>

              <div className="flex justify-between items-center py-1 border-t border-white/[0.04]">
                <span className="text-[#747A85]">Institution</span>
                <span className="text-[#F7F8F8] font-medium">Canara Engg. College</span>
              </div>

              <div className="flex justify-between items-center py-1 border-t border-white/[0.04]">
                <span className="text-[#747A85]">Timeline</span>
                <span className="text-[#F7F8F8] font-mono text-[11px]">2023 → 2027</span>
              </div>
            </div>

            {/* Compact Local IST Clock */}
            <div className="flex items-center justify-between py-2 px-1 text-xs">
              <div>
                <div className="text-[10px] font-mono text-[#747A85] uppercase">LOCAL TIME (IST)</div>
                <div className="text-base font-mono font-semibold text-[#F7F8F8] mt-0.5">{localTime || '12:37 PM'}</div>
              </div>
              <div className="text-right text-xs text-[#A7ADB8] font-sans">
                <div>Mangaluru, IN</div>
                <div className="text-[10px] font-mono text-[#747A85]">GMT +5:30</div>
              </div>
            </div>
          </div>

          {/* Settings Specification Details (8 cols) */}
          <div className="lg:col-span-8 space-y-6">

            {/* Section 01: Overview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-xs font-mono font-semibold text-[#F7F8F8] uppercase tracking-wider">
                  <span className="text-[#747A85] mr-1.5">01</span>OVERVIEW & BACKGROUND
                </span>
                <span className="text-xs font-mono text-[#747A85]">SPEC-2026</span>
              </div>

              <div className="text-xs sm:text-sm text-[#A7ADB8] leading-relaxed space-y-2.5 font-sans">
                <p>
                  Final-year undergraduate student pursuing a B.E. in <span className="text-[#F7F8F8] font-medium">Artificial Intelligence & Machine Learning</span> at Canara Engineering College (2023–2027). Specialized in constructing production web applications, cross-platform mobile products, and machine learning pipelines.
                </p>
                <p>
                  Hands-on industry engineering experience as a Software Developer Intern at <span className="text-[#F7F8F8] font-medium">Truck Hai Technologies</span> (React Native Expo, TypeScript, Tailwind CSS, REST APIs, BFF assembly layer) and <span className="text-[#F7F8F8] font-medium">Institute of Applied Dermatology</span> (Hospital Billing & Costing System, Node.js, Express, PostgreSQL, JWT Auth, RBAC).
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {['Full Stack Development', 'React.js & Expo', 'Node.js & Express', 'PostgreSQL Schema', 'AI / ML Architectures', 'FastAPI & LLMs'].map((focus) => (
                  <span key={focus} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.06] text-[#F7F8F8]">
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            {/* Section 02: Published Patent Milestone */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#747A85]" />
                  <span className="text-xs font-mono font-semibold text-[#F7F8F8] uppercase tracking-wider">
                    <span className="text-[#747A85] mr-1.5">02</span>PATENT // MILESTONE
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded status-badge-completed text-[10px] font-mono">
                  ✓ PUBLISHED 2024
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-sans font-semibold text-sm sm:text-base text-[#F7F8F8] leading-snug">
                  System and Method for Unified Career Trajectory Analysis, Adaptive Professional Recommendation, and Automated Resume Management
                </h4>
                <p className="text-xs text-[#A7ADB8] leading-relaxed font-sans">
                  Published Patent specification defining an AI-driven architecture for unified career trajectory modeling, semantic recommendation rankings, and automated resume analysis pipelines.
                </p>
              </div>
            </div>

            {/* Resume Action Bar */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs text-[#A7ADB8]">
                <FileText className="w-4 h-4 text-[#747A85]" />
                <span>Yashas H Gatty — Official Resume Specification (PDF)</span>
              </div>
              <a href="/Yashas-H-Gatty.pdf?v=1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="linear-btn-secondary w-full sm:w-auto px-3.5 py-1.5 text-xs flex items-center justify-center gap-2">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;