import Bolt from "./icons/bolt";
import ThemeSwitch from "./specials/theme-switch";
import { useScroll } from "../context/scroll-context";
import { cn } from "../utils/utils";
import { useTheme } from "../context/theme-context"; // додайте імпорт

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
    section: "showcase",
  },
  {
    id: 5,
    name: "Contact",
    section: "contact",
  },
];

const Header = () => {
  const { scrollToSection } = useScroll();
  const { theme } = useTheme();

  return (
    <header className="flex justify-center">
      <div className="glass-effect-header glass-main fixed! top-0 z-30 w-full max-w-[1440px] rounded-b-2xl px-6 py-3">
        <div className="flex items-start justify-between">
          <button
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Bolt className="size-8" />
          </button>
          <nav>
            <ul className="flex items-center gap-16">
              {pages.map((page) => (
                <li key={page.id} className="group w-16 text-center">
                  <button onClick={() => scrollToSection(page.section)}>
                    <span
                      className={cn(
                        "header-nav-link cursor-pointer border-b-2 border-transparent text-xl",
                        theme
                      )}
                    >
                      {page.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex h-10 items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
