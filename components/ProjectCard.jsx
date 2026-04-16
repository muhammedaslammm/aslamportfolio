"use client";

import { ArrowSquareOut } from "phosphor-react";

const ProjectCard = ({ project, index }) => {
  return (
    <div className="flex flex-col gap-2 group">
      <div className="overflow-hidden rounded-[.4rem]">
        <img
          src={project.image}
          alt={`${project.title} Image`}
          className="h-[12rem] lg:h-[14rem] w-full object-cover rounded-[.2rem] lg:rounded-[.4rem] group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2 lg:gap-4 text-[.9rem] lg:text-[1rem]">
        <div className="font-medium text-[1rem] lg:text-[1.1rem]">
          {index + 1}. {project.title}
        </div>
        <div>{project.description}</div>
        <div className="flex items-center flex-wrap gap-1 mt-2">
          {project.tech_stack.map((tech, i) => (
            <div
              key={i}
              className="text-[.8rem] lg:text-[.9rem] bg-yellow-800/30 p-0.5"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              target="_blank"
              href={project.github}
              className="underline cursor-pointer hover:text-purple-400 flex items-center gap-1"
            >
              Github <ArrowSquareOut weight="bold" />
            </a>
          )}
          {project.public && (
            <a
              target="_blank"
              href={project.public}
              className="underline cursor-pointer hover:text-purple-400 flex items-center gap-1"
            >
              View Site <ArrowSquareOut weight="bold" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
