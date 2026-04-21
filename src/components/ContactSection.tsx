import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MapPin, Linkedin, Github, Send, Instagram, Camera, MessageCircle } from "lucide-react";

const SteamIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.62 0 .39 4.84.03 11.02L6.48 13.7a3.4 3.4 0 0 1 1.92-.6c.06 0 .12 0 .18.01l2.86-4.15v-.06a4.55 4.55 0 1 1 4.55 4.55h-.1l-4.08 2.92c0 .05.01.1.01.16a3.41 3.41 0 1 1-6.81.16L1 14.93C2.43 19.99 7.07 23.7 12 23.7c6.63 0 12-5.37 12-12S18.63 0 12 0zM7.54 18.21l-1.4-.58a2.59 2.59 0 0 0 4.79-1.99 2.59 2.59 0 0 0-3.4-1.4l1.45.6a1.91 1.91 0 1 1-1.45 3.53l.01-.16zm10.59-7.6a3.03 3.03 0 1 0-6.06 0 3.03 3.03 0 0 0 6.06 0zm-5.3-.01a2.27 2.27 0 1 1 4.54.01 2.27 2.27 0 0 1-4.54-.01z"/>
  </svg>
);
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="max-w-5xl mx-auto fade-in-up relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 neon-line" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary glow-text-cyan">Contact</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 cyber-heading">
          <span className="text-gradient-cyber">Let's Connect</span>
        </h2>
        <p className="text-foreground/50 text-sm md:text-base mb-16 max-w-xl">
          Whether you need end-to-end project leadership or strategic consulting, I'm ready to deliver with confidence.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-foreground/60">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm">San Salvador, El Salvador · Remote</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://www.linkedin.com/in/oscar-abarca-a1ba4a88/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="neon-card-hover rounded-full border border-primary/30 p-3 text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/scarab1220" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="neon-card-hover rounded-full border border-primary/30 p-3 text-primary">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://wa.me/50360295678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="neon-card-hover rounded-full border border-primary/30 p-3 text-primary">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/osc.c1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="neon-card-hover rounded-full border border-primary/30 p-3 text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://vsco.co/scarabarca/gallery" target="_blank" rel="noopener noreferrer" aria-label="VSCO" className="neon-card-hover rounded-full border border-primary/30 p-3 text-primary">
                <Camera className="w-5 h-5" />
              </a>
              <a href="https://steamcommunity.com/profiles/76561198290841240/" target="_blank" rel="noopener noreferrer" aria-label="Steam" className="neon-card-hover rounded-full border border-primary/30 p-3 text-primary">
                <SteamIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-card/80 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:glow-cyan transition-all"
              />
              {errors.name && <p className="text-xs text-accent mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-card/80 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:glow-cyan transition-all"
              />
              {errors.email && <p className="text-xs text-accent mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-card/80 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:glow-cyan transition-all resize-none"
              />
              {errors.message && <p className="text-xs text-accent mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)] transition-all glow-cyan"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
