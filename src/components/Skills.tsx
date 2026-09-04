import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Database, Layout, ShieldAlert, Cpu, Terminal, Brain, CheckCircle2 } from 'lucide-react';

interface Skill {
  name: string;
  level: string;
  projects: string[];
  details: string;
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
        { name: 'Python', level: 'Proficient', projects: ['EduCareer', 'Wildfire Digital Twin'], details: 'Primary language for AI/ML models, remote sensing, U-Net segmentation, and FastAPI backend development.', since: '2023' },
        { name: 'JavaScript', level: 'Expert', projects: ['ResumeRoast', 'Truck Hai', 'IAD System'], details: 'Experienced in modern ES6+, DOM operations, asynchronous workflows, and full-stack React applications.', since: '2022' },
        { name: 'Golang', level: 'Proficient', projects: ['Backend Systems'], details: 'Concurrent backend server routines, microservices development, and high-performance system execution.', since: '2025' },
        { name: 'TypeScript', level: 'Proficient', projects: ['Truck Hai', 'IAD System', 'ResumeRoast'], details: 'Enforces strict static typing, interfaces, and compile-time validation across production codebases.', since: '2023' },
        { name: 'SQL', level: 'Proficient', projects: ['IAD System', 'Supabase'], details: 'Writing optimized relational database queries, table schema designs, indexing, and joins.', since: '2023' },
        { name: 'C', level: 'Proficient', projects: ['Academic Tasks'], details: 'Academic background in low-level memory management, pointer arithmetic, and algorithmic complexity.', since: '2022' },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 'Core Stack', projects: ['Truck Hai', 'IAD System', 'ResumeRoast'], details: 'Primary frontend library. Fluent in custom hooks, functional lifecycle, state management, and Vite builds.', since: '2023' },
        { name: 'React Native', level: 'Proficient', projects: ['Truck Hai Mobile (Expo)'], details: 'Building production mobile features with React Native and Expo from Figma specs.', since: '2024' },
        { name: 'Tailwind CSS', level: 'Expert', projects: ['Truck Hai', 'Portfolio'], details: 'Designing utility-first fluid layouts, dark themes, glassmorphic UI elements, and custom CSS variables.', since: '2023' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend & DB',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 'Proficient', projects: ['IAD Hospital System'], details: 'Relational database schema design, audit logging, role-based data access control, and persistence.', since: '2024' },
        { name: 'Node.js & Express', level: 'Proficient', projects: ['IAD System', 'ResumeRoast'], details: 'Building production REST APIs, JWT authentication middleware, and assembly/BFF server layers.', since: '2023' },
        { name: 'REST APIs & BFF', level: 'Proficient', projects: ['Truck Hai', 'IAD System'], details: 'Constructing standardized API architectures with correct HTTP status codes, headers, and payload structures.', since: '2023' },
        { name: 'Supabase', level: 'Proficient', projects: ['ResumeRoast'], details: 'Leveraging cloud PostgreSQL, auth routines, row-level security, and serverless database storage.', since: '2024' },
        { name: 'MongoDB', level: 'Familiar', projects: ['Web Apps'], details: 'NoSQL document database used for flexible document storage and quick prototyping.', since: '2023' },
      ]
    },
    {
      id: 'ai_ml_analytics',
      title: 'AI, ML & Analytics',
      icon: Brain,
      skills: [
        { name: 'LLMs', level: 'Proficient', projects: ['ResumeRoast'], details: 'Integrating large language models for automated resume parsing, ATS scoring, and structured feedback.', since: '2025' },
        { name: 'TensorFlow & U-Net', level: 'Proficient', projects: ['Wildfire Digital Twin'], details: 'Constructing deep learning semantic segmentation models for remote sensing imagery and spread modeling.', since: '2024' },
        { name: 'Scikit-Learn', level: 'Proficient', projects: ['EduCareer'], details: 'Training classification models, feature engineering pipelines, and semantic career recommendation vectors.', since: '2024' },
        { name: 'Power BI & Tableau', level: 'Proficient', projects: ['Business Analytics'], details: 'Designing business intelligence dashboards, DAX measures, and data relationship visualization schemas.', since: '2024' },
        { name: 'NumPy & Pandas', level: 'Proficient', projects: ['EduCareer', 'Data Analysis'], details: 'Tabular computation, matrix algebra, data cleaning, and statistical processing.', since: '2023' },
      ]
    },
    {
      id: 'dev_tools',
      title: 'Developer Tools',
      icon: Terminal,
      skills: [
        { name: 'Git & GitHub', level: 'Expert', projects: ['Truck Hai', 'All Repos'], details: 'Feature branching models, PR creation, code reviews, conflict resolution, and release workflows.', since: '2022' },
        { name: 'Postman & Bruno', level: 'Proficient', projects: ['Truck Hai', 'IAD System'], details: 'API endpoint validation, authentication headers verification, environment variables, and payload tests.', since: '2023' },
        { name: 'Docker', level: 'Familiar', projects: ['Container Runtimes'], details: 'Containerizing applications to isolate development environments and streamline deployments.', since: '2024' },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skillCategories[0].skills[0]);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setSelectedSkill(skillCategories[index].skills[0]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden line-grid dot-grid">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary border border-white/5 text-xs font-mono text-muted-foreground mb-4">
            <span>node check_stack.js</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="gradient-text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto font-mono">
            // Click skills to inspect data metadata structures
          </p>
        </div>

        {/* Categories Tab selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleTabChange(index)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border font-mono text-xs tracking-wider uppercase transition-all duration-300 ${activeTab === index
                  ? 'border-accent/30 bg-accent/5 text-accent font-semibold'
                  : 'border-white/5 bg-secondary/70 text-muted-foreground hover:bg-white/5 hover:text-foreground'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Main Grid: Selector List vs JSON Inspector Panel */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">

          {/* Skill Selector List (Spans 7 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="font-mono text-xs text-muted-foreground mb-1 flex items-center gap-1.5 px-1 select-none">
              <Terminal className="w-3.5 h-3.5" />
              <span>SELECT_OBJECTS (Count: {skillCategories[activeTab].skills.length})</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {skillCategories[activeTab].skills.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseMove={handleMouseMove}
                  className={`text-left p-4 rounded-xl border flex flex-col justify-between min-h-[100px] transition-all duration-300 group relative overflow-hidden glow-card ${selectedSkill.name === skill.name
                    ? 'border-accent/40 bg-secondary'
                    : 'border-white/5 bg-secondary/70 hover:bg-secondary hover:border-white/10'
                    }`}
                >
                  <div className="flex justify-between items-start w-full">
                    <span className="font-mono font-bold text-sm tracking-tight text-foreground">
                      {skill.name}
                    </span>
                    {selectedSkill.name === skill.name && (
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    )}
                  </div>

                  <div className="flex justify-between items-center w-full mt-4 font-mono text-[10px]">
                    <span className="text-muted-foreground">LVL: {skill.level}</span>
                    <span className="text-primary/60 group-hover:text-primary transition-colors font-semibold">inspect()</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* JSON Inspector Panel (Spans 6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="font-mono text-xs text-muted-foreground mb-2 flex items-center gap-1.5 px-1 select-none">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>METADATA_INSPECTOR - {selectedSkill.name.toLowerCase()}.json</span>
            </div>

            <div className="dev-window glow-card rounded-xl overflow-hidden flex-1 flex flex-col border-white/5 min-h-[300px]" onMouseMove={handleMouseMove}>
              {/* Editor Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/50 border-b border-white/5 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">JSON - Edit Mode: READ_ONLY</div>
                <div className="w-8" />
              </div>

              {/* Editor Output JSON Code block */}
              <div className="flex-1 p-6 font-mono text-xs sm:text-sm bg-black/25 leading-relaxed overflow-x-auto select-text text-muted-foreground/60">
                <div>
                  <span className="text-muted-foreground/45">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground/75">"technology"</span>: <span className="text-foreground/90">"{selectedSkill.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground/75">"experience_level"</span>: <span className="text-foreground/90">"{selectedSkill.level}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground/75">"learning_since"</span>: <span className="text-primary/90">{selectedSkill.since}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground/75">"featured_projects"</span>: <span className="text-muted-foreground/45">[</span>
                  {selectedSkill.projects.map((proj, idx) => (
                    <span key={proj}>
                      <span className="text-foreground/90">"{proj}"</span>
                      {idx < selectedSkill.projects.length - 1 ? <span className="text-muted-foreground/45">, </span> : ''}
                    </span>
                  ))}
                  <span className="text-muted-foreground/45">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground/75">"implementation_details"</span>: <span className="text-muted-foreground/80">"{selectedSkill.details}"</span>
                </div>
                <div>
                  <span className="text-muted-foreground/45">{`}`}</span>
                </div>
              </div>

              {/* Console logs output */}
              <div className="px-4 py-2 bg-secondary/30 border-t border-white/5 font-mono text-[10px] text-muted-foreground select-none">
                <span>Status: 200 OK | Payload Size: 418 bytes</span>
              </div>
            </div>
          </div>

        </div>

        {/* Familiar Skills tags */}
        <div className="mt-20 text-center">
          <h3 className="font-mono text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
            // Familiar With Other Frameworks & APIs
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
            {[
              'PostgreSQL', 'Golang', 'FastAPI', 'Sentence-BERT',
              'Graph-BERT', 'OCR & NLP', 'U-Net', 'OpenCV',
              'JWT Auth', 'RBAC & Audit Logging', 'Tableau', 'Docker'
            ].map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-lg border border-white/5 bg-secondary/30 font-mono text-xs text-muted-foreground hover:border-accent/30 hover:text-accent transition-all duration-300 hover:scale-105 select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;