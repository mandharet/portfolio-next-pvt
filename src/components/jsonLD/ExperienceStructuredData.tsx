import { getSiteConfig } from "@/lib/config";
import { ExperienceMeta } from "@/lib/experience";

interface ExperienceStructuredDataProps {
  experience: ExperienceMeta;
}

export default function ExperienceStructuredData({
  experience,
}: ExperienceStructuredDataProps) {
  const siteConfig = getSiteConfig();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WorkExperience",
    name: experience.role,
    description: experience.description,
    startDate: experience.period.split(" - ")[0],
    ...(experience.period.includes("Present")
      ? {}
      : { endDate: experience.period.split(" - ")[1] }),
    employer: {
      "@type": "Organization",
      name: experience.company,
    },
    skills: experience.technologies.join(", "),
    url: `${siteConfig.domain}/experience/${experience.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
