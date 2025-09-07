import StackGrid from "../../components/sections/stack-grid";
import ProjectsGrid from "../../components/sections/projects-grid";
import CertificatesGrid from "../../components/sections/certificates-grid";
import { useState, useRef, useEffect } from "react";
import LearningGrid from "./learning-grid";
import { motion, useInView } from "motion/react";

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
  {
    id: 4,
    name: "Learning",
    state: "learning",
  },
];

const ShowcaseSection = () => {
  const [active, setActive] = useState("stack");
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          ),
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sectionComponents: Record<string, React.ReactNode> = {
    stack: (
      <div>
        <StackGrid />
      </div>
    ),
    projects: (
      <div>
        <ProjectsGrid />
      </div>
    ),
    learning: (
      <div>
        <LearningGrid />
      </div>
    ),
    certificates: (
      <div>
        <CertificatesGrid />
      </div>
    ),
  };

  return (
    <section ref={ref} className="mx-auto min-h-screen max-w-[1550px]">
      <div className="flex justify-center">
        <motion.div
          className="glass-effect glass-main mx-auto mb-6 inline-block rounded-2xl px-6 py-4"
          initial={
            isMobile
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          animate={
            isMobile
              ? { opacity: 1, y: 0, scale: 1 }
              : isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 30, scale: 0.9 }
          }
          transition={
            isMobile
              ? { duration: 0 }
              : { duration: 0.8, delay: 0.2, ease: "easeOut" }
          }
        >
          <h1 className="animate-gradient gradient-text-blue text-glow-bluetext-center text-3xl leading-[1.2] font-bold md:text-5xl">
            Portfolio Gallery
          </h1>
        </motion.div>
      </div>

      <motion.ul
        className="grid grid-cols-1 gap-2 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-10"
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        animate={
          isMobile ? { opacity: 1 } : isInView ? { opacity: 1 } : { opacity: 0 }
        }
        transition={
          isMobile
            ? { duration: 0 }
            : { duration: 0.6, delay: 0.4, ease: "easeOut" }
        }
      >
        {buttons.map(({ id, name, state }) => (
          <motion.li
            key={id}
            className="flex justify-center"
            initial={
              isMobile
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 30, scale: 0.8 }
            }
            animate={
              isMobile
                ? { opacity: 1, y: 0, scale: 1 }
                : isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.8 }
            }
            transition={
              isMobile
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    delay: 0.6 + id * 0.1,
                    ease: "easeOut",
                  }
            }
          >
            <button
              disabled={active === state}
              onClick={() => setActive(state)}
              className="glass-effect-button glass-main h-24 w-full cursor-pointer overflow-hidden rounded-2xl p-4 backdrop-blur-xl backdrop-saturate-200 transition-all duration-300 ease-in-out hover:scale-105 lg:h-48"
            >
              <span className="text-xl font-bold text-black lg:text-3xl dark:text-white">
                {name}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="px-4 md:px-8"
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        animate={
          isMobile
            ? { opacity: 1, y: 0 }
            : isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
        }
        transition={
          isMobile
            ? { duration: 0 }
            : { duration: 0.8, delay: 1.0, ease: "easeOut" }
        }
      >
        {sectionComponents[active]}
      </motion.div>
    </section>
  );
};

export default ShowcaseSection;
