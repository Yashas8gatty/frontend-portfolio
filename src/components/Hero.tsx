import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Terminal, ChevronRight, Play, RefreshCw, Cpu, Database, Eye } from 'lucide-react';
import profileImage from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [inputVal, setInputVal] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<{ type: 'input' | 'system' | 'output'; text: string }[]>([]);
  const terminalLogsContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandKeys = ['about', 'skills', 'projects', 'neofetch', 'contact', 'clear', 'github', 'help'];
  const suggestion = inputVal ? commandKeys.find(c => c.startsWith(inputVal.trim().toLowerCase()) && c !== inputVal.trim().toLowerCase()) || '' : '';

  // Auto scroll to bottom of terminal container only (prevents browser window scroll jumps)
  useEffect(() => {
    const container = terminalLogsContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [terminalLogs]);

  // Terminal boot simulation
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const intervalTime = isMobile ? 180 : 350;

    const bootLines = [
      { type: 'system' as const, text: 'YHG Terminal Shell [Version 1.0.4]' },
      { type: 'system' as const, text: 'Initializing core modules... Done.' },
      { type: 'system' as const, text: 'Fetching resume dependencies... Ok.' },
      { type: 'system' as const, text: 'Type "help" or click the badges below to run commands.' }
    ];

    const timers: NodeJS.Timeout[] = [];
    bootLines.forEach((line, index) => {
      const t = setTimeout(() => {
        setTerminalLogs(prev => [...prev, line]);
      }, index * intervalTime);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, []);


  const handleCommand = (command: string) => {
    const trimmedCmd = command.trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: 'input' as const, text: `yashas@dev:~$ ${command}` }];

    if (trimmedCmd === 'help') {
      newLogs.push({
        type: 'output',
        text: `Available commands:
  about      - Display background details
  skills     - List technical core stack
  projects   - Show key projects built
  contact    - Print contact endpoints
  neofetch   - Display system environment & stats
  clear      - Clear terminal logs`
      });
    } else if (trimmedCmd === 'about') {
      newLogs.push({
        type: 'output',
        text: `Yashas H Gatty | B.E. in Artificial Intelligence & Machine Learning (Canara Engineering College)
Currently a Front-End Intern at Truck Hai Technologies Pvt. Ltd., building production-facing React systems.`
      });
    } else if (trimmedCmd === 'skills') {
      newLogs.push({
        type: 'output',
        text: `CORE TECH STACK:
  • Languages: Python, JavaScript, TypeScript, SQL, C
  • Frontend: React.js, React Native, Tailwind CSS, JavaScript ES6
  • Backend & DB: Node.js, Express.js, REST APIs, MongoDB, Supabase
  • AI/ML & Tools: Scikit-Learn, TensorFlow, NumPy, Pandas, Git, Docker, Postman`
      });
    } else if (trimmedCmd === 'projects') {
      newLogs.push({
        type: 'output',
        text: `PROJECT DIRECTORY:
  1. EduCareer: AI career platform using Sentence-BERT, Graph-BERT, FastAPI, React, OCR.
  2. ResumeRoast: Interactive resume analysis platform using LLMs, Node.js, Express, Supabase, React.
  3. Campaign AI: Marketing campaign management platform using React, Vite, Tailwind, JWT.
Type 'github' to view code repositories.`
      });
    } else if (trimmedCmd === 'contact') {
      newLogs.push({
        type: 'output',
        text: `CONTACT CHANNELS:
  • Email: yashasgatty0@gmail.com
  • Phone: +91 6361334462
  • Location: Mangaluru, Karnataka, India`
      });
    } else if (trimmedCmd === 'neofetch') {
      newLogs.push({
        type: 'output',
        text: `yashas@portfolio-v2
-------------------
OS: Canara Engineering College (B.E. AI & ML)
Host: Yashas H Gatty (Front-End Intern @ Truck Hai)
Kernel: React 18 / Vite / TS
Uptime: 4th Year Student
Shell: React-Terminal-Shell
IDE: Visual Studio Code
Frame Rate: 60fps (Hardware Accel)
Primary Engine: React, TS, Tailwind CSS, Python
Memory: Active and learning new systems`
      });
    } else if (trimmedCmd === 'github') {
      newLogs.push({
        type: 'output',
        text: 'Redirecting to GitHub profile (https://github.com/Yashas8gatty)...'
      });
      setTimeout(() => {
        window.open('https://github.com/Yashas8gatty', '_blank');
      }, 800);
    } else if (trimmedCmd === 'clear') {
      setTerminalLogs([]);
      setInputVal('');
      return;
    } else if (trimmedCmd === '') {
      // Do nothing
    } else {
      newLogs.push({
        type: 'output',
        text: `Command not found: "${command}". Type "help" for a list of valid commands.`
      });
    }

    setTerminalLogs(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestion) {
        setInputVal(suggestion);
      }
    } else if (e.key === 'ArrowRight') {
      if (suggestion && inputRef.current?.selectionStart === inputVal.length) {
        setInputVal(suggestion);
      }
    }
  };

  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
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
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

            {/* Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent font-mono text-xs tracking-wider uppercase animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Open to Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] animate-fade-in">
              Hi, I'm <span className="gradient-text-accent font-extrabold">Yashas</span>
              <br />
              Crafting Digital Interfaces
            </h1>

            {/* Paragraph Bio */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in font-sans">
              B.E. student in Artificial Intelligence & Machine Learning at Canara Engineering College and Front-End Intern at Truck Hai Technologies, focused on full-stack React systems and AI products.
            </p>

            {/* CTAs & Socials */}
            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start w-full animate-fade-in">
              <Button
                onClick={() => scrollToSection('projects')}
                className="gradient-accent text-accent-foreground font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(0,220,255,0.15)]"
                size="lg"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                Explore Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-white/10 hover:bg-white/5 hover:border-white/20 font-medium"
                size="lg"
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3 justify-center lg:justify-start pt-2 w-full animate-fade-in">
              <a
                href="https://github.com/Yashas8gatty"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/5 bg-secondary/20 hover:bg-white/5 hover:border-white/20 hover:text-accent rounded-xl hover:scale-110 transition-all duration-300"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yashasgatty"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/5 bg-secondary/20 hover:bg-white/5 hover:border-white/20 hover:text-accent rounded-xl hover:scale-110 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:yashasgatty0@gmail.com"
                className="p-3 border border-white/5 bg-secondary/20 hover:bg-white/5 hover:border-white/20 hover:text-accent rounded-xl hover:scale-110 transition-all duration-300"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Interactive Console / Photo Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full animate-fade-in-delayed">

            {/* Developer Terminal Widget */}
            <div
              onClick={focusTerminal}
              className="dev-window rounded-xl overflow-hidden cursor-text min-h-[340px] flex flex-col font-mono text-sm border-white/10"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-white/5 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
                  <Terminal className="w-3 h-3 text-accent" />
                  <span>bash - yashas@dev:~</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* Terminal Logs Panel */}
              <div ref={terminalLogsContainerRef} className="flex-1 p-5 overflow-y-auto space-y-2.5 max-h-[260px] text-xs md:text-sm">
                {terminalLogs.map((log, index) => (
                  <div
                    key={index}
                    className={`whitespace-pre-wrap leading-relaxed ${log.type === 'input'
                        ? 'text-foreground font-semibold'
                        : log.type === 'system'
                          ? 'text-accent/80'
                          : 'text-muted-foreground'
                      }`}
                  >
                    {log.text}
                  </div>
                ))}
              </div>

              {/* Terminal Input Line */}
              <div className="flex items-center gap-2 px-5 py-3 border-t border-white/5 bg-secondary/20 relative">
                <span className="text-accent font-bold">yashas@dev:~$</span>
                <div className="flex-1 relative flex items-center font-mono">
                  {suggestion && (
                    <span className="absolute left-0 text-muted-foreground/25 text-sm select-none pointer-events-none">
                      {inputVal}
                      <span className="text-muted-foreground/45">{suggestion.slice(inputVal.length)}</span>
                    </span>
                  )}
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="type command..."
                    className="w-full bg-transparent border-0 outline-none text-foreground focus:ring-0 placeholder:text-muted-foreground/30 p-0 text-sm font-mono relative z-10"
                  />
                </div>
                <Button
                  onClick={() => handleCommand(inputVal)}
                  size="icon"
                  variant="ghost"
                  className="w-7 h-7 hover:bg-white/5 text-accent"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Command Badges (Click to run) */}
            <div className="flex flex-wrap items-center gap-2 px-1">
              <span className="text-xs text-muted-foreground font-mono mr-1">// click:</span>
              {['about', 'skills', 'projects', 'neofetch', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-3 py-1 text-xs font-mono border border-white/5 bg-secondary/30 hover:bg-accent/10 hover:border-accent/40 hover:text-accent rounded-full transition-all duration-300"
                >
                  {cmd}()
                </button>
              ))}
            </div>

            {/* Mini Photo & Stats Bar */}
            <div className="dev-window rounded-xl p-4 flex items-center justify-between border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-secondary/40 shrink-0">
                  <img
                    src={profileImage}
                    alt="Yashas"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-accent/10 pointer-events-none" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-foreground">Yashas H Gatty</h3>
                  <p className="text-xs text-muted-foreground font-mono">Mangaluru, India - 4th Year AI&ML</p>
                </div>
              </div>
              <div className="flex items-center gap-5 text-right font-mono text-xs hidden sm:flex text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-accent/70" />
                  <span>ONLINE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-accent/70" />
                  <span>SYS: OK</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;