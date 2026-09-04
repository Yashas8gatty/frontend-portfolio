import React, { useState } from 'react';
import { Search, Layers, GitCommit, CheckCircle2, Activity, Code2, Database, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import profileImage from '@/assets/profile-photo.png';
import githubData from '../data/github-data.json';
import { sound } from '../utils/sound';

type ProjectId = 'truckhai' | 'iad' | 'resumeroast' | 'educareer' | 'wildfire';

interface TaskSpec {
  module: string;
  scope: string;
  status: 'IN PROGRESS' | 'COMPLETED' | 'ACTIVE';
}

interface ProjectSpec {
  id: ProjectId;
  name: string;
  role: string;
  organization: string;
  stack: string[];
  status: 'ONGOING ROLE' | 'COMPLETED PRODUCT' | 'RESEARCH SYSTEM';
  tasks: TaskSpec[];
  codeSnippet: {
    filename: string;
    language: string;
    lines: { type: 'add' | 'del' | 'context'; text: string }[];
  };
  metrics: { label: string; value: string }[];
}

export const HeroWorkspace = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectId>('truckhai');
  const [activeView, setActiveView] = useState<'modules' | 'code' | 'commits'>('modules');

  const triggerCommandPalette = () => {
    const event = new CustomEvent('open-command-palette');
    window.dispatchEvent(event);
  };

  const projectSpecs: Record<ProjectId, ProjectSpec> = {
    truckhai: {
      id: 'truckhai',
      name: 'Truck Hai Technologies',
      role: 'Software Developer Intern',
      organization: 'Truck Hai Pvt. Ltd.',
      stack: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST APIs', 'BFF Layer'],
      status: 'ONGOING ROLE',
      tasks: [
        { module: 'React Native & Expo App', scope: 'Developing production web & mobile interfaces from Figma specs', status: 'IN PROGRESS' },
        { module: 'REST API & BFF Layer', scope: 'Assembly layer integration and API payload validation', status: 'COMPLETED' },
        { module: 'Git & PR Workflows', scope: 'Collaborative code reviews and multi-repository branch merges', status: 'IN PROGRESS' },
        { module: 'UI Components', scope: 'Reusable design system components & responsive viewports', status: 'COMPLETED' }
      ],
      codeSnippet: {
        filename: 'truckhai/src/api/dispatch.ts',
        language: 'typescript',
        lines: [
          { type: 'context', text: 'export const fetchActiveDispatches = async (driverId: string) => {' },
          { type: 'add', text: '+  const response = await bffClient.get(`/dispatches/active`, { params: { driverId } });' },
          { type: 'add', text: '+  return validateDispatchPayload(response.data);' },
          { type: 'del', text: '-  return response.data;' },
          { type: 'context', text: '};' }
        ]
      },
      metrics: [
        { label: 'ROLE STATUS', value: 'ACTIVE INTERN' },
        { label: 'TARGET PLATFORMS', value: 'WEB & MOBILE' },
        { label: 'STACK LAYER', value: 'BFF & FRONTEND' }
      ]
    },
    iad: {
      id: 'iad',
      name: 'IAD Hospital System',
      role: 'Full Stack Engineer',
      organization: 'Institute of Applied Dermatology',
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT Auth'],
      status: 'COMPLETED PRODUCT',
      tasks: [
        { module: 'Hospital Costing & Billing', scope: 'Enterprise patient treatment packages & bill generation engine', status: 'COMPLETED' },
        { module: 'JWT Authentication & RBAC', scope: 'Role-based access permissions & security authorization', status: 'COMPLETED' },
        { module: 'PostgreSQL Database', scope: 'Relational data modeling, ACID transactions & audit logs', status: 'COMPLETED' },
        { module: 'Clinical Image Module', scope: 'Patient treatment photo uploads & report attachments', status: 'COMPLETED' }
      ],
      codeSnippet: {
        filename: 'hospital-system/src/controllers/billing.ts',
        language: 'typescript',
        lines: [
          { type: 'context', text: 'export const generatePatientBill = async (patientId: string, items: BillItem[]) => {' },
          { type: 'add', text: '+  const total = items.reduce((sum, item) => sum + item.amount, 0);' },
          { type: 'add', text: '+  const record = await db.query("INSERT INTO billing_records...", [patientId, total]);' },
          { type: 'context', text: '  return record.rows[0];' },
          { type: 'context', text: '};' }
        ]
      },
      metrics: [
        { label: 'SYSTEM TYPE', value: 'ENTERPRISE HOSPITAL' },
        { label: 'SECURITY', value: 'JWT & RBAC LOGGING' },
        { label: 'DATABASE', value: 'POSTGRESQL' }
      ]
    },
    resumeroast: {
      id: 'resumeroast',
      name: 'ResumeRoast',
      role: 'Creator & Developer',
      organization: 'AI Product',
      stack: ['Python', 'FastAPI', 'React.js', 'LLMs', 'OCR', 'Supabase'],
      status: 'COMPLETED PRODUCT',
      tasks: [
        { module: 'PDF OCR & Extraction', scope: 'Multi-page resume text extraction & structure parsing', status: 'COMPLETED' },
        { module: 'ATS Scoring Engine', scope: 'Evaluates resume ATS compliance with 82.8% benchmark accuracy', status: 'COMPLETED' },
        { module: 'LLM Critique Engine', scope: 'Generates structured improvement critiques and actionable advice', status: 'COMPLETED' },
        { module: 'Supabase Storage', scope: 'Resilient file storage vault and database record persistence', status: 'COMPLETED' }
      ],
      codeSnippet: {
        filename: 'ResumeRoast/backend/analyzer.py',
        language: 'python',
        lines: [
          { type: 'context', text: 'async def process_resume_analysis(file_bytes: bytes):' },
          { type: 'add', text: '+    text = await extract_pdf_text(file_bytes)' },
          { type: 'add', text: '+    score, feedback = await evaluate_ats_score(text)' },
          { type: 'del', text: '-    return {"score": 0, "critique": ""}' },
          { type: 'add', text: '+    return {"ats_score": score, "critique": feedback}' }
        ]
      },
      metrics: [
        { label: 'ATS ACCURACY', value: '82.8%' },
        { label: 'OCR LATENCY', value: '<224ms' },
        { label: 'STORAGE', value: 'SUPABASE' }
      ]
    },
    educareer: {
      id: 'educareer',
      name: 'EduCareer',
      role: 'AI Researcher & Lead Developer',
      organization: 'Research Product',
      stack: ['Sentence-BERT', 'Graph-BERT', 'FastAPI', 'Python', 'React.js'],
      status: 'RESEARCH SYSTEM',
      tasks: [
        { module: 'Sentence-BERT Embeddings', scope: 'Semantic skill mapping for course & job recommendations', status: 'COMPLETED' },
        { module: 'Graph-BERT Ranking', scope: 'Graph neural network modeling for student career trajectory', status: 'COMPLETED' },
        { module: 'FastAPI Backend', scope: 'Sub-224ms inference API endpoint serving recommendation vectors', status: 'COMPLETED' }
      ],
      codeSnippet: {
        filename: 'educareer/recommender/engine.py',
        language: 'python',
        lines: [
          { type: 'context', text: 'def calculate_skill_mapping(student_vector, market_matrix):' },
          { type: 'add', text: '+    similarity = cosine_similarity([student_vector], market_matrix)' },
          { type: 'add', text: '+    ranked_indices = np.argsort(similarity[0])[::-1]' },
          { type: 'context', text: '    return ranked_indices[:5]' }
        ]
      },
      metrics: [
        { label: 'SKILL MATCH', value: '89.2% ACCURACY' },
        { label: 'API RESPONSE', value: '<224ms' },
        { label: 'AI MODELS', value: 'S-BERT & G-BERT' }
      ]
    },
    wildfire: {
      id: 'wildfire',
      name: 'Wildfire Digital Twin',
      role: 'Research Engineer',
      organization: 'Geospatial Research',
      stack: ['Python', 'TensorFlow', 'U-Net', 'OpenCV', 'Geospatial Satellite Data'],
      status: 'RESEARCH SYSTEM',
      tasks: [
        { module: 'Remote Sensing Satellite Pipeline', scope: 'Multispectral satellite imagery processing & region clipping', status: 'COMPLETED' },
        { module: 'U-Net Semantic Segmentation', scope: 'Deep learning segmentation for wildfire spread detection (88.4% accuracy)', status: 'COMPLETED' },
        { module: 'Real-Time Simulation', scope: 'Digital Twin framework projecting real-time active fire perimeters', status: 'COMPLETED' }
      ],
      codeSnippet: {
        filename: 'wildfire-twin/models/unet.py',
        language: 'python',
        lines: [
          { type: 'context', text: 'def segment_wildfire(satellite_image_tensor):' },
          { type: 'add', text: '+    mask = unet_model.predict(satellite_image_tensor)' },
          { type: 'add', text: '+    active_contours = cv2.findContours((mask > 0.5).astype(np.uint8)...)' },
          { type: 'context', text: '    return active_contours' }
        ]
      },
      metrics: [
        { label: 'ACCURACY', value: '88.4%' },
        { label: 'ARCHITECTURE', value: 'U-NET SEGMENTATION' },
        { label: 'INPUT DATA', value: 'SATELLITE IMAGERY' }
      ]
    }
  };

  const current = projectSpecs[selectedProject];

  return (
    <div className="linear-panel rounded-lg overflow-hidden border border-white/[0.07] bg-[#0C0D0F] shadow-2xl font-sans text-xs select-none">
      
      {/* 1. TOP APPLICATION WINDOW BAR */}
      <div className="flex items-center justify-between px-4 h-11 bg-[#08090A] border-b border-white/[0.07]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5484D]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F2A93B]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#26B56B]/60" />
          </div>
          
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#101113] border border-white/[0.06] text-[#F7F8F8] font-medium text-xs">
            <div className="w-3.5 h-3.5 rounded bg-[#5E6AD2]/20 border border-[#5E6AD2]/40 flex items-center justify-center font-bold text-[8px] text-[#F7F8F8]">
              YG
            </div>
            <span>Yashas Workspace</span>
          </div>
        </div>

        <button
          onClick={triggerCommandPalette}
          className="px-2.5 py-1 rounded bg-[#101113] hover:bg-[#141517] border border-white/[0.06] text-[11px] font-mono text-[#A7ADB8] flex items-center gap-2 transition-colors"
          title="Search commands (⌘K / Ctrl+K)"
        >
          <Search className="w-3 h-3 text-[#5E6AD2]" />
          <span>Search Repository</span>
          <kbd className="px-1 py-0.5 rounded bg-white/[0.05] text-[10px] font-mono text-[#747A85] border border-white/[0.04]">⌘K</kbd>
        </button>
      </div>

      {/* 2. DESKTOP APPLICATION WORKSPACE GRID */}
      <div className="grid md:grid-cols-12 min-h-[420px]">
        
        {/* LEFT SIDEBAR (3 cols / ~210px) */}
        <div className="md:col-span-3 bg-[#08090A] border-r border-white/[0.07] p-3 space-y-4 font-sans text-xs hidden md:block">
          
          {/* Developer Profile Header */}
          <div className="px-2 py-1.5 flex items-center gap-2 text-[#F7F8F8] font-semibold border-b border-white/[0.04] pb-3">
            <img src={profileImage} alt="Yashas H Gatty" className="w-4 h-4 rounded-full object-cover" />
            <span className="truncate">Yashas H Gatty</span>
          </div>

          {/* Navigation Items */}
          <div className="space-y-0.5 font-sans">
            <div className="px-2 py-1 rounded bg-[#141517] text-[#F7F8F8] font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2]" />
              <span>Workspace Overview</span>
            </div>
            <div className="px-2 py-1 text-[#A7ADB8] hover:text-[#F7F8F8] flex items-center gap-2 cursor-pointer transition-colors">
              <Layers className="w-3.5 h-3.5 text-[#747A85]" />
              <span>Active Projects ({Object.keys(projectSpecs).length})</span>
            </div>
            <div className="px-2 py-1 text-[#A7ADB8] hover:text-[#F7F8F8] flex items-center gap-2 cursor-pointer transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 text-[#747A85]" />
              <span>Published Patent</span>
            </div>
          </div>

          {/* REAL PROJECTS SELECTOR */}
          <div className="pt-2 border-t border-white/[0.04] space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] px-2 mb-1.5">
              SYSTEM REPOSITORIES
            </div>

            {Object.values(projectSpecs).map((p) => {
              const isSelected = selectedProject === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    sound.playTab();
                    setSelectedProject(p.id);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-xs transition-colors font-sans ${
                    isSelected
                      ? 'bg-[#141517] text-[#F7F8F8] font-medium border border-white/[0.06]'
                      : 'text-[#A7ADB8] hover:text-[#F7F8F8] hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    {isSelected ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] shrink-0" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#747A85]/40 shrink-0" />
                    )}
                    <span className="truncate">{p.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* GitHub Data Spec */}
          <div className="pt-3 border-t border-white/[0.04] space-y-1">
            <div className="text-[10px] font-mono text-[#747A85] uppercase px-2">GITHUB SPECIFICATION</div>
            <div className="px-2 py-1 text-[#A7ADB8] text-[11px] font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#26B56B]" />
              <span>{githubData.stats.totalContributions} Contributions (Past Year)</span>
            </div>
          </div>

        </div>

        {/* MAIN WORKSPACE BOARD (9 cols) */}
        <div className="md:col-span-9 p-4 sm:p-5 flex flex-col justify-between bg-[#0C0D0F] space-y-5">
          
          {/* ACTIVE PROJECT BANNER */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.07] pb-3 gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-xs text-[#747A85]">
                  <span className="text-[#F7F8F8] font-semibold">{current.name}</span>
                  <span className="text-[#747A85]">•</span>
                  <span className="text-[#A7ADB8]">{current.role}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#F7F8F8] font-sans">
                  {current.organization}
                </h3>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded flex items-center gap-1.5 ${
                  current.status === 'ONGOING ROLE' 
                    ? 'status-badge-ongoing' 
                    : 'status-badge-completed'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    current.status === 'ONGOING ROLE' ? 'bg-[#5E6AD2]' : 'bg-[#26B56B]'
                  }`} />
                  <span>{current.status}</span>
                </span>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1 font-mono text-[11px]">
              {current.stack.map(tech => (
                <span key={tech} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.04] text-[#A7ADB8]">
                  {tech}
                </span>
              ))}
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-white/[0.04] pb-2 font-mono text-xs">
              <button
                onClick={() => {
                  sound.playTab();
                  setActiveView('modules');
                }}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeView === 'modules'
                    ? 'bg-[#141517] text-[#F7F8F8] border border-white/[0.06]'
                    : 'text-[#A7ADB8] hover:text-[#F7F8F8]'
                }`}
              >
                ENGINEERING MODULES ({current.tasks.length})
              </button>
              <button
                onClick={() => {
                  sound.playTab();
                  setActiveView('code');
                }}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeView === 'code'
                    ? 'bg-[#141517] text-[#F7F8F8] border border-white/[0.06]'
                    : 'text-[#A7ADB8] hover:text-[#F7F8F8]'
                }`}
              >
                CODE VIEW ({current.codeSnippet.filename})
              </button>
              <button
                onClick={() => {
                  sound.playTab();
                  setActiveView('commits');
                }}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeView === 'commits'
                    ? 'bg-[#141517] text-[#F7F8F8] border border-white/[0.06]'
                    : 'text-[#A7ADB8] hover:text-[#F7F8F8]'
                }`}
              >
                LIVE COMMITS
              </button>
            </div>

            {/* VIEW 1: ENGINEERING MODULES & SCOPE */}
            {activeView === 'modules' && (
              <div className="space-y-1.5 font-sans text-xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-1">
                  ENGINEERING MODULES & WORK SCOPE
                </div>
                {current.tasks.map((task, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded bg-[#101113] border border-white/[0.04] gap-2"
                  >
                    <div className="space-y-0.5">
                      <div className="font-sans font-semibold text-[#F7F8F8]">{task.module}</div>
                      <div className="text-[11px] text-[#A7ADB8]">{task.scope}</div>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded self-start sm:self-center shrink-0 ${
                      task.status === 'IN PROGRESS' ? 'status-badge-ongoing' : 'status-badge-completed'
                    }`}>
                      {task.status === 'IN PROGRESS' ? '● IN PROGRESS' : '✓ COMPLETED'}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* VIEW 2: REAL CODE SNIPPET PREVIEW */}
            {activeView === 'code' && (
              <div className="space-y-1.5 font-sans text-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#747A85] mb-1">
                  <span>ACTUAL PRODUCTION CODE SNIPPET</span>
                  <span>{current.codeSnippet.language}</span>
                </div>
                
                <div className="linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] p-3 font-mono text-[11px] text-[#A7ADB8] space-y-1 overflow-x-auto">
                  <div className="text-[10px] text-[#747A85] border-b border-white/[0.04] pb-1.5 mb-2 flex justify-between">
                    <span>{current.codeSnippet.filename}</span>
                    <span>source</span>
                  </div>
                  {current.codeSnippet.lines.map((line, idx) => (
                    <div 
                      key={idx} 
                      className={`px-1.5 py-0.5 rounded ${
                        line.type === 'add' 
                          ? 'bg-[#26B56B]/10 text-[#26B56B]' 
                          : line.type === 'del' 
                          ? 'bg-[#E5484D]/10 text-[#E5484D]' 
                          : 'text-[#A7ADB8]'
                      }`}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 3: LIVE RECENT COMMITS */}
            {activeView === 'commits' && (
              <div className="space-y-1.5 font-sans text-xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-1">
                  REAL RECENT GITHUB COMMITS
                </div>
                {githubData.commits.slice(0, 4).map((commit, idx) => (
                  <div key={idx} className="p-2 rounded bg-[#101113] border border-white/[0.04] flex items-center justify-between font-mono text-[11px] gap-2">
                    <div className="flex items-center gap-2 truncate">
                      <GitCommit className="w-3.5 h-3.5 text-[#26B56B] shrink-0" />
                      <span className="text-[#747A85] font-bold text-[10px]">{commit.sha}</span>
                      <span className="text-[#F7F8F8] font-sans truncate">{commit.message}</span>
                    </div>
                    <div className="shrink-0 text-right text-[10px] text-[#747A85]">
                      <span>{commit.repo}</span> • <span>{commit.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* METRICS & SPECIFICATIONS SUMMARY */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-[#747A85] uppercase mb-1.5">
                ENGINEERING SPECIFICATIONS
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono text-center text-xs">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-2 rounded bg-[#101113] border border-white/[0.04]">
                    <div className="text-[10px] text-[#747A85]">{m.label}</div>
                    <div className="text-xs font-bold text-[#F7F8F8] mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* REAL GITHUB ACTIVITY FOOTER */}
          <div className="pt-3 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#A7ADB8] font-sans gap-2">
            <div className="flex items-center gap-2 truncate">
              <img src={profileImage} alt="Yashas" className="w-4 h-4 rounded-full object-cover shrink-0" />
              <span className="text-[#F7F8F8] font-medium shrink-0">Yashas H Gatty</span>
              <span className="text-[#747A85] shrink-0">•</span>
              <span className="text-[#747A85] truncate font-mono text-[11px] flex items-center gap-1.5">
                <GitCommit className="w-3 h-3 text-[#26B56B] shrink-0" />
                <span className="text-[#F7F8F8]">{githubData.commits[0]?.repo}</span>
                <span>: {githubData.commits[0]?.message}</span>
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#747A85] shrink-0">{githubData.commits[0]?.date}</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroWorkspace;
