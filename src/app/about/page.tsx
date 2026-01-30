import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import { getAboutConfig, getPersonalConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Tejas Mandhare - Software Engineer specializing in .NET, Go, and React.",
  alternates: {
    canonical: "https://tejas.mandhare.com/about",
  },
};

export default function AboutPage() {
  const aboutConfig = getAboutConfig();
  const personalConfig = getPersonalConfig();

  return <AboutContent config={aboutConfig} personal={personalConfig} />;
}
