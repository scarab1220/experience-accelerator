import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background py-8 px-6 md:px-[120px]">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Oscar Abarca. All rights reserved.
      </span>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/oscar-abarca-a1ba4a88/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="https://github.com/scarab1220" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-4 h-4" />
        </a>
        <a href="mailto:oscarnoeabarca@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
