import { projects } from "../../data/projects";
import ProjectItem from "../specials/project-item";

const ProjectsGrid = () => {
  return (
    <section className="mx-auto max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <ul className="mt-8 flex w-full flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              name={project.name}
              image={project.image}
              link={project.link}
              description={project.description}
              stack={project.stack}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsGrid;
