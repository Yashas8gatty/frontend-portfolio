import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, GraduationCap, Heart, Code2 } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code2, title: 'Frontend Development', description: 'Building modern web applications with React.js' },
    { icon: Heart, title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces' },
    { icon: GraduationCap, title: 'AI & Machine Learning', description: 'Exploring the future of intelligent systems' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full gradient-primary opacity-10 animate-float" />
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full gradient-primary opacity-5 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate learner on a journey to create meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4 text-accent">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently in my 3rd year pursuing AI & Machine Learning at Canara Engineering College, 
                I've found my true passion in Frontend Development and UI/UX design. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as curiosity about how websites work has evolved into a deep appreciation 
                for creating seamless user experiences using modern technologies like React.js, 
                Next.js, and cutting-edge design principles.
              </p>
            </div>

            <Button className="gradient-primary hover:scale-105 transition-all duration-300 group">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Interests Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">What I'm Passionate About</h3>
            {interests.map((interest, index) => (
              <Card 
                key={index} 
                className="glass-card border-0 p-6 hover:scale-105 transition-all duration-300 animate-fade-in" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="gradient-primary p-3 rounded-xl">
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{interest.title}</h4>
                    <p className="text-muted-foreground">{interest.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Years Learning', value: '3+' },
            { label: 'Projects Built', value: '10+' },
            { label: 'Technologies', value: '8+' },
            { label: 'Certifications', value: '2' },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;