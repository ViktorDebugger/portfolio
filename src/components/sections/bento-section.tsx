import image01 from "/template-images/template-image-5.jpg";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const BentoSection = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section
      ref={ref}
      className="my-16 flex w-full items-center justify-center"
    >
      <div className="flex max-w-[1550px] flex-col justify-center px-4 md:px-8">
        <motion.div
          className="glass-effect glass-main mx-auto mb-6 inline-block rounded-2xl px-6 py-4"
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
          <h1 className="animate-gradient gradient-text-red text-glow-red xs:text-3xl text-center text-2xl leading-[1.2] font-bold sm:text-4xl md:text-5xl">
            My Learning Workflow And Tools
          </h1>
        </motion.div>

        <div className="frid-rows-4 grid w-full grid-cols-1 gap-5 text-left md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
          <motion.div
            className="glass-effect glass-main gradient-border-left-blue col-span-1 row-span-1 rounded-tl-4xl rounded-tr-4xl rounded-br-xl rounded-bl-xl border-l-0 p-8 backdrop-blur-xl backdrop-saturate-200 md:col-span-2 xl:col-span-1 xl:row-span-2 xl:rounded-tr-xl xl:rounded-bl-4xl"
            initial={
              isMobile
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 0, scale: 0.8, rotate: -5 }
            }
            animate={
              isMobile
                ? { opacity: 1, scale: 1, rotate: 0 }
                : isInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0.8, rotate: -5 }
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
            <figure className="w-full overflow-hidden rounded-2xl">
              <img
                className="h-[350px] w-full object-cover object-left xl:h-[600px]"
                src={image01}
                alt="Image 1"
              />
            </figure>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue col-span-1 row-span-1 row-start-2 flex flex-col gap-5 rounded-xl border-l-0 p-8 text-black backdrop-blur-xl backdrop-saturate-200 xl:col-start-2 xl:row-start-1 dark:text-white"
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
                : { duration: 0.6, delay: 0.8, ease: "easeOut" }
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
            <motion.h3
              className="text-2xl font-bold"
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
                  : { duration: 0.4, delay: 1.0, ease: "easeOut" }
              }
            >
              Documentation
            </motion.h3>
            <motion.p
              className="text-base sm:text-xl"
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
                  : { duration: 0.4, delay: 1.2, ease: "easeOut" }
              }
            >
              The main source of knowledge for me is official documentation,
              which allows me to work with up-to-date information and better
              understand the tools I use. Documentation also helps me develop
              the skill of finding solutions on my own.
            </motion.p>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-red col-span-1 row-span-1 row-start-3 hidden flex-col gap-5 rounded-xl rounded-tr-xl border-l-0 p-8 text-black backdrop-blur-xl backdrop-saturate-200 md:row-start-2 md:flex xl:col-start-3 xl:row-start-1 xl:rounded-tr-4xl dark:text-white"
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
                : { duration: 0.6, delay: 1.0, ease: "easeOut" }
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
            <motion.h3
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
            >
              Tutorials and real projects
            </motion.h3>
            <motion.p
              className="text-base sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
            >
              I actively use tutorials based on real projects, which gives me
              the opportunity to see the practical application of technologies
              and learn from examples from a real environment. This approach
              helps me consolidate knowledge faster and implement it in my own
              projects.
            </motion.p>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue col-span-1 row-span-1 row-start-3 flex flex-col gap-5 rounded-xl rounded-tr-xl border-l-0 p-8 text-black backdrop-blur-xl backdrop-saturate-200 md:row-start-2 md:hidden xl:col-start-3 xl:row-start-1 xl:rounded-tr-4xl dark:text-white"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <motion.h3
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
            >
              Tutorials and real projects
            </motion.h3>
            <motion.p
              className="text-base sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
            >
              I actively use tutorials based on real projects, which gives me
              the opportunity to see the practical application of technologies
              and learn from examples from a real environment. This approach
              helps me consolidate knowledge faster and implement it in my own
              projects.
            </motion.p>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue col-span-1 col-start-1 flex flex-col gap-5 rounded-xl rounded-br-4xl rounded-bl-4xl border-l-0 p-8 text-black backdrop-blur-xl backdrop-saturate-200 md:col-span-2 xl:col-start-2 xl:rounded-bl-xl dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <motion.h3
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
            >
              Artificial Intelligence
            </motion.h3>
            <motion.p
              className="text-base sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.6, ease: "easeOut" }}
            >
              I use AI in my teaching, particularly the Cursor environment,
              setting up context to get relevant data which makes teaching more
              flexible and accurate. This allows me to speed up the development
              process, understand complex technologies faster, and optimize
              workflows to make projects more modern and innovative.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
