import { useEffect, useRef, useState } from "react";

interface PacmanScrollBannerProps {
  /** Number of dots Pac-Man eats across the banner */
  dotCount?: number;
  /** Direction of travel */
  direction?: "ltr" | "rtl";
}

/**
 * A horizontal banner that places Pac-Man chasing dots between sections.
 * Pac-Man's horizontal position is driven by the user's scroll progress
 * over the banner area, so he advances as the user scrolls and rewinds
 * if they scroll back up.
 */
const PacmanScrollBanner = ({
  dotCount = 18,
  direction = "ltr",
}: PacmanScrollBannerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when banner enters bottom of viewport, 1 when it exits the top
      const total = vh + rect.height;
      const traveled = vh - rect.top;
      const p = Math.max(0, Math.min(1, traveled / total));
      setProgress(p);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const travel = direction === "ltr" ? progress : 1 - progress;
  // Pac-Man "mouth" chomps on a fast loop, independent of scroll
  const dots = Array.from({ length: dotCount });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y border-primary/15 bg-background py-6"
    >
      {/* faint glow line behind dots */}
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* dots row */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-12">
        {dots.map((_, i) => {
          // dot is "eaten" once Pac-Man has passed it
          const dotProgress = (i + 0.5) / dotCount;
          const eaten =
            direction === "ltr" ? travel > dotProgress : travel < dotProgress;
          return (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                eaten
                  ? "scale-0 bg-primary/0"
                  : "scale-100 bg-primary/70 shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
              }`}
            />
          );
        })}
      </div>

      {/* Pac-Man */}
      <div
        className="pointer-events-none absolute top-1/2 -translate-y-1/2"
        style={{
          left: `${travel * 100}%`,
          transform: `translate(-50%, -50%) scaleX(${
            direction === "ltr" ? 1 : -1
          })`,
          transition: "left 120ms linear",
        }}
      >
        <div className="pacman-chomp drop-shadow-[0_0_12px_hsl(var(--primary)/0.8)]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="text-primary"
          >
            {/* Pac-Man body using two wedges that animate via CSS */}
            <g fill="currentColor">
              <path
                className="pac-top"
                d="M16 16 L32 16 A16 16 0 0 0 16 0 Z"
              />
              <path
                className="pac-bottom"
                d="M16 16 L32 16 A16 16 0 0 1 16 32 Z"
              />
            </g>
            {/* eye */}
            <circle cx="20" cy="8" r="1.6" fill="hsl(var(--background))" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PacmanScrollBanner;
