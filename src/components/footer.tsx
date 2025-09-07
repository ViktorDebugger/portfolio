import GitHub from "./icons/socials/github";
import Instagram from "./icons/socials/instagram";
import LeetCode from "./icons/socials/leetcode";
import LinkedIn from "./icons/socials/linkedin";
import Telegram from "./icons/socials/telegram";
import { cn } from "../tools/utils";
import { useTheme } from "../context/theme-context";
import { motion } from "motion/react";

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
    <footer className="glass-effect-footer glass-main mx-2 max-w-[1440px] rounded-t-2xl px-6 py-3 backdrop-blur-xl backdrop-saturate-200 2xl:mx-auto">
      <div className="mt-4 flex flex-col-reverse items-center justify-between gap-6 md:mt-0 md:flex-row">
        <p className="text-center text-lg text-black md:text-left dark:text-white">
          &copy; {year()} Viktor Luka. All rights reserved.
        </p>
        <ul className="xs:gap-6 flex gap-4 md:gap-8">
          {icons.map(({ id, link, icon: Icon }) => (
            <motion.li
              key={id}
              className="group"
              whileHover={{
                scale: 1.1,
                rotate: id % 2 === 0 ? -15 : 15,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <a href={link} target="_blank">
                <Icon
                  className={cn(
                    "icon-colors-red size-10 rounded-xl transition-colors duration-300 ease-in-out",
                    theme,
                  )}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
