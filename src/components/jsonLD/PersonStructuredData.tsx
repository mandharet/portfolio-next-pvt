import { getSiteConfig, getPersonalConfig } from "@/lib/config";

export default function PersonStructuredData() {
  const siteConfig = getSiteConfig();
  const personalConfig = getPersonalConfig();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.domain,
    email: siteConfig.email,
    sameAs: [
      personalConfig.social.github,
      personalConfig.social.linkedin,
      ...(personalConfig.social.twitter ? [personalConfig.social.twitter] : []),
    ].filter(Boolean),
    knowsAbout: siteConfig.keywords,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
