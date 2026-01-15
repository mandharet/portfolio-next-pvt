"use client";

import { ReactNode } from "react";

export default function ScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="overflow-y-auto overflow-x-auto">
      {children}
    </div>
  );
}
