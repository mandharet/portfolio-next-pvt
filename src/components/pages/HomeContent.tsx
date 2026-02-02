"use client";

import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/shadcn/button";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { toast } from "sonner";
import { HomeConfig, PersonalConfig } from "@/types/config";

interface HomeContentProps {
  config: HomeConfig;
  personal: PersonalConfig;
}

export default function HomeContent({ config, personal }: HomeContentProps) {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Opening email app...");
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}`;
    }, 500);
  };

  return (
    <PageLayout>
      <div className="flex flex-col justify-center h-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {config.hero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            {config.hero.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {config.hero.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={config.cta.primary.link}>
              {config.cta.primary.text} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={config.cta.secondary.link}>
              {config.cta.secondary.text}
            </Link>
          </Button>
          {personal.resume.enabled && (
            <Button asChild variant="outline" size="lg">
              <Link href={personal.resume.url} target="_blank">
                <FileText className="mr-2 h-4 w-4" /> {config.cta.resume.text}
              </Link>
            </Button>
          )}
        </div>

        <div className="flex gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link
              href={personal.social.github}
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link
              href={personal.social.linkedin}
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleEmailClick}
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
