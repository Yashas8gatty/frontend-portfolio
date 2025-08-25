import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Bootstrap', level: 88, icon: '🅱️' },
        { name: 'JavaScript', level: 92, icon: '🟨' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 92, icon: '🟨' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 93, icon: '🎨' },
      ]
    },
    {
      title: 'Mobile & Tools',
      skills: [
        { name: 'React Native', level: 75, icon: '📱' },
        { name: 'Git/GitHub', level: 90, icon: '🔧' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'Figma', level: 80, icon: '🎯' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full gradient-primary opacity-5 animate-float" />
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full gradient-primary opacity-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="glass-card border-0 p-8 hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-accent font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Also familiar with
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Android Development', 'Node.js', 'MongoDB', 'REST APIs', 
              'Responsive Design', 'Version Control', 'Agile', 'Testing'
            ].map((skill, index) => (
              <div 
                key={index}
                className="glass px-4 py-2 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;