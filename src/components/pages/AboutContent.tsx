"use client";

import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function AboutContent() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Opening email app...");
    setTimeout(() => {
      window.location.href = "mailto:dev.tejasm@gmail.com";
    }, 500);
  };

  return (
    <PageLayout>
      <div className="space-y-8 py-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" onClick={handleEmailClick}>
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="https://github.com/yourusername" target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="https://linkedin.com/in/yourusername" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/resume.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" /> Resume
              </Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                I&apos;m a Software Engineer passionate about building scalable backend systems, 
                APIs, and developer tools. With expertise in .NET, Go, and React, I focus on 
                creating efficient and maintainable solutions.
              </p>
              <p>
                My approach combines technical excellence with a builder mindset, always 
                looking for ways to improve systems and deliver value.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• .NET & C#</p>
                <p>• Go</p>
                <p>• React & Next.js</p>
                <p>• System Design</p>
                <p>• API Development</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Distributed Systems</p>
                <p>• Performance Optimization</p>
                <p>• Developer Tools</p>
                <p>• Open Source</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
