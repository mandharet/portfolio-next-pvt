"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

type GiscusProps = {
  category?: "blog" | "project";
};

export function Giscus({ category = "blog" }: GiscusProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === "dark" ? "dark" : "light";

  const config = {
    blog: {
      category: "Blog Comments",
      categoryId: "DIC_kwDOQ4bCIc4C2BD9",
    },
    project: {
      category: "Project Discussions",
      categoryId: "DIC_kwDOQ4bCIc4C2BEK",
    },
  };

  const { category: categoryName, categoryId } = config[category];

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "mandharet/portfolio-next-pvt");
    script.setAttribute("data-repo-id", "R_kgDOQ4bCIQ");
    script.setAttribute("data-category", categoryName);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;

    ref.current.appendChild(script);
  }, [theme, categoryName, categoryId]);

  // Update theme when it changes
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app"
    );
  }, [theme]);

  return <div ref={ref} />;
}
