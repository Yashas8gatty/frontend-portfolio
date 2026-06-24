import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, ShieldAlert, Cpu } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [currentTime, setCurrentTime] = useState('');

  // Live ISO timestamp for the state inspector
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isFormReady = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'yashasgatty0@gmail.com', href: 'mailto:yashasgatty0@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6361334462', href: 'tel:+916361334462' },
    { icon: MapPin, label: 'Location', value: 'Mangaluru, Karnataka, India', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', link: 'https://github.com/yashas8gatty', username: '@yashas8gatty' },
    { icon: Linkedin, name: 'LinkedIn', link: 'https://linkedin.com/in/yashasgatty', username: 'in/yashasgatty' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden line-grid dot-grid">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary border border-white/5 text-xs font-mono text-muted-foreground mb-4">
            <span>mail -s "hello" yashas.dev</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="gradient-text-accent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto font-mono">
            // Establish a secure link or request collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Contact Form Column (Spans 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between dev-window rounded-xl overflow-hidden border-white/5 p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4 select-none">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-mono text-sm font-semibold tracking-wider uppercase text-foreground">form_payload_sender</h3>
              </div>

              <form
                action="https://formspree.io/f/mldwozjz"
                method="POST"
                className="space-y-4 font-mono text-xs"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-muted-foreground">// sender_name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Input name..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-white/5 bg-secondary/30 focus:border-accent text-foreground text-sm font-mono rounded-lg h-10 px-3"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-muted-foreground">// sender_email</label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Input email..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-white/5 bg-secondary/30 focus:border-accent text-foreground text-sm font-mono rounded-lg h-10 px-3"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-muted-foreground">// message_payload</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write transmission details here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-white/5 bg-secondary/30 focus:border-accent text-foreground text-sm font-mono rounded-lg p-3 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full gradient-accent text-accent-foreground font-mono text-xs font-semibold py-3 hover:scale-102 transition-all duration-300 mt-4 rounded-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  send_transmission()
                </Button>
              </form>
            </div>
          </div>

          {/* Live JSON State Inspector & Channels (Spans 6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Live State Inspector */}
            <div className="flex-1 flex flex-col">
              <div className="font-mono text-[10px] text-muted-foreground mb-1.5 px-1 select-none flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-primary" />
                <span>STATE_INSPECTOR - transmission_status</span>
              </div>

              <div className="dev-window rounded-xl overflow-hidden flex-grow flex flex-col border-white/5 min-h-[220px]">
                <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-white/5 select-none font-mono text-[9px]">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-muted-foreground">SMTP Gateway: Connected</span>
                  </div>
                  <span className="text-muted-foreground">LOCAL STATE</span>
                </div>

                <div className="flex-1 p-5 font-mono text-xs bg-black/25 leading-relaxed overflow-x-auto select-text text-muted-foreground/60">
                  <div><span className="text-muted-foreground/45">{`{`}</span></div>
                  <div className="pl-4">
                    <span className="text-muted-foreground/75">"status"</span>: <span className={isFormReady ? "text-emerald-400" : "text-primary/95"}>
                      "{isFormReady ? "ready_to_transmit" : "awaiting_input"}"
                    </span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground/75">"sender"</span>: <span className="text-foreground/90">"{formData.name || 'null'}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground/75">"email"</span>: <span className="text-foreground/90">"{formData.email || 'null'}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground/75">"payload_length"</span>: <span className="text-primary/95">{formData.message.length}</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground/75">"timestamp"</span>: <span className="text-foreground/80">"{currentTime || new Date().toISOString()}"</span>
                  </div>
                  <div><span className="text-muted-foreground/45">{`}`}</span></div>
                </div>
              </div>
            </div>

            {/* Communication channels */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Info Badges */}
              <div className="dev-window rounded-xl p-5 border-white/5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="font-mono text-[10px] text-primary uppercase tracking-wider">// direct_channels</div>
                  <div className="space-y-3">
                    {contactMethods.map((method, idx) => {
                      const Icon = method.icon;
                      return (
                        <a
                          key={idx}
                          href={method.href}
                          className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors font-mono text-xs group"
                        >
                          <Icon className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="truncate">{method.value}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="dev-window rounded-xl p-5 border-white/5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="font-mono text-[10px] text-primary uppercase tracking-wider">// remote_nodes</div>
                  <div className="space-y-3">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors font-mono text-xs group"
                        >
                          <Icon className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-[9px] text-muted-foreground/50 leading-none">{social.name}</div>
                            <div className="text-xs text-foreground mt-0.5 group-hover:text-accent transition-colors">{social.username}</div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;