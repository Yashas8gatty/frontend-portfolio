import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'React Frontend Development',
      issuer: 'IBM via Coursera',
      date: '2023',
      description: 'Comprehensive course covering React fundamentals, hooks, state management, and modern frontend development practices.',
      skills: ['React.js', 'JSX', 'Hooks', 'State Management', 'Component Architecture'],
      verifyLink: '#',
      logo: '🔷',
      status: 'Verified'
    },
    {
      title: 'JavaScript Full Course',
      issuer: 'GeeksforGeeks',
      date: '2023',
      description: 'Complete JavaScript course covering ES6+, DOM manipulation, async programming, and modern JavaScript concepts.',
      skills: ['JavaScript ES6+', 'DOM Manipulation', 'Async/Await', 'Promises', 'Modern JS'],
      verifyLink: '#',
      logo: '🟨',
      status: 'Certified'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-16 right-16 w-28 h-28 rounded-full gradient-primary opacity-15 animate-float" />
      <div className="absolute bottom-16 left-16 w-36 h-36 rounded-full gradient-primary opacity-5 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass-card border-0 p-8 hover:scale-105 transition-all duration-500 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{cert.logo}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        {cert.status}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {cert.issuer}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Covered */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3 text-accent">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium hover:bg-accent/20 hover:text-accent transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <Button
                className="gradient-primary hover:scale-105 transition-all duration-300 w-full"
                onClick={() => window.open(cert.verifyLink, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Verify Certificate
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto animate-fade-in">
            <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground mb-6">
              Always expanding my knowledge through online courses, workshops, and hands-on projects. 
              Currently exploring advanced React patterns, UI/UX principles, and modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React Advanced Patterns', 'UI/UX Design', 'Web Performance', 'TypeScript'].map((course, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-full text-sm font-medium"
                >
                  📚 {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;