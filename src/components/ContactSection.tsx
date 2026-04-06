import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
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
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-background">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 neon-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Contact</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gradient-cyber">
          Let's Work Together
        </h2>
        <p className="text-foreground/60 text-sm mb-16 max-w-xl">
          Whether you need end-to-end project leadership or strategic consulting, I'm here to help you deliver with confidence.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <a href="mailto:oscarnoeabarca@outlook.com" className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm">oscarnoeabarca@outlook.com</span>
            </a>
            <div className="flex items-center gap-4 text-foreground/70">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm">San Salvador, El Salvador · USA / LATAM / Remote</span>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/oscar-abarca-a1ba4a88/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary/30 p-3 text-primary hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/scarab1220" target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary/30 p-3 text-primary hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              {errors.name && <p className="text-xs text-accent mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              {errors.email && <p className="text-xs text-accent mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
              {errors.message && <p className="text-xs text-accent mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity glow-cyan"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
