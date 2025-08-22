import { projects } from "../../utils/data-projects";
import ProjectItem from "../specials/project-item";

const ProjectsGrid = () => {
  return (
    <section className="mx-auto max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <ul className="mt-8 flex w-full flex-wrap justify-center gap-8">
          {projects.map(({ id, name, image, link, description, stack }) => (
            <ProjectItem
              key={id}
              name={name}
              image={image}
              link={link}
              description={description}
              stack={stack}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsGrid;
