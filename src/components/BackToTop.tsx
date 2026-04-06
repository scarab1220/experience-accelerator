import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-primary p-3 text-primary-foreground glow-cyan hover:opacity-90 transition-opacity animate-fade-in"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
