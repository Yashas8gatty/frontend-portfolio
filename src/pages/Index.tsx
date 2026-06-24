import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import GithubContributions from '@/components/GithubContributions';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <GithubContributions />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
