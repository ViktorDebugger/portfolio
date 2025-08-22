import StackGrid from "../../components/sections/stack-grid";
import ProjectsGrid from "../../components/sections/projects-grid";
import CertificatesGrid from "../../components/sections/certificates-grid";
import HeadingSection from "../../components/sections/heading-section";
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
        <HeadingSection title="Stack" />
        <StackGrid />
      </div>
    ),
    projects: (
      <div>
        <HeadingSection title="Projects" />
        <ProjectsGrid />
      </div>
    ),
    certificates: (
      <div>
        <HeadingSection title="Certificates" />
        <CertificatesGrid />
      </div>
    ),
  };

  return (
    <div>
      <ul className="grid grid-cols-3 gap-6">
        {buttons.map(({ id, name, state }) => (
          <li key={id}>
            <button
              disabled={active === state}
              onClick={() => setActive(state)}
              className="h-48 w-full p-4 cursor-pointer"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>

      <div>{sectionComponents[active]}</div>
    </div>
  );
};

export default ShowcaseSection;
