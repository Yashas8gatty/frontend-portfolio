import { Briefcase, Calendar, CheckCircle2, ShieldCheck, Terminal, Compass } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface WorkExperience {
  title: string;
  company: string;
  location?: string;
  date: string;
  status: 'ACTIVE' | 'COMPLETED';
  description: string;
  bullets?: string[];
  skills: string[];
  id: string;
}

const Experience = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const experiences: WorkExperience[] = [
    {
      id: 'exp_truckhai',
      title: 'Software Developer Intern',
      company: 'Truck Hai Technologies Pvt. Ltd.',
      location: 'Remote',
      date: 'Feb 2026 – Present',
      status: 'ACTIVE',
      description: 'Developing production-ready web and mobile features using React, React Native (Expo), TypeScript, Tailwind CSS, and Vite from Figma designs, contributing to BFF/Assembly layers and managing collaborative Git workflows.',
      bullets: [
        'Developed production-ready web and mobile features using React, React Native (Expo), TypeScript, Tailwind CSS, and Vite from Figma designs.',
        'Integrated REST APIs and contributed to the BFF/Assembly layer, debugging authentication, API, mobile, and backend issues.',
        'Managed Git/GitHub workflows, feature branches, pull requests, and code reviews while collaborating with frontend and backend teams.'
      ],
      skills: ['React.js', 'React Native (Expo)', 'TypeScript', 'Tailwind CSS', 'Vite', 'BFF / Assembly Layer', 'REST APIs', 'Git Workflows']
    },
    {
      id: 'exp_iad',
      title: 'Software Developer Intern',
      company: 'Institute of Applied Dermatology (IAD)',
      location: 'Kasaragod, Kerala',
      date: 'Aug 2026 – Sept 2026',
      status: 'COMPLETED',
      description: 'Engineered a Hospital Costing and Billing Management System using React, TypeScript, Node.js, Express, and PostgreSQL for patient management, treatment costing, billing, and reporting.',
      bullets: [
        'Developed a Hospital Costing and Billing Management System using React, TypeScript, Node.js, Express, and PostgreSQL for patient management, treatment costing, billing, and reports.',
        'Built RESTful APIs with JWT-based authentication and role-based access control, integrating frontend workflows with PostgreSQL for secure data persistence, validation, and audit logging.',
        'Designed the system for deployment at IAD branches across India.'
      ],
      skills: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT Auth', 'RBAC', 'Audit Logging']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden line-grid dot-grid">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary border border-white/5 text-xs font-mono text-muted-foreground mb-4">
            <span>cat experience.json</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Work <span className="gradient-text-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto font-mono">
            // Tracking professional roles and industry work history
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline dot locator */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </span>

              {/* Dev Window Experience Card */}
              <Card onMouseMove={handleMouseMove} className="dev-window glow-card border-white/5 p-6 sm:p-8 rounded-xl transition-all duration-300 hover:border-accent/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4 select-none">
                  <div>
                    <span className="font-mono text-[10px] text-primary">// {exp.id.toUpperCase()}</span>
                    <h3 className="text-lg font-bold text-foreground font-mono mt-1 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-xs border shrink-0 self-start sm:self-center ${
                    exp.status === 'ACTIVE' 
                      ? 'bg-primary/10 text-primary border-primary/20' 
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${exp.status === 'ACTIVE' ? 'bg-accent animate-pulse' : 'bg-emerald-400'}`} />
                    <span>{exp.status === 'ACTIVE' ? 'ONGOING' : 'COMPLETED'}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-muted-foreground mb-4">
                  <span className="flex items-center gap-1 text-foreground font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.date}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1 text-accent/80">
                      <Compass className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  )}
                </div>

                {exp.bullets && exp.bullets.length > 0 ? (
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-sans">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-mono mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-sans">
                    {exp.description}
                  </p>
                )}

                {/* Skills tags */}
                <div className="space-y-3">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-primary">// technologies_applied</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md border border-white/5 bg-secondary/30 font-mono text-[10px] text-slate-300 hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Continuous Learning styled as CLI console output */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div onMouseMove={handleMouseMove} className="dev-window glow-card rounded-xl overflow-hidden border-white/5">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/50 border-b border-white/5 select-none font-mono text-[10px]">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <span className="text-muted-foreground">sys_process - continuous_learning_log</span>
              <Terminal className="w-3 h-3 text-primary" />
            </div>

            {/* Content */}
            <div className="p-6 font-mono text-xs leading-relaxed space-y-4 text-muted-foreground bg-black/35 select-text">
              <div className="flex items-center gap-2 text-primary">
                <span>&gt;</span>
                <span>systemctl status self_learning.service</span>
              </div>
              
              <div className="pl-4 border-l border-white/5 space-y-2">
                <div>● self_learning.service - Active Professional Development Engine</div>
                <div className="text-emerald-400">   Active: active (running) since Fri 2021-09-01; 4y+ ago</div>
                <div>   Main PID: 2026 (yashas-dev)</div>
                <div>   Tasks: 4 (limit: 512)</div>
                <div>   Memory: Continuous Stack Expansion</div>
              </div>

              <div className="pt-2">
                <div>Active Threads running:</div>
                <div className="grid sm:grid-cols-2 gap-2 mt-2">
                  {[
                    'Machine Learning Models & Training Pipelines',
                    'Interactive Full-stack React Systems',
                    'Database Schemas & Supabase Integrations',
                    'Data Analysis & Visualizations'
                  ].map((thread, idx) => (
                    <div key={idx} className="flex items-center gap-2 pl-4 text-foreground/80">
                      <span className="text-primary">&#9656;</span>
                      <span>{thread}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
