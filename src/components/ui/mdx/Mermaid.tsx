"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: "default" });
    if (ref.current) {
      mermaid.contentLoaded();
    }
  }, []);

  return <div ref={ref} className="mermaid">{chart}</div>;
}
