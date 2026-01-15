"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Creator Lab" },
    { href: "/blog", label: "I Write" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className="fixed w-full border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          TM
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-md transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 z-50 h-full w-full max-w-xl bg-white
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0 right-0" : "translate-x-full -right-100"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-medium hover:text-gray-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
