import Envelope from "../icons/envelope";
import MapPin from "../icons/map-pin";
import Phone from "../icons/phone";
import { useRef } from "react";
import { useMobile } from "../../context/mobile-context";
import { motion, useInView } from "motion/react";

const ContactSection = () => {
  const { isMobile } = useMobile();
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      className="mb-14 flex h-auto w-full items-center justify-center"
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
          className="animate-gradient text-shadow-red gradient-text-red text-glow-red xs:text-4xl mb-6 text-[28px] font-bold sm:text-5xl lg:text-6xl"
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
          Contact Me
        </motion.h1>

        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="w-full lg:w-1/2">
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
                  : { duration: 0.6, delay: 0.4, ease: "easeOut" }
              }
            >
              I am always open to new opportunities and collaborations. If you
              have any questions or want to work together, please contact me.
            </motion.p>

            <motion.div
              className="gradient-glow-red glass-effect glass-main gradient-border-left-red rounded-2xl border-l-0 p-8 backdrop-blur-xl backdrop-saturate-200"
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
                  : { duration: 0.6, delay: 0.6, ease: "easeOut" }
              }
              whileHover={
                isMobile
                  ? {}
                  : {
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }
              }
            >
              <ul className="space-y-6 text-black dark:text-white">
                <motion.li
                  className="flex items-center gap-4"
                  initial={
                    isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  animate={
                    isMobile
                      ? { opacity: 1, x: 0 }
                      : isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                  }
                  transition={
                    isMobile
                      ? { duration: 0 }
                      : { duration: 0.4, delay: 0.8, ease: "easeOut" }
                  }
                >
                  <MapPin className="size-8 shrink-0 text-rose-500" />
                  <p className="text-base sm:text-lg">Ukraine, Lviv</p>
                </motion.li>
                <motion.li
                  className="group flex items-center gap-4"
                  initial={
                    isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  animate={
                    isMobile
                      ? { opacity: 1, x: 0 }
                      : isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                  }
                  transition={
                    isMobile
                      ? { duration: 0 }
                      : { duration: 0.4, delay: 1.0, ease: "easeOut" }
                  }
                >
                  <Phone className="size-8 shrink-0 transition-colors duration-200 group-hover:text-rose-500" />
                  <a
                    href="tel:+00000000000"
                    className="text-base transition-colors duration-200 group-hover:text-rose-500 sm:text-lg"
                  >
                    +0 (000) 000-0000
                  </a>
                </motion.li>
                <motion.li
                  className="group flex items-center gap-4"
                  initial={
                    isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  animate={
                    isMobile
                      ? { opacity: 1, x: 0 }
                      : isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                  }
                  transition={
                    isMobile
                      ? { duration: 0 }
                      : { duration: 0.4, delay: 1.2, ease: "easeOut" }
                  }
                >
                  <Envelope className="size-8 shrink-0 transition-colors duration-200 group-hover:text-rose-500" />
                  <a
                    href="mailto:viktor.luka.dev@gmail.com"
                    className="text-base transition-colors duration-200 group-hover:text-rose-500 sm:text-lg"
                  >
                    viktor.luka.dev@gmail.com
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            animate={
              isMobile
                ? { opacity: 1, x: 0 }
                : isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
            }
            transition={
              isMobile
                ? { duration: 0 }
                : { duration: 0.6, delay: 0.8, ease: "easeOut" }
            }
          >
            <div className="gradient-glow-red glass-effect glass-main gradient-border-left-red h-full rounded-2xl border-l-0 p-8 backdrop-blur-xl backdrop-saturate-200">
              <h3 className="mb-6 text-xl font-bold text-black sm:text-2xl dark:text-white">
                Let's Work Together
              </h3>
              <p className="mb-6 text-lg text-black dark:text-white">
                I'm always excited to take on new projects and collaborate with
                amazing people. Whether you have a specific project in mind or
                just want to chat about possibilities, I'd love to hear from
                you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                  <span className="text-black dark:text-white">
                    Web Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                  <span className="text-black dark:text-white">
                    Mobile Applications
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                  <span className="text-black dark:text-white">
                    UI/UX Design
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                  <span className="text-black dark:text-white">Consulting</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
