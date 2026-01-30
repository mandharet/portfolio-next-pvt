import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import PersonStructuredData from "@/components/jsonLD/PersonStructuredData";

export const metadata: Metadata = {
  title: "Home",
  description: "Software Engineer specializing in .NET, Go, React, APIs, and scalable system design.",
  alternates: {
    canonical: "https://tejas.mandhare.com",
  },
};

export default function HomePage() {
  return (
    <>
      <PersonStructuredData />
      <HomeContent />
    </>
  );
}
