import image01 from "/template-images/template-image-1.jpg";
import image02 from "/template-images/template-image-2.jpg";
import image03 from "/template-images/template-image-3.jpg";
import image04 from "/template-images/template-image-4.jpg";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const LargeGallery = () => {
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
      className="flex flex-col gap-8 overflow-hidden px-4 pt-0 pb-16 md:px-8 md:pt-16"
    >
      <div className="relative mx-auto flex max-w-[1550px] flex-col-reverse gap-6 lg:flex-row">
        <div className="flex w-full flex-col gap-4 lg:w-8/10">
          <motion.div
            className="glass-effect glass-main z-10 mr-auto mb-6 inline-block rounded-2xl px-6 py-4 backdrop-blur-xl backdrop-saturate-200"
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
            <h1 className="animate-gradient gradient-text-blue text-glow-blue text-3xl leading-[1.2] font-bold md:text-5xl">
              My Previous Work
            </h1>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue relative z-20 w-full rounded-2xl border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200 md:p-8 lg:w-7/10"
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
                : { duration: 0.6, delay: 0.4, ease: "easeOut" }
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
            <span className="space-y-6 text-xl text-black dark:text-white">
            I worked in Hallwil from summer to fall 2025, where I developed online stores for clients. This was my first job, which gave me practical experience in commercial activities and taught me how to work effectively in a team.
            </span>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue relative z-20 w-full rounded-2xl border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200 md:p-8 lg:w-7/10"
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
            <span className="space-y-6 text-xl text-black dark:text-white">
              I have gained valuable skills in correctly assessing tasks and
              allocating time, which allows me to meet deadlines. I have
              mastered the Git version control system and gained understanding
              of product development processes in a team environment.
            </span>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue relative z-20 w-full rounded-2xl border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200 md:p-8 lg:w-7/10"
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
            <span className="space-y-6 text-xl text-black dark:text-white">
            Working with developers, project managers, designers, testers, and team leaders has significantly improved my communication skills. I wasn't afraid to ask for help in difficult situations, which helps me find solutions faster and maintain the team's efficiency.
            </span>
          </motion.div>
        </div>

        <motion.figure
          className="relative -bottom-30 left-auto lg:absolute lg:bottom-0 lg:left-1/2"
          initial={
            isMobile
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 50, scale: 0.8 }
          }
          animate={
            isMobile
              ? { opacity: 1, x: 0, scale: 1 }
              : isInView
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 50, scale: 0.8 }
          }
          transition={
            isMobile
              ? { duration: 0 }
              : { duration: 0.8, delay: 0.4, ease: "easeOut" }
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
            className="gradient-border-blue animate-gradient gradient-glow-blue w-full rounded-2xl object-cover p-1 sm:w-6/10 lg:w-full"
            src={image01}
            alt="Image 1"
          />
        </motion.figure>
      </div>

      <div className="flex h-[400px] w-[1660px] items-end gap-8">
        <div className="flex items-start gap-8">
          <motion.figure
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            animate={
              isMobile
                ? { opacity: 1, y: 0 }
                : isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
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
                    scale: 1.05,
                    rotate: -2,
                    transition: { duration: 0.3 },
                  }
            }
          >
            <img
              className="gradient-border-blue gradient-glow-blue animate-gradient flex h-[300px] w-[500px] items-end rounded-2xl object-cover p-1"
              src={image02}
              alt="Image 2"
            />
          </motion.figure>

          <motion.figure
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            animate={
              isMobile
                ? { opacity: 1, y: 0 }
                : isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -50 }
            }
            transition={
              isMobile
                ? { duration: 0 }
                : { duration: 0.6, delay: 1.2, ease: "easeOut" }
            }
            whileHover={
              isMobile
                ? {}
                : {
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                  }
            }
          >
            <img
              className="gradient-border-blue animate-gradient gradient-glow-blue h-[400px] w-[700px] rounded-2xl object-cover p-1"
              src={image03}
              alt="Image 3"
            />
          </motion.figure>
        </div>

        <motion.figure
          initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          animate={
            isMobile
              ? { opacity: 1, x: 0 }
              : isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
          }
          transition={
            isMobile
              ? { duration: 0 }
              : { duration: 0.6, delay: 1.4, ease: "easeOut" }
          }
          whileHover={
            isMobile
              ? {}
              : {
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.3 },
                }
          }
        >
          <img
            className="gradient-border-blue animate-gradient gradient-glow-blue flex h-[300px] w-[500px] items-start rounded-2xl object-cover p-1"
            src={image04}
            alt="Image 4"
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default LargeGallery;
