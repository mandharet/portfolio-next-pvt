export default function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tejas Mandhare",
    jobTitle: "Software Engineer",
    description: "Software Engineer specializing in .NET, Go, React, APIs, and scalable system design.",
    url: "https://tejas.mandhare.com",
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
    ],
    knowsAbout: [".NET", "Go", "React", "System Design", "API Development"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
