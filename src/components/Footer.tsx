import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 mt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full gradient-primary opacity-5 animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full gradient-primary opacity-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">Yashas</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate Frontend Developer crafting beautiful digital experiences 
              with React.js and modern web technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="#" 
                className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="mailto:yashas.dev@email.com" 
                className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block mx-auto text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>📧 yashas.dev@email.com</p>
              <p>📱 +91 98765 43210</p>
              <p>📍 Karnataka, India</p>
              <p className="text-sm mt-4">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Yashas. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span>Built with React.js & Tailwind CSS</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 gradient-primary rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;