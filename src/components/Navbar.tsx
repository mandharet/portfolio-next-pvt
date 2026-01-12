import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between">
        <Link href="/" className="font-semibold">
          TM
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Creator lab</Link>
          <Link href="/blog">I write</Link>
          <Link href="/resume">Resume</Link>
          {/* <Link href="/contact">Contact</Link> */}
        </div>
      </div>
    </nav>
  );
}
