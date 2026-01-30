import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Tejas Mandhare - Software Engineer specializing in .NET, Go, and React.",
  alternates: {
    canonical: "https://tejas.mandhare.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
