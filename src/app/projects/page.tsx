import PageLayout from "@/components/PageLayout";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/project";
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
        <h1 className="text-4xl font-bold">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
