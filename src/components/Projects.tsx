import { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Code2, Sparkles, Layers, Activity } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI / ML' | 'Full Stack' | 'Research'>('All');
  const categories = ['All', 'Full Stack', 'AI / ML', 'Research'] as const;

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="border-b border-white/[0.06] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-0.5">FEATURED WORK // SHOWCASE</div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F7F8F8] font-sans">
              Software Products & Research
            </h2>
          </div>

          {/* Filter Categories Bar */}
          <div className="flex items-center gap-1 bg-[#101113] p-1 rounded border border-white/[0.06] select-none self-start sm:self-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded text-xs transition-colors font-medium ${
                  activeCategory === cat
                    ? 'bg-[#141517] text-[#F7F8F8] border border-white/[0.06]'
                    : 'text-[#A7ADB8] hover:text-[#F7F8F8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Rhythm: Project 01 (Full-Width) -> Projects 02 & 03 (Two-Column) -> Project 04 (Full-Width) */}
        <div className="space-y-12">

          {/* PROJECT 01: ResumeRoast (Full-Width Featured Showcase) */}
          <div className="space-y-5">
            <div className="border-b border-white/[0.06] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#747A85]">
                  PROJECT-001
                </span>
                <span className="text-[#747A85]">•</span>
                <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#F7F8F8]">
                  ResumeRoast
                </h3>
                <span className="text-xs text-[#A7ADB8] font-medium hidden md:inline">— AI Resume Analysis Platform</span>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded status-badge-completed self-start sm:self-center">
                ✓ COMPLETED PRODUCT
              </span>
            </div>

            {/* Split Grid: Software Mockup vs Specs + Code Preview */}
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column Software Mockup (7 cols) */}
              <div className="lg:col-span-7 linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] p-4 space-y-3 font-sans">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-xs">
                  <span className="font-mono text-[#F7F8F8]">ResumeRoast / Analysis Console</span>
                  <span className="font-mono text-[10px] text-[#26B56B]">main branch</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 font-mono text-center">
                  <div className="p-2 rounded bg-[#101113] border border-white/[0.04]">
                    <div className="text-[10px] text-[#747A85]">ATS SCORE</div>
                    <div className="text-base font-bold text-[#F7F8F8] mt-0.5">82.8%</div>
                  </div>
                  <div className="p-2 rounded bg-[#101113] border border-white/[0.04]">
                    <div className="text-[10px] text-[#747A85]">OCR ACCURACY</div>
                    <div className="text-base font-bold text-[#F7F8F8] mt-0.5">82.8%</div>
                  </div>
                  <div className="p-2 rounded bg-[#101113] border border-white/[0.04]">
                    <div className="text-[10px] text-[#747A85]">LATENCY</div>
                    <div className="text-base font-bold text-[#F7F8F8] mt-0.5">&lt;224ms</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="text-[10px] font-mono uppercase text-[#747A85]">SKILLS DETECTED</div>
                  <div className="flex flex-wrap gap-2 text-[#A7ADB8]">
                    <span className="flex items-center gap-1 text-[#26B56B]"><CheckCircle2 className="w-3 h-3" /> Python</span>
                    <span className="flex items-center gap-1 text-[#26B56B]"><CheckCircle2 className="w-3 h-3" /> React.js</span>
                    <span className="flex items-center gap-1 text-[#26B56B]"><CheckCircle2 className="w-3 h-3" /> Machine Learning</span>
                    <span className="flex items-center gap-1 text-[#26B56B]"><CheckCircle2 className="w-3 h-3" /> TypeScript</span>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-[#101113] border border-white/[0.04] text-xs text-[#A7ADB8] space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#747A85]">SUGGESTIONS & CRITIQUE</div>
                  <div>• Quantify measurable achievements in Software Developer Intern role</div>
                  <div>• Add explicit TypeScript interfaces & PostgreSQL schema references</div>
                </div>
              </div>

              {/* Right Column Code Preview & Specs (5 cols) */}
              <div className="lg:col-span-5 space-y-3 font-sans text-xs">
                <p className="text-[#A7ADB8] leading-relaxed">
                  Full-stack AI resume analysis platform using LLMs to process PDF resumes, generate ATS scores, structured critiques, and actionable recommendations with resilient Supabase processing.
                </p>

                {/* Code Preview Box */}
                <div className="linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] p-3 space-y-1.5 font-mono text-[11px] text-[#A7ADB8]">
                  <div className="text-[10px] text-[#747A85] border-b border-white/[0.04] pb-1">ResumeRoast / analyzer.ts</div>
                  <div className="space-y-1 text-slate-300">
                    <div><span className="text-[#A7ADB8]">import</span> &#123; analyzeResume &#125; <span className="text-[#A7ADB8]">from</span> <span className="text-[#26B56B]">'@engine/parser'</span></div>
                    <div><span className="text-[#A7ADB8]">const</span> result = <span className="text-[#A7ADB8]">await</span> analyzeResume(file)</div>
                    <div><span className="text-[#A7ADB8]">return</span> &#123;</div>
                    <div className="pl-4">score: result.atsScore,</div>
                    <div className="pl-4">suggestions: result.suggestions</div>
                    <div>&#125;</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                  {['Python', 'FastAPI', 'React.js', 'OCR', 'Supabase'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.06] text-[#F7F8F8]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2.5 pt-1">
                  <a href="https://github.com/Yashas8gatty/ResumeRoast" target="_blank" rel="noopener noreferrer">
                    <button className="linear-btn-secondary px-3 py-1.5 text-xs flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5 text-[#A7ADB8]" />
                      <span>Repository</span>
                    </button>
                  </a>

                  <a href="https://resumeroast-in.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="linear-btn-primary px-3 py-1.5 text-xs flex items-center gap-1.5">
                      <span>View Live Product</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* TWO-COLUMN GRID: Project 02 (EduCareer) & Project 03 (Wildfire Digital Twin) */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* PROJECT 02: EduCareer */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="border-b border-white/[0.06] pb-2 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#747A85]">
                    PROJECT-002
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded status-badge-completed">
                    ✓ COMPLETED
                  </span>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-base sm:text-lg text-[#F7F8F8]">EduCareer</h3>
                  <p className="text-xs text-[#A7ADB8] mt-0.5">AI Career Guidance & Recommendation System</p>
                </div>

                <p className="text-xs text-[#A7ADB8] leading-relaxed font-sans">
                  AI career guidance platform offering personalized course, internship, and job recommendations using semantic and hybrid ranking models (Sentence-BERT, Graph-BERT, OCR/NLP, FastAPI).
                </p>

                {/* EduCareer Product Mockup */}
                <div className="linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] p-3.5 space-y-2 font-sans text-xs">
                  <div className="flex justify-between text-[10px] font-mono text-[#747A85] border-b border-white/[0.04] pb-1">
                    <span>STUDENT GUIDANCE MATCHING</span>
                    <span className="text-[#F7F8F8]">89.2% SKILL MATCH</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-[#101113] border border-white/[0.04]">
                      <div className="text-[10px] text-[#747A85]">OCR PIPELINE</div>
                      <div className="text-sm font-bold text-[#F7F8F8]">82.8%</div>
                    </div>
                    <div className="p-2 rounded bg-[#101113] border border-white/[0.04]">
                      <div className="text-[10px] text-[#747A85]">TASK MATCH</div>
                      <div className="text-sm font-bold text-[#F7F8F8]">96%</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                  {['React.js', 'Python', 'FastAPI', 'Sentence-BERT', 'Graph-BERT'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.06] text-[#F7F8F8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <a href="https://github.com/Uttham-412/educareer" target="_blank" rel="noopener noreferrer">
                  <button className="linear-btn-secondary w-full py-1.5 text-xs flex items-center justify-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-[#A7ADB8]" />
                    <span>View Repository</span>
                  </button>
                </a>
              </div>
            </div>

            {/* PROJECT 03: Wildfire Digital Twin */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="border-b border-white/[0.06] pb-2 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#747A85]">
                    PROJECT-003
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded status-badge-ongoing">
                    ● ACTIVE SYSTEM
                  </span>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-base sm:text-lg text-[#F7F8F8]">Digital Twin Wildfire Detection</h3>
                  <p className="text-xs text-[#A7ADB8] mt-0.5">Satellite Remote Sensing & U-Net Segmentation</p>
                </div>

                <p className="text-xs text-[#A7ADB8] leading-relaxed font-sans">
                  Digital Twin framework for real-time wildfire detection and spread analysis using remote sensing satellite imagery, U-Net semantic segmentation, TensorFlow, and OpenCV.
                </p>

                {/* Wildfire Simulation Mockup */}
                <div className="linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] p-3.5 space-y-2 font-sans text-xs">
                  <div className="flex justify-between text-[10px] font-mono text-[#747A85] border-b border-white/[0.04] pb-1">
                    <span>U-NET SEGMENTATION SIMULATION</span>
                    <span className="text-[#F7F8F8]">88.4% ACCURACY</span>
                  </div>
                  <div className="p-2 rounded bg-[#101113] border border-white/[0.04] flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#F7F8F8]">Satellite Map Layer: Active</span>
                    <span className="text-[#26B56B]">REAL-TIME DETECT</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                  {['Python', 'TensorFlow', 'U-Net', 'OpenCV', 'Geospatial'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.06] text-[#F7F8F8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <a href="https://github.com/Yashas8gatty" target="_blank" rel="noopener noreferrer">
                  <button className="linear-btn-secondary w-full py-1.5 text-xs flex items-center justify-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-[#A7ADB8]" />
                    <span>View Repository</span>
                  </button>
                </a>
              </div>
            </div>

          </div>

          {/* PROJECT 04: Campaign AI (Full-Width Featured Showcase) */}
          <div className="space-y-4 border-t border-white/[0.06] pt-6">
            <div className="border-b border-white/[0.06] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#747A85]">
                  PROJECT-004
                </span>
                <span className="text-[#747A85]">•</span>
                <h3 className="font-sans font-semibold text-base sm:text-lg text-[#F7F8F8]">
                  Campaign AI
                </h3>
                <span className="text-xs text-[#A7ADB8] font-medium hidden md:inline">— AI Marketing Campaign Generator</span>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded status-badge-completed self-start sm:self-center">
                ✓ COMPLETED PRODUCT
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2.5 text-xs text-[#A7ADB8] font-sans">
                <p className="leading-relaxed">
                  Campaign planning and analytics platform designed for business owners to create, manage, and track AI-assisted marketing campaigns with JWT route protection, QR-based engagement metrics, and redemption insights.
                </p>
                <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                  {['React.js', 'Vite', 'Tailwind CSS', 'JWT Auth', 'REST APIs'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.06] text-[#F7F8F8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4">
                <a href="https://github.com/Yashas8gatty/market_campaignAI" target="_blank" rel="noopener noreferrer">
                  <button className="linear-btn-secondary w-full py-2 text-xs flex items-center justify-center gap-2">
                    <Github className="w-3.5 h-3.5 text-[#A7ADB8]" />
                    <span>View Repository</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
