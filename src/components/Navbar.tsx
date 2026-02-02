"use client";

import { cn } from "@/lib/utils";
import { Briefcase, FileText, FolderOpen, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./Modetoggle";
import { Button } from "./ui/shadcn/button";

interface NavbarProps {
  resumeEnabled: boolean;
}

export default function Navbar({ resumeEnabled }: NavbarProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/projects", label: "Projects", icon: FolderOpen },
    { href: "/blog", label: "Blog", icon: FileText },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            TM
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hover:text-primary transition-colors",
                  pathname === link.href && "text-primary font-medium",
                )}
              >
                {link.label}
              </Link>
            ))}
            {resumeEnabled && (
              <Button asChild variant="outline" size="sm">
                <Link href="/resume">Resume</Link>
              </Button>
            )}
            <ModeToggle />
          </div>

          <div className="md:hidden">
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 w-full z-50 md:hidden border-t bg-background/95 backdrop-blur-sm">
        <div className="flex justify-around items-center py-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
