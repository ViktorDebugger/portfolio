import StackGrid from "../../components/sections/stack-grid";
import ProjectsGrid from "../../components/sections/projects-grid";
import CertificatesGrid from "../../components/sections/certificates-grid";
import { useState } from "react";

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
    certificates: (
      <div>
        <CertificatesGrid />
      </div>
    ),
  };

  return (
    <section className="mx-auto max-w-[1550px]">
      <h1 className="animate-gradient gradient-text-blue text-glow-blue mb-6 text-center text-6xl font-bold">
        Portfolio Gallery
      </h1>
      <ul className="grid grid-cols-3 gap-10">
        {buttons.map(({ id, name, state }) => (
          <li key={id}>
            <button
              disabled={active === state}
              onClick={() => setActive(state)}
              className="glass-effect-button text-black dark:text-white glass-main h-48 w-full cursor-pointer overflow-hidden rounded-2xl p-4 text-3xl font-bold transition-all duration-300 ease-in-out hover:scale-105"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>

      <div>{sectionComponents[active]}</div>
    </section>
  );
};

export default ShowcaseSection;
