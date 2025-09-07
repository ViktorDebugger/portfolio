import templateImage from "/template-images/template-image-6.jpg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const StatsSection = () => {
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
      <motion.div
        className="gradient-glow-blue relative mx-4 h-auto max-w-[1550px] overflow-hidden rounded-4xl p-8 md:mx-8 lg:h-[720px]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-indigo-700/30 to-purple-700/30"></div>
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover blur-xs"
          src={templateImage}
          alt="Stats image"
        />
        <div className="relative z-20 flex h-full flex-col justify-center p-0 2xl:p-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="xs:text-xl mb-6 text-lg font-bold text-white sm:text-3xl lg:text-5xl 2xl:text-6xl">
              My Experience And Statistics
            </h1>
            <p className="mb-6 w-full text-lg text-white sm:text-xl lg:text-2xl 2xl:w-7/10">
              Here you can see my experience and statistics. I have worked with
              many technologies and frameworks. I have a lot of experience in
              creating web applications.
            </p>
          </motion.div>
          <motion.ul
            className="relative z-20 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.li
              className="border-l border-gray-300 px-2 py-1 xl:px-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <h2 className="3xl:text-5xl mb-4 text-2xl font-bold text-white lg:text-3xl xl:text-5xl">
                2
              </h2>
              <p className="text-base text-gray-200 md:text-lg lg:text-xl 2xl:text-2xl">
                Years of experience in IT
              </p>
            </motion.li>
            <motion.li
              className="border-l border-gray-300 px-2 py-1 xl:px-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <h2 className="3xl:text-5xl mb-4 text-2xl font-bold text-white lg:text-3xl xl:text-5xl">
                2
              </h2>
              <p className="text-base text-gray-200 md:text-lg lg:text-xl 2xl:text-2xl">
                Created projects
              </p>
            </motion.li>
            <motion.li
              className="border-l border-gray-300 px-2 py-1 xl:px-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              <h2 className="3xl:text-5xl mb-4 text-2xl font-bold text-white lg:text-3xl xl:text-5xl">
                2
              </h2>
              <p className="text-base text-gray-200 md:text-lg lg:text-xl 2xl:text-2xl">
                Months of commercial experience in web development
              </p>
            </motion.li>
            <motion.li
              className="border-l border-gray-300 px-2 py-1 xl:px-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              <h2 className="3xl:text-5xl mb-4 text-2xl font-bold text-white lg:text-3xl xl:text-5xl">
                6
              </h2>
              <p className="text-base text-gray-200 md:text-lg lg:text-xl 2xl:text-2xl">
                Practical projects
              </p>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
