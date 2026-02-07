import PageLayout from "@/components/PageLayout";
import { getAllExperiences } from "@/lib/experience";
import ExperienceList from "@/components/ExperienceList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience building backend systems, APIs, and distributed services.",
};

export default function ExperiencePage() {
  const experiences = getAllExperiences();

  return (
    <PageLayout>
      <div className="space-y-8 pb-30 pt-10">
        <ExperienceList experiences={experiences} />
      </div>
    </PageLayout>
  );
}
