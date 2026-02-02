import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import PersonStructuredData from "@/components/jsonLD/PersonStructuredData";
import { getHomeConfig, getPersonalConfig, getSiteConfig } from "@/lib/config";

const siteConfig = getSiteConfig();

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function HomePage() {
  const homeConfig = getHomeConfig();
  const personalConfig = getPersonalConfig();

  return (
    <>
      <PersonStructuredData />
      <HomeContent config={homeConfig} personal={personalConfig} />
    </>
  );
}
