import Bolt from "./icons/bolt";
import ThemeSwitch from "./specials/theme-switch";
import { useScroll } from "../context/scroll-context";

const pages = [
  {
    id: 1,
    name: "Home",
    section: "home",
  },
  {
    id: 2,
    name: "About",
    section: "about",
  },
  {
    id: 3,
    name: "Showcase",
    section: "showcase"
  },
  {
    id: 4,
    name: "CV",
    section: "cv",
  },
  {
    id: 5,
    name: "Contact",
    section: "contact",
  },
];

const Header = () => {
  const { scrollToSection, activeSection } = useScroll();
  return (
    <header className="mx-auto fixed bg-white z-100 w-full max-w-[1440px] border-b-2 border-b-gray-400 px-6 pt-2.5">
      <div className="flex items-start justify-between">
        <button className="cursor-pointer" onClick={() => scrollToSection("home")}>
          <Bolt className="size-8 text-indigo-600" />
        </button>
        <nav>
          <ul className="flex items-center gap-4">
            {pages.map((page) => (
              <li key={page.id} className="group">
                <button
                  className={`relative inline-flex w-22 cursor-pointer justify-center px-4 pt-1.5 pb-3 after:absolute after:-bottom-[1.6px] after:h-0.5 after:w-22 after:transition-colors after:duration-300 after:ease-in-out ${activeSection === page.section ? "after:bg-indigo-600" : "border-transparent group-hover:after:bg-indigo-800"}`}
                  onClick={() => scrollToSection(page.section)}
                >  
                  {activeSection === page.section ? (
                    <p className="font-roboto text-indigo-600">{page.name}</p>
                  ) : (
                    <p className="font-roboto text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-indigo-800!">
                      {page.name}
                    </p>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex h-10 items-center">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
