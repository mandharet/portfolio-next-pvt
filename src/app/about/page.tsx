import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builder of Backend Systems",
  description:
    "I build scalable backend systems, APIs, and developer-focused tools using .NET, Go, and React.",
};
export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold m-0">About</h2>
      <a href="dev.tejasm@gmail.com" className="text-2xl font-semibold">dev.tejasm@gmail.com</a>
      <br/>
      <br/>
      <br/> 
      <div className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, eos aperiam unde voluptas nam quidem ipsa aut nihil mollitia impedit ut nobis quod quas saepe optio, obcaecati laborum porro, totam repudiandae hic a consectetur quia tempore. Exercitationem ab, accusamus accusantium quisquam doloribus corrupti nobis cupiditate, voluptas facere, perferendis quibusdam dolores?
      </div>
    </section>
  );
}
