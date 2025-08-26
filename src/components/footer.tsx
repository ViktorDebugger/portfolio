import GitHub from "./icons/socials/github";
import Instagram from "./icons/socials/instagram";
import LeetCode from "./icons/socials/leetcode";
import LinkedIn from "./icons/socials/linkedin";
import Telegram from "./icons/socials/telegram";
import { cn } from "../utils/utils";
import { useTheme } from "../context/theme-context";

const icons = [
  {
    id: 1,
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/viktor-luka-25b610364/",
  },
  {
    id: 2,
    icon: GitHub,
    link: "https://github.com/ViktorDebugger",
  },
  {
    id: 3,
    icon: Telegram,
    link: "https://t.me//Luka_Victor",
  },
  {
    id: 4,
    icon: Instagram,
    link: "https://www.instagram.com/viktor_dfdx/",
  },
  {
    id: 5,
    icon: LeetCode,
    link: "https://leetcode.com/u/Viktor_Luka/",
  },
];

const Footer = () => {
  const year = () => new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="glass-effect-footer glass-main mx-4 2xl:mx-auto max-w-[1440px] rounded-t-2xl px-6 py-3">
      <div className="flex items-center justify-between gap-6 flex-col-reverse md:flex-row mt-4 md:mt-0">
        <p className="text-lg text-center md:text-left text-black dark:text-white">
          &copy; {year()} Viktor Luka. All rights reserved.
        </p>
        <ul className="flex gap-4 xs:gap-6 md:gap-8">
          {icons.map(({ id, link, icon: Icon }) => (
            <li key={id} className="group">
              <a href={link} target="_blank">
                <Icon
                  className={cn(
                    "icon-colors-red size-10 rounded-xl transition-colors duration-300 ease-in-out",
                    theme,
                  )}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
