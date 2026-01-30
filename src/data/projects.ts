export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  paper?: string;
  date: string;
}

export const projects: Project[] = [
  {
    slug: "http-interceptor-platform",
    title: "HTTP Interceptor Platform",
    description: "A Charles Proxy–like tool to intercept and modify HTTP requests in real time.",
    tech: ["Go", "React", "Proxy", "System Design"],
    date: "2024-01-15",
    github: "https://github.com/example/http-interceptor",
  },
];
