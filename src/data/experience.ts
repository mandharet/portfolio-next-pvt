export interface Experience {
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  date: string;
}

export const experiences: Experience[] = [
  {
    slug: "your-company-software-engineer",
    company: "Your Company",
    role: "Software Engineer",
    period: "2023 - Present",
    description: "Building scalable backend systems and APIs using .NET and Go.",
    technologies: [".NET", "Go", "React", "PostgreSQL", "Docker"],
    date: "2023-01-01",
  },
];
