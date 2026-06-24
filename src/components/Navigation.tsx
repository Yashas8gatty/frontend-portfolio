import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Terminal, ArrowUpRight, Palette } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'cyan' | 'red' | 'green'>('red');
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const updateSlider = () => {
      const activeButton = document.getElementById(`nav-btn-${activeSection}`);
      if (activeButton) {
        setSliderStyle({
          left: activeButton.offsetLeft,
          width: activeButton.clientWidth,
          opacity: 1,
        });
      } else {
        setSliderStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };

    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [activeSection]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'cyan' | 'red' | 'green';
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setTheme('red');
      applyTheme('red');
    }
  }, []);

  const updateFavicon = (t: 'cyan' | 'red' | 'green') => {
    const colors = {
      red: { accent: '%23e52e4d', glow: '%23ff708d' },
      cyan: { accent: '%2300f0ff', glow: '%2370f3ff' },
      green: { accent: '%2300ff66', glow: '%23a3ff57' }
    };
    const c = colors[t];
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs><rect width="32" height="32" rx="8" fill="%230b0d10" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15" /><path d="M9 10L15 16L9 22" stroke="${c.accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" filter="url(%23glow-filter)" /><line x1="17" y1="22" x2="24" y2="22" stroke="${c.glow}" stroke-width="2.5" stroke-linecap="round" filter="url(%23glow-filter)" /></svg>`;
    
    const link = document.querySelector("link[type='image/svg+xml']") as HTMLLinkElement;
    if (link) {
      link.href = `data:image/svg+xml;utf8,${svg}`;
    }
  };

  const applyTheme = (t: 'cyan' | 'red' | 'green') => {
    const root = document.documentElement;
    root.classList.remove('theme-cyan', 'theme-red', 'theme-green');
    root.classList.add(`theme-${t}`);
    updateFavicon(t);
  };

  const cycleTheme = () => {
    const nextTheme = theme === 'cyan' ? 'red' : theme === 'red' ? 'green' : 'cyan';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 group font-mono font-semibold text-lg tracking-wider"
            >
              <Terminal className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-foreground group-hover:text-accent transition-colors duration-300">
                yashas<span className="text-accent">.</span>dev
              </span>
            </button>
            
            {/* Desktop Nav Items */}
            <div className="relative hidden md:flex items-center gap-1 bg-secondary/30 border border-white/5 px-2 py-1.5 rounded-full">
              {/* Sliding Pill Background */}
              <div 
                className="absolute rounded-full bg-white/5 transition-all duration-300 ease-out pointer-events-none"
                style={{
                  left: `${sliderStyle.left}px`,
                  width: `${sliderStyle.width}px`,
                  height: 'calc(100% - 12px)',
                  top: '6px',
                  opacity: sliderStyle.opacity,
                }}
              />

              {/* Sliding Indicator Dot */}
              <div 
                className="absolute bottom-1 w-1 h-1 rounded-full bg-accent transition-all duration-300 ease-out pointer-events-none"
                style={{
                  left: `${sliderStyle.left + (sliderStyle.width / 2) - 2}px`,
                  opacity: sliderStyle.opacity,
                }}
              />

              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1.5 px-4 text-xs font-mono font-medium rounded-full transition-all duration-300 z-10 ${
                    activeSection === item.id 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Action */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={cycleTheme}
                className="p-2 border border-white/5 bg-secondary/30 hover:border-accent/40 text-muted-foreground hover:text-accent rounded-xl hover:scale-115 transition-all duration-300 flex items-center gap-1.5 font-mono text-[10px]"
                title="Switch Color Theme"
              >
                <Palette className="w-4 h-4 text-accent" />
                <span className="uppercase text-foreground font-semibold">{theme}</span>
              </button>

              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="sm"
                className="font-mono text-xs border-accent/20 hover:border-accent hover:bg-accent/5 text-foreground hover:scale-105 transition-all duration-300"
              >
                <span>init_chat()</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-accent" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={cycleTheme}
                className="p-2.5 border border-white/5 bg-secondary/40 hover:border-accent/40 text-muted-foreground hover:text-accent rounded-lg transition-all duration-300 flex items-center gap-1 font-mono text-[9px]"
                title="Switch Color Theme"
              >
                <Palette className="w-3.5 h-3.5 text-accent" />
                <span className="uppercase text-foreground font-semibold">{theme}</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 border border-white/5 rounded-lg bg-secondary/40 text-foreground hover:text-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col justify-center animate-fade-in md:hidden">
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 border border-white/5 rounded-lg bg-secondary/40 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="container mx-auto px-10 py-20 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-6 mt-10">
              <div className="text-xs font-mono text-accent mb-2">// DIRECTORY</div>
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 font-mono text-3xl font-bold tracking-tight border-b border-white/5 hover:text-accent transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-accent mr-3">0{index + 1}.</span>
                  {item.label.toLowerCase()}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="text-xs font-mono text-muted-foreground">// CONNECT</div>
              <div className="flex flex-col gap-2 font-mono text-sm text-muted-foreground">
                <a href="mailto:yashasgatty0@gmail.com" className="hover:text-accent transition-colors">yashasgatty0@gmail.com</a>
                <a href="tel:+916361334462" className="hover:text-accent transition-colors">+91 6361334462</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;