import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Builder of backend systems & APIs
        </h1>
        <p className="text-gray-600 max-w-2xl">
          I design and build scalable backend services, clean APIs,
          and developer-focused tools. Currently focused on
          system design and product-grade engineering.
        </p>
        <div className="flex gap-4">
          <Link href="/projects" className="underline">
            View Projects
          </Link>
          <a href="/resume.pdf" className="underline">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
