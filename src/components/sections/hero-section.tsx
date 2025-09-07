import blue from "/template-images/blue-image.jpg";
import User from "../icons/user";

import GitHub from "../icons/socials/github";
import LinkedIn from "../icons/socials/linkedin";
import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

import { heroStack } from "../../data/hero";
import ArrowDownTray from "../icons/arrow-down-tray";
import { cn } from "../../tools/utils";
import { useTheme } from "../../context/theme-context";
import { useScroll } from "../../context/scroll-context";
import { useMobile } from "../../context/mobile-context";
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
  const ref = useRef(null);
  const { scrollToSection } = useScroll();
  const { theme } = useTheme();
  const { isMobile } = useMobile();

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

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
    <section
      ref={ref}
      className="flex h-auto w-full items-center justify-center"
    >
      <motion.div
        className="glass-effect glass-main 3xl:mx-0 mx-5 max-w-[1550px] rounded-2xl p-16 px-4 backdrop-blur-xl backdrop-saturate-200 sm:px-8 2xl:px-16"
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        animate={
          isMobile
            ? { opacity: 1, y: 0 }
            : isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
        }
        transition={
          isMobile ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }
        }
      >
        <motion.h1
          className="animate-gradient text-shadow-blue gradient-text-blue text-glow-blue xs:text-4xl mb-6 text-[28px] font-bold sm:text-5xl lg:text-6xl"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          animate={
            isMobile
              ? { opacity: 1, y: 0 }
              : isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -30 }
          }
          transition={
            isMobile
              ? { duration: 0 }
              : { duration: 0.6, delay: 0.2, ease: "easeOut" }
          }
        >
          FullStack Developer
        </motion.h1>
        <div className="mb-4 h-[55px] w-full text-xl text-black md:w-[720px] md:text-2xl dark:text-white">
          <span ref={textRef}></span>
          <p className="animate-typewriter relative -bottom-0.5 inline-block h-6 w-0.5 bg-black dark:bg-white"></p>
        </div>
        <div className="flex flex-col-reverse justify-between gap-2 md:flex-row">
          <div className="w-full md:w-1/2">
            <motion.p
              className="mb-10 text-xl text-black lg:text-2xl dark:text-white"
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
              }
              transition={
                isMobile
                  ? { duration: 0 }
                  : { duration: 0.6, delay: 0.8, ease: "easeOut" }
              }
            >
              I am a Full-Stack developer with experience in building web
              applications from concept to production. I have experience working
              with popular frameworks, databases and cloud services to develop
              solutions that meet business requirements and contribute to its
              growth.
            </motion.p>

            <ul className="grid grid-cols-4 gap-2 rounded-lg lg:gap-4 xl:grid-cols-8">
              {heroStack.map((item, index) => (
                <motion.li
                  key={item.id}
                  className="item-gradient-blue flex w-full items-center justify-center rounded-lg p-1 lg:size-20"
                  initial={
                    isMobile
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  animate={
                    isMobile
                      ? { opacity: 1, scale: 1 }
                      : isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                  }
                  transition={
                    isMobile
                      ? { duration: 0 }
                      : {
                          duration: 0.3,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }
                  }
                  whileHover={
                    isMobile
                      ? {}
                      : {
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 },
                        }
                  }
                  style={{
                    scale: 1,
                    rotate: 0,
                  }}
                >
                  <figure className="size-16">
                    {item.imageDark ? (
                      <>
                        <img
                          className="block dark:hidden"
                          src={item.imageLight}
                          alt={item.name}
                        />
                        <img
                          className="hidden dark:block"
                          src={item.imageDark}
                          alt={item.name}
                        />
                      </>
                    ) : (
                      <img src={item.imageLight} alt={item.name} />
                    )}
                  </figure>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="my-10 flex flex-col sm:flex-row items-center gap-4 lg:gap-8"
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
              }
              transition={
                isMobile
                  ? { duration: 0 }
                  : { duration: 0.3, delay: 1, ease: "easeOut" }
              }
            >
              <motion.button
                onClick={() => scrollToSection("about")}
                className={cn(
                  "button-colors-blue w-full sm:w-auto justify-center flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 lg:px-8 lg:py-3",
                  theme,
                )}
                whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
                whileTap={isMobile ? {} : { scale: 0.95 }}
                transition={isMobile ? { duration: 0 } : { duration: 0.2 }}
              >
                <User className="size-4 sm:size-6" />
                <p className="text-md font-semibold lg:text-lg">About Me</p>
              </motion.button>
              <motion.a
                href="/Luka-Viktor.pdf"
                download
                className={cn(
                  "button-colors-blue flex w-full sm:w-auto justify-center items-center gap-2 rounded-lg px-4 py-2 lg:px-8 lg:py-3",
                  theme,
                )}
                whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
                whileTap={isMobile ? {} : { scale: 0.95 }}
                transition={isMobile ? { duration: 0 } : { duration: 0.2 }}
              >
                <ArrowDownTray className="size-4 sm:size-6" />
                <p className="text-md font-semibold lg:text-lg">Download CV</p>
              </motion.a>
            </motion.div>

            <motion.ul
              className="mb-10 flex gap-10"
              initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              animate={
                isMobile
                  ? { opacity: 1, x: 0 }
                  : isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -30 }
              }
              transition={
                isMobile
                  ? { duration: 0 }
                  : { duration: 0.6, delay: 1.6, ease: "easeOut" }
              }
            >
              {icons.map(({ id, link, icon: Icon }, index) => (
                <motion.li
                  key={id}
                  className={cn("icon-colors-blue rounded-lg p-2", theme)}
                  initial={
                    isMobile
                      ? { opacity: 1, scale: 1, rotate: 0 }
                      : { opacity: 0, scale: 0, rotate: -90 }
                  }
                  animate={
                    isMobile
                      ? { opacity: 1, scale: 1, rotate: 0 }
                      : isInView
                        ? { opacity: 1, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: 0, rotate: -90 }
                  }
                  transition={
                    isMobile
                      ? { duration: 0 }
                      : {
                          duration: 0.4,
                          delay: 0.2 + index * 0.2,
                          ease: "easeOut",
                        }
                  }
                  whileHover={
                    isMobile
                      ? {}
                      : {
                          scale: 1.2,
                          rotate: -10,
                          transition: { duration: 0.2 },
                        }
                  }
                >
                  <a href={link} target="_blank">
                    <Icon className="size-10" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.figure
            className="mx-auto my-10 w-8/10 sm:w-6/10 md:my-0 md:w-1/2 lg:w-1/3"
            initial={
              isMobile
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 50, scale: 0.8 }
            }
            animate={
              isMobile
                ? { opacity: 1, y: 0, scale: 1 }
                : isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.8 }
            }
            transition={
              isMobile
                ? { duration: 0 }
                : { duration: 0.8, delay: 0.8, ease: "easeOut" }
            }
            whileHover={
              isMobile
                ? {}
                : {
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }
            }
          >
            <img
              className="gradient-border-blue animate-gradient gradient-glow-blue my-10 rounded-2xl object-cover p-2"
              src={blue}
              alt="Hero picture"
            />
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
