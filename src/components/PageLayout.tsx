"use client";

import { ReactNode } from "react";
import DotPattern from "./ui/aceternity/dot-pattern";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-dvh flex flex-col overflow-hidden relative">
      <DotPattern />
      <div className="flex-1 overflow-y-auto pt-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 h-full">{children}</div>
      </div>
    </div>
  );
}
