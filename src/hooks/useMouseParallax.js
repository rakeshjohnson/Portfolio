import { useEffect } from "react";

export default function useMouseParallax() {
  useEffect(() => {
    let frame = null;
    let x = 0;
    let y = 0;

    const apply = () => {
      document.documentElement.style.setProperty("--mx", x.toFixed(4));
      document.documentElement.style.setProperty("--my", y.toFixed(4));
      frame = null;
    };

    const handleMove = (e) => {
      x = (e.clientX / window.innerWidth - 0.5) * 2;
      y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
