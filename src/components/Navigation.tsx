import { useState, useEffect } from 'react';
import { Menu, X, Search, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/sound';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => sound.isEnabled());

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contributions', label: 'Contributions' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSoundToggle = () => {
    const newState = sound.toggle();
    setIsSoundEnabled(newState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 90;

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
    sound.playClick();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
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

  const triggerCommandPalette = () => {
    sound.playClick();
    const event = new CustomEvent('open-command-palette');
    window.dispatchEvent(event);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 h-[52px] transition-colors duration-200 border-b border-white/[0.06] ${
        isScrolled ? 'bg-[#08090A]/90 backdrop-blur-md' : 'bg-[#08090A]/75 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between font-sans text-xs">
          
          {/* Brand Logo & Identifier */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group select-none text-left"
          >
            <div className="w-5 h-5 rounded bg-[#5E6AD2]/20 border border-[#5E6AD2]/30 flex items-center justify-center font-bold text-[9px] text-[#8F9BFF]">
              YG
            </div>
            <span className="text-[#F7F8F8] font-medium text-xs group-hover:text-white transition-colors">
              Yashas H Gatty
            </span>
          </button>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1 rounded-md text-xs transition-all duration-150 font-medium flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#141517] text-[#F7F8F8] border border-white/[0.06]'
                      : 'text-[#A7ADB8] hover:text-[#F7F8F8] hover:bg-white/[0.03]'
                  }`}
                >
                  {isActive && <span className="w-1 h-1 rounded-full bg-[#5E6AD2]" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions & Command Menu Trigger */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className={`p-1.5 rounded-md border transition-all duration-150 flex items-center gap-1 text-[11px] ${
                isSoundEnabled
                  ? 'bg-[#141517] border-[#5E6AD2]/30 text-[#8F9BFF]'
                  : 'bg-[#101113] border-white/[0.06] text-[#747A85] hover:text-[#A7ADB8]'
              }`}
              title={isSoundEnabled ? 'UI Sound Effects ON' : 'UI Sound Effects OFF'}
            >
              {isSoundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={triggerCommandPalette}
              className="px-2.5 py-1 bg-[#101113] hover:bg-[#141517] border border-white/[0.06] text-[#A7ADB8] hover:text-[#F7F8F8] rounded-md transition-colors flex items-center gap-2 text-[11px]"
              title="Search commands (⌘K / Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#5E6AD2]" />
              <span>Search</span>
              <kbd className="px-1 py-0.5 rounded bg-white/[0.05] text-[10px] font-mono text-[#747A85] border border-white/[0.04]">⌘K</kbd>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="linear-btn-primary px-3 py-1 text-xs flex items-center gap-1"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className={`p-1.5 rounded-md border text-[#A7ADB8] ${
                isSoundEnabled ? 'bg-[#141517] border-[#5E6AD2]/30 text-[#8F9BFF]' : 'bg-[#101113] border-white/[0.06]'
              }`}
              title="Toggle Sound"
            >
              {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={triggerCommandPalette}
              className="p-1.5 rounded-md bg-[#101113] border border-white/[0.06] text-[#A7ADB8]"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4 text-[#5E6AD2]" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-md bg-[#101113] border border-white/[0.06] text-[#F7F8F8]"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090A]/95 backdrop-blur-xl pt-16 px-6 pb-6 flex flex-col justify-between md:hidden font-sans border-b border-white/[0.06]">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-2 px-2">Navigation</div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'bg-[#141517] text-white border border-white/[0.06]'
                    : 'text-[#A7ADB8] hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2]" />}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.06] space-y-2.5 text-xs text-[#A7ADB8]">
            <div className="flex items-center justify-between">
              <span>Contact Email</span>
              <a href="mailto:yashasgatty0@gmail.com" className="text-white hover:underline">yashasgatty0@gmail.com</a>
            </div>
            <div className="flex items-center justify-between">
              <span>Location</span>
              <span className="text-white">Mangaluru, Karnataka</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;