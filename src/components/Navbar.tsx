import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = ["About", "Services", "Skills", "Experience", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-[120px] py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            OSCAR<span className="text-primary">.DEV</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="flex items-center gap-[14px] text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {link}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("Contact")}
            className="relative rounded-full border border-foreground/20 p-[1px]"
          >
            <div className="btn-glow-streak rounded-full bg-background px-[29px] py-[11px] text-sm font-medium text-foreground hover:bg-primary/10 transition-colors">
              Get in Touch
            </div>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 rounded-xl border border-primary/20 bg-background/95 backdrop-blur-xl p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium text-left"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("Contact")}
              className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
