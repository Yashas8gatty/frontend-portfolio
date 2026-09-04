import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, ExternalLink, Globe, GitBranch, Code, ShieldAlert, Cpu } from 'lucide-react';

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
      title: 'ResumeRoast',
      description: 'Full-stack AI resume analysis platform using LLMs to process PDF resumes, generate ATS scores, structured critiques, and actionable recommendations with resilient backend processing.',
      codeSnippet: `// roast_analyzer.ts
export const roastResume = async (pdfText: string) => {
  const prompt = \`Analyze resume PDF & compute ATS score: \${pdfText}\`;
  const critique = await llmEngine.analyze(prompt);
  await supabase.from('roasts').insert({ score: critique.atsScore });
  return critique;
};
`,
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'LLMs', 'AI/ML'],
      features: [
        'LLM PDF resume processing & ATS scoring',
        'Structured critiques & recommendations',
        'Resilient backend & Supabase storage',
        'Optimized automated feedback workflows'
      ],
      github: 'https://github.com/Yashas8gatty/ResumeRoast',
      demo: 'https://resumeroast-in.vercel.app/',
      status: 'Completed',
      branch: 'main',
      langStats: 'TypeScript 50% | Node 30% | Supabase 20%'
    },
    {
      title: 'EduCareer',
      description: 'AI career guidance platform offering personalized course, internship, and job recommendations using semantic and hybrid ranking models (Sentence-BERT, Graph-BERT, OCR/NLP, FastAPI).',
      codeSnippet: `// educareer_recommender.py
@app.post("/api/v1/recommend")
async def recommend_pathways(resume_text: str):
    # Sentence-BERT + Graph-BERT hybrid ranking
    vec = sbert_model.encode(resume_text)
    rankings = graph_bert.calculate_similarity(vec)
    return {"pathways": rankings.get_top_matches(k=3)}
`,
      technologies: ['React.js', 'TypeScript', 'FastAPI', 'Python', 'Sentence-BERT', 'Graph-BERT', 'AI/ML'],
      features: [
        '82.8% system accuracy OCR/NLP pipeline',
        '89.2% skill mapping accuracy',
        'Sub-224 ms recommendation latency',
        '96% task completion rate matching'
      ],
      github: 'https://github.com/Uttham-412/educareer',
      demo: '#',
      status: 'Completed',
      branch: 'main',
      langStats: 'Python 55% | React 35% | FastAPI 10%'
    },
    {
      title: 'Digital Twin Wildfire Detection',
      description: 'Digital Twin framework for real-time wildfire detection and spread analysis using remote sensing satellite imagery, U-Net semantic segmentation, TensorFlow, and OpenCV.',
      codeSnippet: `// wildfire_digital_twin.py
def detect_wildfire_spread(remote_sensing_img):
    # Process satellite bands & segment fire perimeter
    tensor = preprocess_imagery(remote_sensing_img)
    segmentation_mask = unet_model.predict(tensor)
    return render_risk_visualization(segmentation_mask)
`,
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'AI/ML', 'Remote Sensing', 'Digital Twin'],
      features: [
        'U-Net semantic segmentation framework',
        'Remote sensing imagery processing',
        'Digital Twin wildfire spread modeling',
        'Risk monitoring visualization layers'
      ],
      github: 'https://github.com/Yashas8gatty',
      demo: '#',
      status: 'In Progress',
      branch: 'main',
      langStats: 'Python 65% | TensorFlow 25% | OpenCV 10%'
    },
    {
      title: 'Campaign AI',
      description: 'A campaign planning and analytics platform designed for small businesses to create, manage, and track AI-assisted marketing campaigns with JWT protection and analytics.',
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

  const categories = ['All', 'React.js', 'Python', 'AI/ML', 'Node.js', 'FastAPI'];
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
