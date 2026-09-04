import { useState, useEffect } from 'react';
import { Search, ArrowUpRight, Download, Github, Linkedin, Mail, Laptop, Code2, Briefcase, Sparkles, X, Terminal, Volume2 } from 'lucide-react';
import { sound } from '../utils/sound';

interface CommandItem {
  id: string;
  title: string;
  category: 'NAVIGATION' | 'ACTIONS' | 'PROJECTS';
  icon: any;
  shortcut?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToSection = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      const offset = 64;
      const bodyTop = document.body.getBoundingClientRect().top;
      const elTop = el.getBoundingClientRect().top;
      window.scrollTo({ top: elTop - bodyTop - offset, behavior: 'smooth' });
    }
    onClose();
  };

  const commands: CommandItem[] = [
    { id: 'nav_home', title: 'Home (Overview)', category: 'NAVIGATION', icon: Terminal, shortcut: '⌘1', action: () => scrollToSection('home') },
    { id: 'nav_about', title: 'About & Patent Spec', category: 'NAVIGATION', icon: Code2, shortcut: '⌘2', action: () => scrollToSection('about') },
    { id: 'nav_exp', title: 'Work Experience & Cycles', category: 'NAVIGATION', icon: Briefcase, shortcut: '⌘3', action: () => scrollToSection('experience') },
    { id: 'nav_projects', title: 'Featured Software Products', category: 'NAVIGATION', icon: Sparkles, shortcut: '⌘4', action: () => scrollToSection('projects') },
    { id: 'nav_skills', title: 'Skills & Technical Specs', category: 'NAVIGATION', icon: Laptop, shortcut: '⌘5', action: () => scrollToSection('skills') },
    { id: 'nav_contributions', title: 'Code & Contributions', category: 'NAVIGATION', icon: Terminal, shortcut: '⌘6', action: () => scrollToSection('contributions') },
    { id: 'nav_contact', title: 'Contact Transmission', category: 'NAVIGATION', icon: Mail, shortcut: '⌘7', action: () => scrollToSection('contact') },

    { id: 'proj_roast', title: 'View ResumeRoast AI Project', category: 'PROJECTS', icon: ArrowUpRight, action: () => { sound.playClick(); window.open('https://resumeroast-in.vercel.app/', '_blank'); onClose(); } },
    { id: 'proj_edu', title: 'View EduCareer Career Guidance Repo', category: 'PROJECTS', icon: Github, action: () => { sound.playClick(); window.open('https://github.com/Uttham-412/educareer', '_blank'); onClose(); } },

    { id: 'act_sound', title: `Toggle UI Sound Effects (${sound.isEnabled() ? 'ON' : 'OFF'})`, category: 'ACTIONS', icon: Volume2, shortcut: '⌘S', action: () => { sound.toggle(); onClose(); } },
    { id: 'act_resume', title: 'Download Yashas Resume (PDF)', category: 'ACTIONS', icon: Download, shortcut: '⌘D', action: () => { sound.playClick(); window.open('/Yashas-H-Gatty.pdf?v=1', '_blank'); onClose(); } },
    { id: 'act_github', title: 'Open GitHub Profile (@Yashas8gatty)', category: 'ACTIONS', icon: Github, action: () => { sound.playClick(); window.open('https://github.com/Yashas8gatty', '_blank'); onClose(); } },
    { id: 'act_linkedin', title: 'Open LinkedIn Profile', category: 'ACTIONS', icon: Linkedin, action: () => { sound.playClick(); window.open('https://linkedin.com/in/yashasgatty', '_blank'); onClose(); } },
    { id: 'act_email', title: 'Send Direct Email', category: 'ACTIONS', icon: Mail, action: () => { sound.playClick(); window.location.href = 'mailto:yashasgatty0@gmail.com'; onClose(); } },
  ];

  const filteredCommands = commands.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          const event = new CustomEvent('open-command-palette');
          window.dispatchEvent(event);
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-start justify-center pt-20 px-4 font-sans select-none animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#111214] border border-white/[0.08] rounded-[10px] shadow-2xl overflow-hidden flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.06] bg-[#0C0D0F]">
          <Search className="w-4 h-4 text-[#5E6AD2] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search sections..."
            className="w-full bg-transparent border-0 outline-none text-[#F7F8F8] placeholder:text-[#747A85] text-xs font-sans"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] text-[10px] font-mono text-[#747A85] border border-white/[0.04]">ESC</kbd>
        </div>

        {/* Command Items List */}
        <div className="max-h-[300px] overflow-y-auto p-1.5 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-6 text-center font-mono text-xs text-[#747A85]">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, index) => {
              const Icon = cmd.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors text-xs font-sans ${
                    isSelected
                      ? 'bg-[#5E6AD2]/[0.14] text-[#F7F8F8] border border-[#5E6AD2]/30'
                      : 'text-[#A7ADB8] hover:bg-white/[0.03] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#8F9BFF]' : 'text-[#747A85]'}`} />
                    <span className={isSelected ? 'font-medium text-white' : ''}>{cmd.title}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <span className="text-[#747A85]">{cmd.category}</span>
                    {cmd.shortcut && (
                      <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.06] text-[#F7F8F8]">
                        {cmd.shortcut}
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Command Menu Footer */}
        <div className="px-4 py-2 bg-[#0C0D0F] border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#747A85]">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 rounded bg-white/[0.05] text-[#F7F8F8]">↑↓</kbd> navigate</span>
            <span><kbd className="px-1 py-0.5 rounded bg-white/[0.05] text-[#F7F8F8]">↵</kbd> select</span>
          </div>
          <div className="flex items-center gap-1 text-[#8F9BFF]">
            <Terminal className="w-3 h-3" />
            <span>Linear ⌘K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
