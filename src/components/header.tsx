import ThemeSwitch from "./specials/theme-switch";
import { useScroll } from "../context/scroll-context";
import { cn } from "../utils/utils";
import { useTheme } from "../context/theme-context";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Bars3 from "./icons/bars3";

import logoWhite from "/logo/logo-white.png";
import logoBlack from "/logo/logo-black.png";

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
    <header className="fixed! top-0 right-0 left-0 z-30 px-2">
      <div className="glass-effect-header glass-main backdrop-blur-xl backdrop-saturate-200 mx-auto max-w-[1440px] rounded-b-2xl px-6 py-3">
        <div className="flex w-full items-center justify-between">
          <button
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={theme === "dark" ? logoWhite : logoBlack}
              alt="Logo"
              className="size-8 md:size-10"
            />
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-center lg:gap-16">
              {pages.map(({ id, name, section }) => (
                <li key={id} className="group w-24 text-center">
                  <button onClick={() => scrollToSection(section)}>
                    <span
                      className={cn(
                        "header-nav-link cursor-pointer border-b-2 border-transparent text-xl",
                        theme,
                      )}
                    >
                      {name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-row-reverse items-center gap-8">
            <nav className="block md:hidden">
              <Menu>
                <MenuButton>
                  <Bars3 className="relative top-1 size-8 cursor-pointer text-black focus:outline-none md:size-10 dark:text-white" />
                </MenuButton>
                <MenuItems
                  anchor="bottom end"
                  className="glass-effect glass-main backdrop-blur-xl backdrop-saturate-200 z-20 mt-1 flex h-62 w-52 flex-col gap-4 rounded-2xl p-4 focus:outline-none"
                >
                  {pages.map(({ id, name, section }) => (
                    <MenuItem key={id}>
                      <button
                        className="block rounded-xl px-2 py-1 text-left text-2xl text-black dark:text-white"
                        onClick={() => scrollToSection(section)}
                      >
                        {name}
                      </button>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </nav>

            <div className="flex h-6 items-center md:h-10">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
