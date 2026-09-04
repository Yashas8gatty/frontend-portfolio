import { Calendar, MapPin, Layers, ShieldCheck, Activity, Users, CheckCircle2, GitCommit } from 'lucide-react';
import githubData from '../data/github-data.json';

interface WorkExperience {
  cycleId: string;
  title: string;
  company: string;
  location: string;
  date: string;
  status: 'ONGOING' | 'COMPLETED';
  description: string[];
  skills: string[];
  mockupType: 'truckhai' | 'iad';
}

const Experience = () => {
  const experiences: WorkExperience[] = [
    {
      cycleId: 'CYCLE-01',
      title: 'Software Developer Intern',
      company: 'Truck Hai Technologies Pvt. Ltd.',
      location: 'Remote',
      date: 'Feb 2026 → Present',
      status: 'ONGOING',
      description: [
        'Developed production-ready web and mobile features using React, React Native (Expo), TypeScript, Tailwind CSS, and Vite from Figma designs.',
        'Integrated REST APIs and contributed to the BFF/Assembly layer, debugging authentication, API, mobile, and backend issues.',
        'Managed Git/GitHub workflows, feature branches, pull requests, and code reviews while collaborating with frontend and backend engineering teams.'
      ],
      skills: ['React.js', 'React Native (Expo)', 'TypeScript', 'Tailwind CSS', 'Vite', 'BFF Assembly Layer', 'REST APIs', 'Git Workflows'],
      mockupType: 'truckhai'
    },
    {
      cycleId: 'CYCLE-02',
      title: 'Software Developer Intern',
      company: 'Institute of Applied Dermatology (IAD)',
      location: 'Kasaragod, Kerala',
      date: 'Aug 2026 → Sept 2026',
      status: 'COMPLETED',
      description: [
        'Developed a Hospital Costing and Billing Management System using React, TypeScript, Node.js, Express, and PostgreSQL for patient management, treatment costing, billing, and reporting.',
        'Built RESTful APIs with JWT-based authentication and role-based access control, integrating frontend workflows with PostgreSQL for secure data persistence, validation, and audit logging.',
        'Designed the system for multi-branch deployment at IAD healthcare branches across India.'
      ],
      skills: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT Auth', 'RBAC', 'Audit Logging'],
      mockupType: 'iad'
    }
  ];

  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Section Header (Flat White #F7F8F8) */}
        <div className="border-b border-white/[0.06] pb-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-0.5">ENGINEERING // EXPERIENCES</div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F7F8F8] font-sans">
              Work Experience & Systems Built
            </h2>
          </div>
          <div className="text-xs font-mono text-[#747A85] hidden sm:block">
            CYCLES_INDEXED: 02
          </div>
        </div>

        {/* Editorial Cycles Stream */}
        <div className="space-y-14">
          {experiences.map((exp) => (
            <div key={exp.cycleId} className="space-y-6">
              
              {/* Cycle Editorial Header Bar */}
              <div className="border-b border-white/[0.06] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#747A85]">
                    {exp.cycleId}
                  </span>
                  <span className="text-[#747A85]">•</span>
                  <h3 className="font-sans font-semibold text-base sm:text-lg text-[#F7F8F8]">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-[#A7ADB8] font-medium hidden md:inline">({exp.title})</span>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-center text-xs font-mono text-[#747A85]">
                  <span>{exp.date}</span>
                  <span>{exp.location}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    exp.status === 'ONGOING' ? 'status-badge-ongoing' : 'status-badge-completed'
                  }`}>
                    {exp.status === 'ONGOING' ? '● ONGOING' : '✓ COMPLETED'}
                  </span>
                </div>
              </div>

              {/* Text Description Subtext */}
              <div className="space-y-3 font-sans text-xs text-[#A7ADB8]">
                <ul className="space-y-1.5 leading-relaxed max-w-4xl">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#747A85] mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-1">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded bg-[#101113] border border-white/[0.06] text-[#F7F8F8]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* DOMINANT SOFTWARE PRODUCT VISUALIZATION */}
              <div className="pt-2">
                {exp.mockupType === 'truckhai' ? (
                  /* Truck Hai Rich Logistics Application UI Mockup */
                  <div className="linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] overflow-hidden font-sans text-xs">
                    
                    {/* Top App Console Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#101113] border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#E5484D]/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#F2A93B]/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#26B56B]/60" />
                        </div>
                        <span className="font-mono text-xs font-medium text-[#F7F8F8]">Truck Hai Logistics System</span>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-[11px]">
                        <span className="text-[#26B56B] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#26B56B]" /> API Operational</span>
                        <span className="text-[#A7ADB8] hidden sm:inline">PostgreSQL Connected</span>
                      </div>
                    </div>

                    {/* App Internal Dashboard Grid */}
                    <div className="grid md:grid-cols-12 min-h-[260px]">
                      
                      {/* Left Sidebar */}
                      <div className="md:col-span-3 bg-[#0C0D0F] border-r border-white/[0.06] p-3 space-y-3 font-sans text-[11px] hidden md:block select-none">
                        <div className="text-[10px] font-mono text-[#747A85] uppercase">NAVIGATION</div>
                        <div className="space-y-1">
                          <div className="px-2 py-1 rounded bg-[#181A1D] text-[#F7F8F8] font-medium">Active Rides</div>
                          <div className="px-2 py-1 text-[#747A85] hover:text-[#A7ADB8]">Fleet Status</div>
                          <div className="px-2 py-1 text-[#747A85] hover:text-[#A7ADB8]">Driver Audits</div>
                          <div className="px-2 py-1 text-[#747A85] hover:text-[#A7ADB8]">BFF Logs</div>
                        </div>
                      </div>

                      {/* Main Console Content */}
                      <div className="md:col-span-9 p-4 space-y-3 bg-[#08090A]">
                        <div className="flex items-center justify-between font-mono text-[10px] text-[#747A85] uppercase border-b border-white/[0.04] pb-1.5">
                          <span>ACTIVE SHIPMENTS & RIDES</span>
                          <span>REAL-TIME DISPATCH</span>
                        </div>

                        {/* Shipment Records Table */}
                        <div className="space-y-1.5 font-sans">
                          {[
                            { id: 'TRK-204', route: 'Mangalore → Bangalore', status: 'IN TRANSIT', driver: 'Vehicle #KA-19-E-4012', speed: '64 km/h' },
                            { id: 'TRK-205', route: 'Udupi → Mysore', status: 'DELIVERED', driver: 'Vehicle #KA-20-M-9102', speed: '0 km/h' },
                            { id: 'TRK-206', route: 'Kasaragod → Mangalore', status: 'IN TRANSIT', driver: 'Vehicle #KL-14-A-3381', speed: '58 km/h' },
                          ].map((shipment) => (
                            <div key={shipment.id} className="flex items-center justify-between p-2.5 rounded bg-[#101113] border border-white/[0.04] text-xs">
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[11px] text-[#747A85] font-semibold">{shipment.id}</span>
                                <div>
                                  <div className="text-[#F7F8F8] font-medium">{shipment.route}</div>
                                  <div className="text-[10px] font-mono text-[#747A85]">{shipment.driver}</div>
                                </div>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className="text-[10px] font-mono text-[#747A85] hidden sm:inline">{shipment.speed}</span>
                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                  shipment.status === 'IN TRANSIT' ? 'status-badge-ongoing' : 'status-badge-completed'
                                }`}>
                                  {shipment.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Activity Stream */}
                        <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#747A85] gap-2 truncate">
                          <span className="truncate flex items-center gap-1.5">
                            <GitCommit className="w-3 h-3 text-[#26B56B] shrink-0" />
                            <span><strong className="text-[#A7ADB8] font-normal">{githubData.commits[1]?.repo}</strong>: {githubData.commits[1]?.message}</span>
                          </span>
                          <span className="shrink-0">{githubData.commits[1]?.date}</span>
                        </div>
                      </div>

                    </div>

                  </div>
                ) : (
                  /* IAD Hospital Billing Application UI Mockup */
                  <div className="linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] overflow-hidden font-sans text-xs">
                    
                    {/* Top App Console Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#101113] border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#E5484D]/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#F2A93B]/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#26B56B]/60" />
                        </div>
                        <span className="font-mono text-xs font-medium text-[#F7F8F8]">IAD Hospital Costing & Billing System</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#A7ADB8] border border-white/[0.04]">BRANCH: Kasaragod Main</span>
                      </div>
                    </div>

                    {/* App Internal Dashboard Grid */}
                    <div className="grid md:grid-cols-12 min-h-[260px]">
                      
                      {/* Left Sidebar */}
                      <div className="md:col-span-3 bg-[#0C0D0F] border-r border-white/[0.06] p-3 space-y-3 font-sans text-[11px] hidden md:block select-none">
                        <div className="text-[10px] font-mono text-[#747A85] uppercase">PATIENT RECORDS</div>
                        <div className="space-y-1">
                          <div className="px-2 py-1 rounded bg-[#181A1D] text-[#F7F8F8] font-medium">Billing Dispatches</div>
                          <div className="px-2 py-1 text-[#747A85] hover:text-[#A7ADB8]">Treatment Costing</div>
                          <div className="px-2 py-1 text-[#747A85] hover:text-[#A7ADB8]">PostgreSQL Audit Log</div>
                          <div className="px-2 py-1 text-[#747A85] hover:text-[#A7ADB8]">RBAC Roles</div>
                        </div>
                      </div>

                      {/* Main Console Content */}
                      <div className="md:col-span-9 p-4 space-y-3 bg-[#08090A]">
                        <div className="flex items-center justify-between font-mono text-[10px] text-[#747A85] uppercase border-b border-white/[0.04] pb-1.5">
                          <span>RECENT TREATMENT BILLING DISPATCHES</span>
                          <span>POSTGRESQL PERSISTENCE</span>
                        </div>

                        {/* Patients Billing Records Table */}
                        <div className="space-y-1.5 font-sans">
                          {[
                            { inv: 'INV-8821', record: 'Clinical Therapy Package #401', amount: '₹14,500', status: 'AUDITED & PAID', date: 'Aug 31' },
                            { inv: 'INV-8822', record: 'Dermatology Consultation & Meds', amount: '₹8,200', status: 'AUDITED & PAID', date: 'Aug 30' },
                            { inv: 'INV-8823', record: 'Inpatient Costing Statement', amount: '₹22,000', status: 'PROCESSING', date: 'Aug 30' },
                          ].map((bill) => (
                            <div key={bill.inv} className="flex items-center justify-between p-2.5 rounded bg-[#101113] border border-white/[0.04] text-xs">
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[11px] text-[#26B56B] font-semibold">{bill.inv}</span>
                                <div>
                                  <div className="text-[#F7F8F8] font-medium">{bill.record}</div>
                                  <div className="text-[10px] font-mono text-[#747A85]">Timestamp: {bill.date}</div>
                                </div>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className="font-mono text-xs text-[#F7F8F8]">{bill.amount}</span>
                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                  bill.status === 'AUDITED & PAID' ? 'status-badge-completed' : 'status-badge-ongoing'
                                }`}>
                                  {bill.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Audit Stream */}
                        <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#747A85]">
                          <span>Audit: JWT Auth verified role ADMIN_BRANCH_01</span>
                          <span>RBAC Active</span>
                        </div>
                      </div>

                    </div>

                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
