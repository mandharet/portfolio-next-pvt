"use client";

import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { AboutConfig, PersonalConfig } from "@/types/config";

interface AboutContentProps {
  config: AboutConfig;
  personal: PersonalConfig;
}

export default function AboutContent({ config, personal }: AboutContentProps) {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Opening email app...");
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}`;
    }, 500);
  };

  return (
    <PageLayout>
      <div className="space-y-8 pb-30 pt-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" onClick={handleEmailClick}>
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={personal.social.github} target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={personal.social.linkedin} target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            {personal.resume.enabled && (
              <Button asChild variant="outline" size="sm">
                <Link href={personal.resume.url} target="_blank">
                  <FileText className="mr-2 h-4 w-4" /> Resume
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="prose dark:prose-invert max-w-none">
              {config.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {config.skills.map((category, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                <div className="space-y-2 text-muted-foreground">
                  {category.items.map((item, idx) => (
                    <p key={idx}>• {item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <div className="space-y-2 text-muted-foreground">
                {config.interests.map((interest, index) => (
                  <p key={index}>• {interest}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
