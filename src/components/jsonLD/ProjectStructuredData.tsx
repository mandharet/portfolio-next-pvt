"use client";

import Script from "next/script";

interface Project {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  remote?: boolean;
}

interface Props {
  project: Project;
}

export default function ProjectStructuredData({ project }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.name,
    description: project.description,
    url: project.url,
    keywords: project.technologies.join(", ") + (project.remote ? ", Remote" : ""),
    programmingLanguage: project.technologies,
  };

  return (
    <Script
      id={`project-jsonld-${project.name.replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
