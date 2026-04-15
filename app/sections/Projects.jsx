import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

const Projects = () => {
  return (
    <section className="mt-8 flex flex-col gap-12 scroll-mt-26" id="projects">
      <div className="flex flex-col gap-4">
        <div className="font--heading text-center font-medium uppercase text-[1.4rem]">
          Projects
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} index={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
