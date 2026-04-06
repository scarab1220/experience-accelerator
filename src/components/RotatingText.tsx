import { useState, useEffect } from "react";

const phrases = [
  "Project Leadership",
  "Software Development",
  "Agile Delivery",
  "Digital Strategy",
  "Creative Solutions",
];

const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[currentIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.substring(0, displayed.length - 1)
          : current.substring(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentIndex]);

  return (
    <span className="text-primary glow-text-cyan typing-cursor">
      {displayed}
    </span>
  );
};

export default RotatingText;
