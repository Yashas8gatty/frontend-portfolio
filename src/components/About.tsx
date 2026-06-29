import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, GraduationCap, Heart, Code2, Clock, MapPin, Compass, Laptop, Award, User } from 'lucide-react';

const About = () => {
  const [localTime, setLocalTime] = useState('');

  // Live Mangaluru Clock (Asia/Kolkata timezone)
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const passions = [
    { icon: Code2, title: 'Frontend Systems', desc: 'Building modular interfaces using React.js, TypeScript, and Tailwind CSS.' },
    { icon: Laptop, title: 'Intelligent Products', desc: 'Integrating machine learning APIs with FastAPI, leveraging Sentence-BERT models.' },
    { icon: Compass, title: 'Data Analytics', desc: 'Creating structured dashboards and data visualizations with Scikit-Learn and Power BI.' },
  ];

  const stats = [
    { label: 'Active Internship', value: '1' },
    { label: 'Featured Projects', value: '3' },
    { label: 'Core Tech Stack', value: '10+' },
    { label: 'Academic Years', value: '4' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden line-grid dot-grid">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary border border-white/5 text-xs font-mono text-muted-foreground mb-4">
            <span>cat about_me.md</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            About <span className="gradient-text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto font-mono">
            // Bridging software engineering and intelligent systems
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Portrait Profile Photo Card (Spans 1 col, 2 rows on lg) */}
          <div className="lg:col-span-1 lg:row-span-2 relative dev-window glow-card rounded-xl overflow-hidden border-white/5 flex flex-col justify-between p-8 group min-h-[420px]" onMouseMove={handleMouseMove}>
            {/* Grayscale Background Profile Image with Hover Transition */}
            <div className="absolute inset-0 z-0">
              <img
                src="/yashas.jpeg"
                alt="Yashas"
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
              />
              {/* Dark overlay gradients to fade bottom and blend top */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-b from-accent/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Typography Overlay Behind Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center translate-y-48 px-8 pointer-events-none select-none opacity-10 group-hover:opacity-10 transition-opacity duration-500">
              <span className="font-sans font-extrabold text-5xl leading-none text-foreground uppercase tracking-widest block">IMAGINE</span>
              <span className="font-sans font-extrabold text-5xl leading-none text-foreground uppercase tracking-widest block mt-2">FOCUS</span>
              <span className="font-sans font-extrabold text-5xl leading-none text-foreground uppercase tracking-widest block mt-2">BUILD</span>
            </div>

            {/* Top-Left Icon Badge */}
            <div className="z-10 w-10 h-10 rounded-xl bg-secondary/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent shadow-lg">
              <User className="w-5 h-5" />
            </div>

            {/* Bottom Info Labels */}
            <div className="z-10 mt-auto">
              <p className="font-mono text-[10px] sm:text-xs text-accent/80 tracking-wide">// A journey, told in moments.</p>
              <h3 className="font-sans text-xl font-bold text-foreground mt-1">About Me</h3>
            </div>
          </div>

          {/* Main Story Box (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 dev-window glow-card rounded-xl p-8 flex flex-col justify-between border-white/5" onMouseMove={handleMouseMove}>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-sm font-semibold tracking-wider uppercase text-foreground">yashas_journey.log</h3>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground sm:text-right">LOC: MANGALURU</div>
              </div>

              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I am a fourth-year student pursuing a B.E. in <span className="text-foreground font-semibold">Artificial Intelligence & Machine Learning</span> at Canara Engineering College. Alongside my academic focus, I build production-facing frontend applications as an intern, translating design layouts into scalable code.
                </p>
                <p>
                  My development interests span client-side systems, responsive user interfaces, and the integration of machine learning models. I specialize in building modular UI components with <span className="text-foreground font-semibold">React.js, TypeScript, and Tailwind CSS</span>, aiming to create intuitive and intelligent web products.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">// active_status: coding</span>
              <a href="/Yashas-H-Gatty.pdf?v=1" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto font-mono text-xs border-accent/20 hover:border-accent hover:bg-accent/5 flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  download_resume()
                </Button>
              </a>
            </div>
          </div>

          {/* Time and Location Cell (Spans 1 col) */}
          <div className="dev-window glow-card rounded-xl p-8 flex flex-col justify-between border-white/5" onMouseMove={handleMouseMove}>
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-mono text-sm font-semibold tracking-wider uppercase text-foreground">sys_clock</h3>
              </div>

              <div className="space-y-6">
                {/* Live Clock Display */}
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">// local_time (IST)</div>
                  <div className="text-3xl font-mono font-bold text-accent tracking-widest mt-1">
                    {localTime || '00:00:00 AM'}
                  </div>
                </div>

                {/* Geographical coordinates */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div className="font-mono text-xs text-muted-foreground">
                    <div>Mangaluru, Karnataka</div>
                    <div>12.9141° N, 74.8560° E</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>GMT +5:30 (India Standard Time)</span>
            </div>
          </div>

          {/* Education & Mini stats block (Spans 1 col) */}
          <div className="dev-window glow-card rounded-xl p-8 flex flex-col justify-between border-white/5" onMouseMove={handleMouseMove}>
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-mono text-sm font-semibold tracking-wider uppercase text-foreground">sys_stats</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, idx) => (
                  <div key={idx} className="border border-white/5 bg-secondary/20 p-3 rounded-lg flex flex-col justify-center">
                    <div className="text-xl sm:text-2xl font-mono font-bold text-foreground">{s.value}</div>
                    <div className="text-[10px] font-mono text-muted-foreground mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-muted-foreground leading-relaxed">
              * metrics collected from active repository logs
            </div>
          </div>

          {/* Passion Box (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 dev-window glow-card rounded-xl p-8 flex flex-col justify-between border-white/5" onMouseMove={handleMouseMove}>
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-mono text-sm font-semibold tracking-wider uppercase text-foreground">core_focus_areas</h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {passions.map((p, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-white/5 flex items-center justify-center text-primary">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-mono text-xs font-bold text-foreground uppercase">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;