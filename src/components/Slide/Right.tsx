"use client";

import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "./routes";

export default function Right() {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = ROUTES.indexOf(pathname);
  const nextRoute = ROUTES[currentIndex + 1];

  if (!nextRoute) return null; // hide on last page

  return (
    <div className="md:hidden z-30">
      <button
        onClick={() => router.push(nextRoute)}
        className="p-2 text-3xl cursor-pointer opacity-60 hover:opacity-100 transition"
        aria-label="Next"
      >
        →
      </button>
    </div>

  );
}
