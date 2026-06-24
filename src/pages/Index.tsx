import { useEffect, useRef } from 'react';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '01';
    const fontSize = 12;

    const drops: number[] = [];
    const initialColumns = Math.ceil(window.innerWidth / fontSize);
    for (let x = 0; x < initialColumns; x++) {
      drops[x] = Math.random() * -120;
    }

    const draw = () => {
      const rootStyle = getComputedStyle(document.documentElement);
      const accentColorRaw = rootStyle.getPropertyValue('--accent').trim();
      const accentHSL = accentColorRaw ? `hsla(${accentColorRaw.replace(/\s+/g, ', ')}, 0.22)` : 'rgba(229, 46, 77, 0.22)';

      // Clear the canvas with destination-out to keep it transparent (no black accumulation overlay)
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = accentHSL;
      ctx.font = `${fontSize}px monospace`;

      const currentColumns = Math.ceil(canvas.width / fontSize);
      while (drops.length < currentColumns) {
        drops.push(Math.random() * -120);
      }

      for (let i = 0; i < currentColumns; i++) {
        if (Math.random() > 0.985 && drops[i] * fontSize > canvas.height) {
          drops[i] = 0;
        }

        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = Math.floor(drops[i]) * fontSize;

        ctx.fillText(text, x, y);
        drops[i] += 0.5;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Full-Page Background Falling Binary Rain */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-[1.0] mix-blend-screen z-0" />

      <Navigation />
      <main className="relative z-10">
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
