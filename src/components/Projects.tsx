import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, ExternalLink, Globe, GitBranch, Code, ShieldAlert, Sparkles, Cpu } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  codeSnippet: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
  status: string;
  branch: string;
  langStats: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'EduCareer',
      description: 'An intelligent career counseling and guidance ecosystem. Utilizes Sentence-BERT, Graph-BERT, and OCR to process resumes, map academic records, and recommend matching career pathways through a FastAPI backend.',
      codeSnippet: `// educareer_recommender.py
@app.post("/api/v1/recommend")
async def recommend_pathways(resume_text: str):
    # Vectorize resume and query career graph
    resume_vector = sentence_bert_model.encode(resume_text)
    scores = graph_bert.calculate_similarity(resume_vector)
    return {"pathways": scores.get_top_matches(k=3)}
`,
      technologies: ['React.js', 'FastAPI', 'Python', 'Sentence-BERT', 'Graph-BERT', 'OCR'],
      features: [
        'OCR resume document parsing',
        'Sentence-BERT semantic encoding',
        'Graph-BERT relationship scoring',
        'Interactive path suggestions'
      ],
      github: 'https://github.com/Uttham-412/educareer',
      demo: '#',
      status: 'Completed',
      branch: 'main',
      langStats: 'Python 55% | React 35% | FastAPI 10%'
    },
    {
      title: 'ResumeRoast',
      description: 'Interactive resume analysis and ATS evaluation platform. Parses PDF uploads, extracts metadata, compares content against job descriptions using LLMs, and stores user reports in Supabase.',
      codeSnippet: `// roast_analyzer.ts
export const roastResume = async (pdfText: string) => {
  const prompt = \`Critique this resume and calculate ATS scores: \${pdfText}\`;
  const response = await llmClient.generate(prompt);
  const data = JSON.parse(response.text);
  await supabase.from('roasts').insert({ score: data.score });
  return data;
};
`,
      technologies: ['React.js', 'Node.js', 'Express.js', 'Supabase', 'LLMs', 'PDF Parse'],
      features: [
        'LLM automated feedback API',
        'Supabase row-level database',
        'PDF text buffer extraction',
        'ATS match calculations'
      ],
      github: 'https://github.com/Yashas8gatty/ResumeRoast',
      demo: 'https://resumeroast-in.vercel.app/',
      status: 'Completed',
      branch: 'main',
      langStats: 'TypeScript 50% | Node 30% | Supabase 20%'
    },
    {
      title: 'Campaign AI',
      description: 'A campaign planning and analytics platform designed for small businesses to create, manage, and track AI-assisted marketing campaigns.',
      codeSnippet: `// campaign_service.ts
export const createCampaign = async (campaignData) => {
  const response = await axios.post('/api/campaigns', campaignData, {
    headers: { Authorization: \`Bearer \${token}\` }
  });
  return response.data;
};`,
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Axios', 'JWT'],
      features: [
        'JWT authentication & route protection',
        'QR-based engagement & tracking metrics',
        'Scans, redemptions & analytics insights'
      ],
      github: 'https://github.com/Yashas8gatty/market_campaignAI',
      demo: '#',
      status: 'Completed',
      branch: 'main',
      langStats: 'React 60% | Tailwind 30% | Axios 10%'
    }
  ];

  const categories = ['All', 'React.js', 'Python', 'Node.js', 'FastAPI'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.technologies.includes(activeCategory));

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden line-grid dot-grid">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary border border-white/5 text-xs font-mono text-muted-foreground mb-4">
            <span>git show branch:main</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto font-mono">
            // Inspecting software builds and system integrations
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-lg mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-300 ${activeCategory === cat
                ? 'bg-accent text-accent-foreground font-semibold shadow-[0_2px_6px_rgba(0,199,217,0.15)]'
                : 'bg-secondary/40 border border-white/5 text-muted-foreground hover:bg-white/5 hover:text-foreground'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              onMouseMove={handleMouseMove}
              className="dev-window border-0 p-0 overflow-hidden flex flex-col justify-between group h-full hover:border-accent/30 transition-all duration-500 rounded-xl glow-card"
            >
              {/* Mock Browser Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/50 border-b border-white/5 select-none font-mono text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="text-muted-foreground truncate max-w-[150px] flex items-center gap-1">
                  <GitBranch className="w-3 h-3 text-primary" />
                  <span>{project.branch}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{project.status.toUpperCase()}</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 font-mono">
                    {project.title}
                  </h3>

                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Simulated Code Panel (Highlights on Hover) */}
                <div className="relative h-[110px] rounded-lg overflow-hidden border border-white/5 bg-black/40 font-mono text-[9px] sm:text-[10px] text-muted-foreground p-3 select-none flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[8px] text-muted-foreground/45 border-b border-white/5 pb-1 mb-1">
                    <span>SOURCE_PREVIEW</span>
                    <Code className="w-3 h-3 text-muted-foreground/60" />
                  </div>
                  <pre className="flex-1 overflow-y-auto leading-relaxed text-slate-400 whitespace-pre">
                    {project.codeSnippet}
                  </pre>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-primary">// target_features</h4>
                  <ul className="grid grid-cols-1 gap-1.5 font-mono text-[10px] text-muted-foreground">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <span className="text-primary">•</span>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lang Stats */}
                <div className="font-mono text-[10px] border-t border-white/5 pt-4 text-muted-foreground flex justify-between items-center">
                  <span>COMPONENTS:</span>
                  <span className="text-primary">{project.langStats}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-3 border-t border-white/5 bg-secondary/10">
                <Button
                  variant="ghost"
                  onClick={() => window.open(project.github, '_blank')}
                  className="flex-1 font-mono text-[10px] sm:text-xs border border-white/5 hover:bg-white/5 hover:text-accent rounded-lg py-2 px-1 flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  source_code
                </Button>
                {project.demo !== '#' && (
                  <Button
                    onClick={() => window.open(project.demo, '_blank')}
                    className="flex-1 gradient-accent text-accent-foreground font-mono text-[10px] sm:text-xs rounded-lg py-2 px-1 flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    live
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects on Github */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            onClick={() => window.open('https://github.com/Yashas8gatty?tab=repositories', '_blank')}
            className="font-mono text-xs border-accent/20 hover:border-accent hover:bg-accent/5"
          >
            <Github className="w-4 h-4 mr-2" />
            explore_all_repositories()
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
