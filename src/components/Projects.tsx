import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar, MessageSquare, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Assignment Reminder System',
      description: 'A comprehensive system that helps students manage assignments with automated WhatsApp and Telegram notifications. Built with React frontend and Python backend.',
      image: '📚',
      technologies: ['React.js', 'Python', 'WhatsApp API', 'Telegram Bot', 'Firebase'],
      features: [
        'Automated reminder notifications',
        'Multi-platform alerts (WhatsApp/Telegram)',
        'Assignment tracking dashboard',
        'Due date management'
      ],
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'College Event Management Web App',
      description: 'Full-featured event management platform for college events with real-time updates, registration system, and admin dashboard.',
      image: '🎓',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'React Router'],
      features: [
        'Event registration system',
        'Real-time event updates',
        'Admin dashboard',
        'User authentication'
      ],
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with beautiful animations and glass morphism design.',
      image: '💼',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      features: [
        'Responsive design',
        'Beautiful animations',
        'Glass morphism UI',
        'Contact form integration'
      ],
      github: '#',
      demo: '#',
      status: 'Live'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'text-green-400 bg-green-400/10';
      case 'Completed':
        return 'text-blue-400 bg-blue-400/10';
      default:
        return 'text-yellow-400 bg-yellow-400/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Live':
        return <Globe className="w-3 h-3" />;
      case 'Completed':
        return <Calendar className="w-3 h-3" />;
      default:
        return <MessageSquare className="w-3 h-3" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-32 left-32 w-48 h-48 rounded-full gradient-primary opacity-5 animate-float" />
      <div className="absolute bottom-32 right-32 w-36 h-36 rounded-full gradient-primary opacity-10 animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of applications I've built with passion and dedication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-0 p-0 overflow-hidden hover:scale-105 transition-all duration-500 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="relative p-8 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    {project.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-8 pb-4">
                <h4 className="text-sm font-medium mb-3 text-accent">Key Features:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="px-8 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="p-8 pt-4 border-t border-border/50 flex gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex-1 glass hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 gradient-primary hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            variant="secondary"
            className="glass-card hover:scale-105 transition-all duration-300 px-8 py-3"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;