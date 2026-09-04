import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#08090A] py-6 font-sans text-xs select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex items-center gap-2 text-[#A7ADB8]">
          <div className="w-4 h-4 rounded bg-[#5E6AD2]/20 border border-[#5E6AD2]/40 flex items-center justify-center font-bold text-[9px] text-[#F7F8F8]">
            YG
          </div>
          <span>© {currentYear} Yashas H Gatty. All rights reserved.</span>
        </div>

        {/* Middle Tech Specs */}
        <div className="text-[11px] font-mono text-[#747A85]">
          Built with React.js · TypeScript · Tailwind CSS
        </div>

        {/* Right Scroll Top Action */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#A7ADB8] hover:text-[#F7F8F8] p-1.5 rounded hover:bg-white/[0.05] transition-colors flex items-center gap-1 text-[11px] font-mono"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;