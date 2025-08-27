import { learning } from "../../data/learning";
import ProjectItem from "../specials/project-item";

const LearningGrid = () => {
  return (
    <section className="mx-auto max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <ul className="mt-8 flex w-full flex-wrap justify-center gap-8">
          {learning.map((item) => (
            <ProjectItem
              key={item.id}
              name={item.name}
              image={item.image}
              link={item.link}
              description={item.description}
              stack={item.stack}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LearningGrid;
