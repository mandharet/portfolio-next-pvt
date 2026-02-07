import PageLayout from "@/components/PageLayout";
import { getAllProjects } from "@/lib/project";
import ProjectList from "@/components/ProjectList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my projects - scalable backend systems, APIs, and developer tools.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <PageLayout>
      <div className="space-y-8 pb-30 pt-10">
        <ProjectList projects={projects} />
      </div>
    </PageLayout>
  );
}
