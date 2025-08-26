import blue from "../../assets/hero-images/blue-image.jpg";
import User from "../icons/user";

import GitHub from "../icons/socials/github";
import LinkedIn from "../icons/socials/linkedin";
import { useEffect, useRef } from "react";

import { heroStack } from "../../utils/data-hero";
import ArrowDownTray from "../icons/arrow-down-tray";
import { cn } from "../../utils/utils";
import { useTheme } from "../../context/theme-context";
import { useScroll } from "../../context/scroll-context";
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
];

const HeroSection = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollToSection } = useScroll();

  const { theme } = useTheme();

  useEffect(() => {
    let i = 0;
    let speed = 50;
    let timeout: NodeJS.Timeout;

    const typeWriter = (text: string) => {
      if (textRef.current) {
        textRef.current.textContent = text.slice(0, i + 1);
      }
      if (i < text.length - 1) {
        i++;
        timeout = setTimeout(typeWriter, speed, text);
      }
    };

    typeWriter("Hello! I am Viktor Luka. Welcome to my portfolio!");
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex h-auto w-full items-center justify-center">
      <div className="glass-effect glass-main 3xl:mx-0 mx-5 max-w-[1550px] rounded-2xl p-16 px-4 backdrop-blur-xl backdrop-saturate-200 sm:px-8 2xl:px-16">
        <h1 className="animate-gradient text-shadow-blue gradient-text-blue text-glow-blue xs:text-4xl mb-6 text-[28px] font-bold sm:text-5xl lg:text-6xl">
          FullStack Developer
        </h1>
        <div className="mb-4 h-[55px] w-full text-xl text-black md:w-[720px] md:text-2xl dark:text-white">
          <span ref={textRef}></span>
          <p className="animate-typewriter relative -bottom-0.5 inline-block h-6 w-0.5 bg-black dark:bg-white"></p>
        </div>
        <div className="flex flex-col-reverse justify-between gap-2 md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="mb-10 text-xl text-black lg:text-2xl dark:text-white">
              I am a Full-Stack developer with experience in building web
              applications from concept to production. I have experience working
              with popular frameworks, databases and cloud services to develop
              solutions that meet business requirements and contribute to its
              growth.
            </p>

            <ul className="grid grid-cols-4 gap-2 rounded-lg lg:gap-4 xl:grid-cols-8">
              {heroStack.map(({ id, name, image }) => (
                <li
                  key={id}
                  className="item-gradient-blue flex w-full items-center justify-center rounded-lg p-1 lg:size-20"
                >
                  <figure className="size-16">
                    <img src={image} alt={name} />
                  </figure>
                </li>
              ))}
            </ul>

            <div className="my-10 flex items-center gap-4 lg:gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className={cn(
                  "button-colors-blue flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 lg:px-8 lg:py-3",
                  theme,
                )}
              >
                <User className="size-4 sm:size-6" />
                <p className="text-md font-semibold lg:text-lg">About Me</p>
              </button>
              <a
                href="/Luka-Viktor.pdf"
                download
                className={cn(
                  "button-colors-blue flex items-center gap-2 rounded-lg px-4 py-2 lg:px-8 lg:py-3",
                  theme,
                )}
              >
                <ArrowDownTray className="size-4 sm:size-6" />
                <p className="text-md font-semibold lg:text-lg">Download CV</p>
              </a>
            </div>

            <ul className="mb-10 flex gap-10">
              {icons.map(({ id, link, icon: Icon }) => (
                <li
                  key={id}
                  className={cn("icon-colors-blue rounded-lg p-2", theme)}
                >
                  <a href={link} target="_blank">
                    <Icon className="size-10" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <figure className="mx-auto my-10 w-8/10 sm:w-6/10 md:my-0 md:w-1/2 lg:w-1/3">
            <img
              className="gradient-border-blue animate-gradient gradient-glow-bluemy-10 rounded-2xl object-cover p-2"
              src={blue}
              alt="Hero picture"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
