type Project = {
    title: string;
    description: string;
    tech: string[];
  };
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="border rounded-lg p-6">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <p className="text-sm text-gray-500 mt-4">
          {project.tech.join(" • ")}
        </p>
      </div>
    );
  }
  