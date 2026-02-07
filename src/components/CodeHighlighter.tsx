"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function CodeHighlighter({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 z-10 p-2 rounded bg-zinc-700/80 hover:bg-zinc-600 transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <IconCheck size={14} className="text-green-400" />
        ) : (
          <IconCopy size={14} className="text-zinc-300" />
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? materialOceanic : materialOceanic}
        customStyle={{ margin: 0, borderRadius: "1rem" }}
        wrapLines
        wrapLongLines
      >
        {String(code).trim()}
      </SyntaxHighlighter>
    </div>
  );
}
