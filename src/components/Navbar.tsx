import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between">
        <Link href="/" className="font-semibold">
          Tejas.dev
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
