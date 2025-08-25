import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = ['Frontend Developer', 'React Developer', 'UI/UX Enthusiast'];

  useEffect(() => {
    if (isTyping) {
      const currentRole = roles[currentIndex];
      if (displayText.length < currentRole.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full gradient-primary opacity-20 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full gradient-primary opacity-10 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full gradient-primary opacity-5 animate-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <p className="text-accent text-lg mb-4 animate-slide-in">
              Hi there! 👋
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-delayed">
              I'm <span className="gradient-text">Yashas</span>
            </h1>
            <div className="text-2xl lg:text-4xl mb-8 h-12 flex items-center justify-center lg:justify-start">
              <span className="text-muted-foreground">A </span>
              <span className="ml-2 text-accent font-semibold border-r-2 border-accent animate-blink pr-1">
                {displayText}
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in-delayed">
              Passionate about creating beautiful, functional web experiences. 
              Currently pursuing AI & ML at Canara Engineering College, with a love for 
              React.js and modern frontend technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8 animate-fade-in-delayed">
              <Button size="icon" variant="secondary" className="glass-card hover:scale-110 transition-all duration-300">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="secondary" className="glass-card hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="secondary" className="glass-card hover:scale-110 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-delayed">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="gradient-primary hover:scale-105 transition-all duration-300"
                size="lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="secondary" 
                className="glass-card hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-delayed">
            <div className="relative">
              <div className="w-80 h-80 rounded-full gradient-primary p-1 animate-glow">
                <img
                  src={profileImage}
                  alt="Yashas - Frontend Developer"
                  className="w-full h-full rounded-full object-cover glass-card"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full gradient-primary opacity-80 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full gradient-primary opacity-60 animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-delayed">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;