import { getSiteConfig } from "@/lib/config";
import { ProjectMeta } from "@/types/project";

interface ProjectStructuredDataProps {
  project: ProjectMeta;
}

export default function ProjectStructuredData({
  project,
}: ProjectStructuredDataProps) {
  const siteConfig = getSiteConfig();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    dateCreated: project.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    programmingLanguage: project.tech,
    url: `${siteConfig.domain}/projects/${project.slug}`,
    ...(project.github && {
      codeRepository: project.github,
    }),
    ...(project.link && {
      applicationCategory: "WebApplication",
      applicationSubCategory: "DeveloperApplication",
      url: project.link,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
