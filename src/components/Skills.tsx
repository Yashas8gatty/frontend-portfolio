import { useState } from 'react';
import { Database, Layout, Cpu, Brain, Code2, CheckCircle2 } from 'lucide-react';

interface Skill {
  name: string;
  level: string;
  projects: string[];
  since: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Languages',
      icon: Cpu,
      skills: [
        { name: 'Python', level: 'Proficient', projects: ['EduCareer', 'Wildfire Twin'], since: '2023' },
        { name: 'TypeScript', level: 'Proficient', projects: ['Truck Hai', 'IAD System'], since: '2023' },
        { name: 'JavaScript', level: 'Expert', projects: ['ResumeRoast', 'Campaign AI'], since: '2022' },
        { name: 'Golang', level: 'Proficient', projects: ['Backend Systems'], since: '2025' },
        { name: 'SQL', level: 'Proficient', projects: ['IAD PostgreSQL'], since: '2023' },
        { name: 'C', level: 'Proficient', projects: ['Academic Core'], since: '2022' },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend & Mobile',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 'Core Stack', projects: ['Truck Hai', 'ResumeRoast'], since: '2023' },
        { name: 'React Native (Expo)', level: 'Proficient', projects: ['Truck Hai Mobile'], since: '2024' },
        { name: 'Tailwind CSS', level: 'Expert', projects: ['Portfolio', 'Truck Hai'], since: '2023' },
        { name: 'Vite', level: 'Proficient', projects: ['Campaign AI'], since: '2023' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend & DB',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 'Proficient', projects: ['IAD Hospital System'], since: '2024' },
        { name: 'Node.js & Express', level: 'Proficient', projects: ['ResumeRoast', 'IAD'], since: '2023' },
        { name: 'FastAPI', level: 'Proficient', projects: ['EduCareer'], since: '2024' },
        { name: 'Supabase', level: 'Proficient', projects: ['ResumeRoast Storage'], since: '2024' },
        { name: 'MongoDB', level: 'Familiar', projects: ['Web Apps'], since: '2023' },
      ]
    },
    {
      id: 'ai_ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'LLMs & Parsing', level: 'Proficient', projects: ['ResumeRoast Engine'], since: '2025' },
        { name: 'Sentence-BERT', level: 'Proficient', projects: ['EduCareer Guidance'], since: '2024' },
        { name: 'TensorFlow & U-Net', level: 'Proficient', projects: ['Wildfire Digital Twin'], since: '2024' },
        { name: 'OpenCV & OCR', level: 'Proficient', projects: ['Document Extraction'], since: '2024' },
      ]
    },
    {
      id: 'devops',
      title: 'Tools & DevOps',
      icon: Code2,
      skills: [
        { name: 'Git & GitHub', level: 'Expert', projects: ['All Workflows'], since: '2022' },
        { name: 'Postman & Bruno', level: 'Proficient', projects: ['API Validation'], since: '2023' },
        { name: 'Docker', level: 'Familiar', projects: ['Container Runtimes'], since: '2024' },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  const jsonInspectorContent = JSON.stringify(
    {
      name: 'Yashas H Gatty',
      role: 'Software Developer Intern',
      focus: ['Full Stack', 'AI/ML'],
      status: 'available',
      education: 'B.E. AI & ML (2023-2027)',
      location: 'Mangaluru, Karnataka'
    },
    null,
    2
  );

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-white/[0.06] pb-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-0.5">SETTINGS // TECHNICAL STACK</div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F7F8F8] font-sans">
              Technical Capabilities & Specs
            </h2>
          </div>
          <div className="text-xs font-mono text-[#747A85] hidden sm:block">
            STACK_SPEC_2026
          </div>
        </div>

        {/* Linear Settings Tabs Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category Selector Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] px-1 mb-1">CATEGORIES</div>
            <div className="space-y-1">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-sans transition-colors ${
                      isActive
                        ? 'bg-[#141517] text-[#F7F8F8] font-medium border border-white/[0.06]'
                        : 'text-[#A7ADB8] hover:text-[#F7F8F8] hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F7F8F8]' : 'text-[#747A85]'}`} />
                      <span>{category.title}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#747A85]">{category.skills.length}</span>
                  </button>
                );
              })}
            </div>

            {/* Developer Metadata JSON Inspector Box */}
            <div className="pt-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] px-1 mb-1">METADATA INSPECTOR</div>
              <div className="linear-panel p-3 rounded-lg border border-white/[0.06] bg-[#08090A] font-mono text-[11px] text-[#A7ADB8] overflow-x-auto">
                <pre className="text-slate-300 leading-relaxed">{jsonInspectorContent}</pre>
              </div>
            </div>
          </div>

          {/* Right Active Category Rows Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="text-xs font-mono font-semibold text-[#F7F8F8]">
                {skillCategories[activeTab].title.toUpperCase()} // ACTIVE STACK
              </div>
              <span className="text-[10px] font-mono text-[#747A85]">VERIFIED SPECIFICATIONS</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {skillCategories[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="linear-card p-3.5 rounded-lg space-y-2 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-semibold text-xs text-[#F7F8F8]">{skill.name}</span>
                    <span className="text-[10px] font-mono text-[#26B56B] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {skill.level}
                    </span>
                  </div>

                  <div className="space-y-1 font-sans text-xs">
                    <div className="text-[10px] font-mono text-[#747A85]">FEATURED IN</div>
                    <div className="flex flex-wrap gap-1">
                      {skill.projects.map((proj) => (
                        <span key={proj} className="px-1.5 py-0.5 rounded bg-[#101113] border border-white/[0.04] text-[10px] font-mono text-[#A7ADB8]">
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/[0.04] text-[10px] font-mono text-[#747A85] flex justify-between">
                    <span>Usage Since</span>
                    <span className="text-[#F7F8F8]">{skill.since}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Frameworks Bar */}
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-2">ADDITIONAL FRAMEWORKS & METHODOLOGY</div>
              <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                {[
                  'PostgreSQL', 'Golang', 'FastAPI', 'Sentence-BERT',
                  'Graph-BERT', 'OCR & NLP', 'U-Net Segmentation', 'OpenCV',
                  'JWT Auth', 'RBAC & Audit Logging', 'Docker', 'Git Branching'
                ].map((item) => (
                  <span key={item} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.06] text-[#A7ADB8]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;