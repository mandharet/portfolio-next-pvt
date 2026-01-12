import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builder of Backend Systems",
  description:
    "I build scalable backend systems, APIs, and developer-focused tools using .NET, Go, and React.",
};
export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">
            Tejas
          </h1>
          <h1 className="text-5xl font-bold">
            Mandhare
          </h1>
          <h2>Software Engineer</h2>
          <button>Resume</button>
        </div>
        <div>
          Social URL- 
          <span>G</span>
          <span>L</span>
          <span>X</span>
          <span>i</span>
          <span>W</span>
        </div>
      </div>
    </section>
  );
}
