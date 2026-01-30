"use client";

import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/shadcn/button";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { toast } from "sonner";

export default function HomeContent() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Opening email app...");
    setTimeout(() => {
      window.location.href = "mailto:dev.tejasm@gmail.com";
    }, 500);
  };

  return (
    <PageLayout>
      <div className="flex flex-col justify-center h-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Tejas Mandhare
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Software Engineer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building scalable backend systems, APIs, and developer tools using .NET, Go, and React.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">About Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf" target="_blank">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Link>
          </Button>
        </div>

        <div className="flex gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={handleEmailClick} aria-label="Email">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
