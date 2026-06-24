import { Github, Linkedin, Mail, Heart, ArrowUp, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-24 border-t border-white/5 bg-black/70 select-none">
      <div className="container mx-auto px-6 relative z-10">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2 font-mono font-bold tracking-wider">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-foreground">yashas<span className="text-accent">.</span>dev</span>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">// ready for freelance & contracts</div>
          </div>

          {/* Social Channels */}
          <div className="flex gap-3">
            <a
              href="https://github.com/Yashas8gatty"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/5 bg-secondary/30 rounded-lg hover:border-accent/40 hover:text-accent hover:scale-105 transition-all duration-300 group"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/yashasgatty"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/5 bg-secondary/30 rounded-lg hover:border-accent/40 hover:text-accent hover:scale-105 transition-all duration-300 group"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:yashasgatty0@gmail.com"
              className="p-2 border border-white/5 bg-secondary/30 rounded-lg hover:border-accent/40 hover:text-accent hover:scale-105 transition-all duration-300 group"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Yashas H Gatty.</span>
          </div>

          <div>
            <span>Built using React.js & Tailwind CSS</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-secondary/80 text-foreground rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-300 z-50 border border-white/10 hover:border-accent/40 hover:text-accent"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;