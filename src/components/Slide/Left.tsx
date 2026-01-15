"use client";

import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "./routes";

export default function Left() {
    const pathname = usePathname();
    const router = useRouter();

    const currentIndex = ROUTES.indexOf(pathname);
    const prevRoute = ROUTES[currentIndex - 1];

    if (!prevRoute) return null; // hide on first page

    return (
        <div className="md:hidden z-30">
            <button
                onClick={() => router.push(prevRoute)}
                className="p-2 text-3xl cursor-pointer opacity-60 hover:opacity-100 transition"
                aria-label="Previous"
            >
                ←
            </button>
        </div>
    );
}
