import image01 from "/template-images/template-image-1.jpg";
import image02 from "/template-images/template-image-2.jpg";
import image03 from "/template-images/template-image-3.jpg";
import image04 from "/template-images/template-image-4.jpg";
import image05 from "/template-images/template-image-5.jpg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const SmallGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <section ref={ref} className="flex h-auto min-h-[800px]">
      <div className="relative mx-5 flex h-[1100px] max-w-[1550px] items-center justify-between sm:mx-8 sm:h-[800px] xl:items-center 2xl:mx-auto">
        <div className="flex flex-col gap-4">
          <motion.div
            className="glass-effect glass-main z-10 mr-auto mb-6 inline-block rounded-2xl px-6 py-4 backdrop-blur-xl backdrop-saturate-200"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="animate-gradient gradient-text-blue text-glow-blue text-3xl leading-[1.2] font-bold md:text-5xl">
              Studying In University
            </h1>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue z-10 w-full rounded-2xl border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200 lg:p-8 xl:w-2/3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <span className="xs:text-lg space-y-6 text-base text-black lg:text-xl dark:text-white">
              In 2023, I enrolled in the bachelor's program in Computer Science
              at the National University "Lviv Polytechnic". I mastered the
              basics of programming, algorithms, data structures, and
              object-oriented programming (OOP).
            </span>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue z-10 w-full rounded-2xl border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200 lg:p-8 xl:w-2/3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <span className="xs:text-lg space-y-6 text-base text-black lg:text-xl dark:text-white">
              My studies transitioned to creating functional applications,
              working with databases, and learning computer networks. I
              developed self-education skills, learning to work effectively with
              documentation, tutorials, and AI tools for learning.
            </span>
          </motion.div>

          <motion.div
            className="glass-effect glass-main gradient-border-left-blue z-10 w-full rounded-2xl border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200 lg:p-8 xl:w-2/3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <span className="xs:text-lg space-y-6 text-base text-black lg:text-xl dark:text-white">
              I actively participate in university events including educational
              lectures, algorithm competitions, and career fairs. These events
              help me develop both technical and professional skills necessary
              for future career growth.
            </span>
          </motion.div>
        </div>

        <div className="absolute top-10 w-full xl:top-50">
          <div className="absolute top-auto -right-40 grid grid-cols-3 gap-8 xl:-top-40">
            <div className="flex h-full flex-col justify-end gap-8">
              <motion.figure
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover p-1!"
                  src={image01}
                  alt="Image 1"
                />
              </motion.figure>
            </div>

            <div className="relative -bottom-40 flex h-full flex-col gap-8">
              <motion.figure
                initial={{ opacity: 0, y: -50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
                }
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover p-1!"
                  src={image02}
                  alt="Image 2"
                />
              </motion.figure>

              <motion.figure
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover p-1!"
                  src={image03}
                  alt="Image 3"
                />
              </motion.figure>
            </div>

            <div className="flex h-full flex-col gap-8">
              <motion.figure
                initial={{ opacity: 0, y: -50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
                }
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover p-1!"
                  src={image04}
                  alt="Image 4"
                />
              </motion.figure>

              <motion.figure
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover object-left p-1!"
                  src={image05}
                  alt="Image 5"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallGallery;
