import { Metadata } from "next";
import { getPersonalConfig, getSiteConfig } from "@/lib/config";

const siteConfig = getSiteConfig();
const personalConfig = getPersonalConfig();

export const metadata: Metadata = {
  title: personalConfig.resume.title,
  description: personalConfig.resume.description,
  alternates: {
    canonical: `${siteConfig.domain}/resume`,
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-26 pb-20 md:pb-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">
          {personalConfig.resume.title}
        </h1>
        <div className="w-full h-[calc(100vh-12rem)] border rounded-lg overflow-hidden">
          <iframe
            src={personalConfig.resume.url}
            className="w-full h-full"
            title={personalConfig.resume.title}
          />
        </div>
      </div>
    </div>
  );
}
