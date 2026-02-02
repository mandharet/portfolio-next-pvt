import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import { getAboutConfig, getPersonalConfig, getSiteConfig } from "@/lib/config";

const siteConfig = getSiteConfig();

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.domain}/about`,
  },
};

export default function AboutPage() {
  const aboutConfig = getAboutConfig();
  const personalConfig = getPersonalConfig();

  return <AboutContent config={aboutConfig} personal={personalConfig} />;
}
