import { Link } from "react-router-dom";
import GitHub from "./icons/socials/github";
import Instagram from "./icons/socials/instagram";
import LeetCode from "./icons/socials/leetcode";
import LinkedIn from "./icons/socials/linkedin";
import Telegram from "./icons/socials/telegram";

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

  return (
    <footer className="mx-auto w-full max-w-[1440px]">
      <div className="flex w-full items-center justify-between py-4">
        <p className="font-roboto text-gray-600">
          &copy; {year()} Your Company, Inc. All rights reserved.
        </p>
        <ul className="flex gap-8">
          {icons.map(({ id, link, icon: Icon }) => (
            <li key={id} className="group">
              <Link to={link}>
                <Icon className="size-7 text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-gray-950" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
