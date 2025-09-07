import image from "/template-images/red-image.jpg";
import Bolt from "../icons/bolt";
import BookOpen from "../icons/book-open";
import Check from "../icons/check";
import ArrowRightLeft from "../icons/arrow-right-left";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const list = [
  {
    id: 1,
    icon: Check,
    title: "Discipline.",
    description:
      "Ability to organize one's own time and effectively complete tasks, adhering to deadlines and priorities.",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Learning.",
    description:
      "Continuous development and acquisition of new knowledge in the field of computer science, modern technologies and practical skills.",
  },
  {
    id: 3,
    icon: ArrowRightLeft,
    title: "Flexability.",
    description:
      "Rapid adaptation to new conditions, technologies and project requirements to achieve better results.",
  },
  {
    id: 4,
    icon: Bolt,
    title: "Activity.",
    description:
      "Participation in academic and extracurricular initiatives, project work, and professional development.",
  },
];

const FeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      className="flex h-auto w-full items-center justify-center"
    >
      <div className="mx-5 flex max-w-[1550px] items-center justify-between gap-4 lg:mx-8">
        <motion.figure
          className="hidden w-6/10 xl:block xl:w-[40%]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <img
            className="gradient-border-red animate-gradient gradient-glow-red h-auto w-full rounded-2xl object-cover object-left p-2"
            src={image}
            alt="Feature image"
          />
        </motion.figure>
        <div className="w-full 2xl:w-5/10">
          <div className="flex flex-col gap-0 md:flex-row md:gap-6">
            <div className="flex flex-col gap-4">
              <motion.div
                className="glass-effect glass-main mr-auto inline-block rounded-2xl px-6 py-4"
                initial={{ opacity: 0, y: -30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
                }
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <h1 className="gradient-text-red animate-gradient text-glow-red text-3xl font-bold md:text-5xl">
                  About Me
                </h1>
              </motion.div>

              <motion.div
                className="glass-effect glass-main gradient-border-left-red w-full rounded-2xl border-l-0! p-8 backdrop-blur-xl backdrop-saturate-200"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="xs:text-lg text-base text-black lg:text-xl dark:text-white">
                  I am Luka Viktor, a 3rd year Computer Science student at Lviv
                  Polytechnic National University. I am passionate about
                  technology and constantly expanding my knowledge in the field.
                </span>
              </motion.div>

              <motion.div
                className="glass-effect glass-main gradient-border-left-red w-full rounded-2xl border-l-0! p-8 backdrop-blur-xl backdrop-saturate-200"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="xs:text-lg text-base text-black lg:text-xl dark:text-white">
                  Currently working as a Trainee Shopify Developer at Halwil,
                  specializing in modern e-commerce solutions. This role allows
                  me to gain practical experience in creating online stores for
                  businesses worldwide.
                </span>
              </motion.div>

              <motion.div
                className="glass-effect glass-main gradient-border-left-red w-full rounded-2xl border-l-0! p-8 backdrop-blur-xl backdrop-saturate-200"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="xs:text-lg text-base text-black lg:text-xl dark:text-white">
                  I develop fullstack projects using various technologies and
                  integrate third-party services for enhanced efficiency.
                  Through personal projects, I learn to build both client and
                  server components while improving project stability.
                </span>
              </motion.div>
            </div>

            <motion.figure
              className="mx-auto my-10 block max-w-8/10 sm:mb-10 sm:max-w-6/10 md:max-w-4/10 xl:hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img
                className="gradient-border-red animate-gradient gradient-glow-red h-auto w-full rounded-2xl object-cover object-left p-2"
                src={image}
                alt="Feature image"
              />
            </motion.figure>
          </div>
          <motion.div
            className="my-4 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            <div className="glass-effect glass-main inline-block rounded-2xl px-6 py-4">
              <h1 className="gradient-text-red animate-gradient text-glow-red text-center text-3xl font-bold">
                My main skills
              </h1>
            </div>
          </motion.div>
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          >
            {list.map(({ id, icon: Icon, title, description }, index) => (
              <motion.li
                key={id}
                className="glass-effect glass-main gradient-border-left-red flex items-start gap-2 rounded-2xl! border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.6 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="glass-effect glass-main rounded-lg p-2 text-rose-600 backdrop-blur-xl backdrop-saturate-200 sm:rounded-xl"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Icon className="relative -left-[1px] size-6 sm:size-8 md:-left-0" />
                </motion.div>

                <div className="w-full lg:w-9/10">
                  <p className="text-base text-black sm:text-lg lg:text-xl dark:text-white">
                    <span className="pr-2 font-bold">{title}</span>
                    <span>{description}</span>
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
