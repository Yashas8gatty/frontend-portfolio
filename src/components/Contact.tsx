import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-white/[0.06] pb-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-0.5">TRANSMISSION // CONTACT</div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F7F8F8] font-sans">
              Get in Touch
            </h2>
          </div>
          <div className="text-xs font-mono text-[#747A85] hidden sm:block">
            STATUS: OPEN FOR ROLES
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 space-y-3 font-sans text-xs">
            <div className="text-xs font-mono font-semibold text-[#F7F8F8] uppercase border-b border-white/[0.06] pb-2">
              SEND DIRECT MESSAGE
            </div>

            <form
              action="https://formspree.io/f/mldwozjz"
              method="POST"
              className="space-y-3 pt-1"
            >
              <div className="space-y-1">
                <label htmlFor="name" className="text-[#A7ADB8]">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter name..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#101113] border-white/[0.06] text-[#F7F8F8] text-xs h-8 rounded"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-[#A7ADB8]">Your Email Address</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#101113] border-white/[0.06] text-[#F7F8F8] text-xs h-8 rounded"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[#A7ADB8]">Message Specification</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your inquiry or project details..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-[#101113] border-white/[0.06] text-[#F7F8F8] text-xs p-2.5 rounded resize-none"
                />
              </div>

              <button
                type="submit"
                className="linear-btn-primary w-full py-2 text-xs flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Message</span>
              </button>
            </form>
          </div>

          {/* Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4 font-sans text-xs">
            
            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-[#F7F8F8] border-b border-white/[0.06] pb-2">
                DIRECT CONTACT SPECIFICATIONS
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href="mailto:yashasgatty0@gmail.com"
                  className="flex items-center justify-between p-2 rounded bg-[#101113] border border-white/[0.04] text-[#A7ADB8] hover:text-[#F7F8F8] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#747A85]" />
                    <span>yashasgatty0@gmail.com</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#747A85]" />
                </a>

                <a
                  href="tel:+916361334462"
                  className="flex items-center justify-between p-2 rounded bg-[#101113] border border-white/[0.04] text-[#A7ADB8] hover:text-[#F7F8F8] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#747A85]" />
                    <span>+91 6361334462</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#747A85]" />
                </a>

                <div className="flex items-center justify-between p-2 rounded bg-[#101113] border border-white/[0.04] text-[#A7ADB8]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#747A85]" />
                    <span>Mangaluru, Karnataka, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* External Links */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-[#747A85] uppercase mb-1.5">ENGINEERING PROFILES</div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/yashas8gatty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linear-btn-secondary py-1.5 px-3 text-xs flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/yashasgatty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linear-btn-secondary py-1.5 px-3 text-xs flex items-center justify-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#A7ADB8]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;