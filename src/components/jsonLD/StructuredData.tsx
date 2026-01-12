"use client";

import Script from "next/script";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tejas Mandhare",
    jobTitle: "Remote Backend & React Engineer",
    description:
      "Builder-minded engineer developing scalable backend systems, APIs, and React applications.",
    url: "https://tejas.mandhare.com",
    sameAs: [
      "https://www.linkedin.com/in/your-linkedin",
      "https://github.com/your-github",
    ],
  };

  return (
    <Script
      id="developer-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
