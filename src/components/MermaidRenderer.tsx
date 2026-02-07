"use client";

import { useEffect } from "react";

export function MermaidRenderer() {
  useEffect(() => {
    const initMermaid = async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({ startOnLoad: false, theme: "default" });
      await mermaid.run({
        querySelector: ".mermaid",
      });
    };

    initMermaid();
  }, []);

  return null;
}
