import React, { useEffect, useState, Component, ErrorInfo, ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import GithubContributions from '@/components/GithubContributions';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import VercelStrobe from '@/components/VercelStrobe';
import { CommandPalette } from '@/components/CommandPalette';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackName?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class SectionErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Error in section ${this.props.fallbackName}:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="py-8 px-6 text-center border border-white/[0.07] rounded-md bg-[#0C0D0F] max-w-xl mx-auto my-6 font-sans">
          <p className="text-[#E5484D] text-xs font-semibold mb-1">
            Section Error ({this.props.fallbackName || 'Component'})
          </p>
          <p className="text-[#747A85] text-xs font-mono">{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const Index = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpenCommandPalette = () => {
      setIsCommandPaletteOpen(true);
    };
    window.addEventListener('open-command-palette', handleOpenCommandPalette);
    return () => window.removeEventListener('open-command-palette', handleOpenCommandPalette);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090A] text-[#F7F8F8] overflow-x-hidden relative font-sans selection:bg-[#5E6AD2]/20 selection:text-white">
      
      {/* Vercel Triangle Strobe Light Beam Animation */}
      <VercelStrobe />

      {/* Subtle Linear Top Radial Atmosphere Spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(circle_at_50%_0%,rgba(94,106,210,0.04),transparent_45%)] pointer-events-none blur-3xl z-0" />

      <SectionErrorBoundary fallbackName="CommandPalette">
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
      </SectionErrorBoundary>

      <SectionErrorBoundary fallbackName="Navigation">
        <Navigation />
      </SectionErrorBoundary>

      <main className="relative z-10">
        <SectionErrorBoundary fallbackName="Hero">
          <Hero />
        </SectionErrorBoundary>

        <SectionErrorBoundary fallbackName="About">
          <About />
        </SectionErrorBoundary>

        <SectionErrorBoundary fallbackName="Experience">
          <Experience />
        </SectionErrorBoundary>

        <SectionErrorBoundary fallbackName="Projects">
          <Projects />
        </SectionErrorBoundary>

        <SectionErrorBoundary fallbackName="Skills">
          <Skills />
        </SectionErrorBoundary>

        <SectionErrorBoundary fallbackName="GithubContributions">
          <GithubContributions />
        </SectionErrorBoundary>

        <SectionErrorBoundary fallbackName="Contact">
          <Contact />
        </SectionErrorBoundary>
      </main>

      <SectionErrorBoundary fallbackName="Footer">
        <Footer />
      </SectionErrorBoundary>
    </div>
  );
};

export default Index;
