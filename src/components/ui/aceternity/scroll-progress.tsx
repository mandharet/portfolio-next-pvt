"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Find the scrollable div with overflow-y-auto class
      const scrollContainer = document.querySelector(
        ".overflow-y-auto",
      ) as HTMLElement;
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      const scrollPercent = (scrollTop / maxScroll) * 100;
      setProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const scrollContainer = document.querySelector(".overflow-y-auto");
      if (scrollContainer) {
        updateProgress();
        scrollContainer.addEventListener("scroll", updateProgress, {
          passive: true,
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      const scrollContainer = document.querySelector(".overflow-y-auto");
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateProgress);
      }
    };
  }, []);

  return (
    <div className="fixed top-[60px] left-0 w-full h-1 bg-border/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
