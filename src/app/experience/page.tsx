import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience building backend systems, APIs, and distributed services in product companies.",
};


export default function ExperiencePage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Exp</h2>
      <div className="grid gap-6">
        Experience List
      </div>
    </section>
  );
}