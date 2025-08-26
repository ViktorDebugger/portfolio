import StackGrid from "../../components/sections/stack-grid";
import ProjectsGrid from "../../components/sections/projects-grid";
import CertificatesGrid from "../../components/sections/certificates-grid";
import { useState } from "react";
import LearningGrid from "./learning-grid";

const buttons = [
  {
    id: 1,
    name: "Stack",
    state: "stack",
  },
  {
    id: 2,
    name: "Projects",
    state: "projects",
  },
  {
    id: 3,
    name: "Certificates",
    state: "certificates",
  },
  {
    id: 4,
    name: "Learning",
    state: "learning",
  },
];

const ShowcaseSection = () => {
  const [active, setActive] = useState("stack");

  const sectionComponents: Record<string, React.ReactNode> = {
    stack: (
      <div>
        <StackGrid />
      </div>
    ),
    projects: (
      <div>
        <ProjectsGrid />
      </div>
    ),
    learning: (
      <div>
        <LearningGrid />
      </div>
    ),
    certificates: (
      <div>
        <CertificatesGrid />
      </div>
    ),
  };

  return (
    <section className="mx-auto max-w-[1550px]">
      <h1 className="animate-gradient gradient-text-blue text-glow-blue mb-6 px-4 text-center text-4xl leading-[1.2] font-bold md:px-8 lg:text-6xl">
        Portfolio Gallery
      </h1>
      <ul className="grid grid-cols-1 gap-2 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-10">
        {buttons.map(({ id, name, state }) => (
          <li key={id} className="flex justify-center">
            <button
              disabled={active === state}
              onClick={() => setActive(state)}
              className="glass-effect-button glass-main h-24 w-full cursor-pointer overflow-hidden rounded-2xl p-4 backdrop-blur-xl backdrop-saturate-200 transition-all duration-300 ease-in-out hover:scale-105 lg:h-48"
            >
              <span className="text-xl font-bold text-black lg:text-3xl dark:text-white">
                {name}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="px-4 md:px-8">{sectionComponents[active]}</div>
    </section>
  );
};

export default ShowcaseSection;
