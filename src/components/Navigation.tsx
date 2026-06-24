import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
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
            <div className="hidden md:flex items-center gap-1 bg-secondary/30 border border-white/5 px-2 py-1.5 rounded-full">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1.5 px-4 text-xs font-mono font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-accent bg-white/5' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop Action */}
            <div className="hidden md:block">
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
            <div className="md:hidden flex items-center">
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