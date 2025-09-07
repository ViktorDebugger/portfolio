import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectItem from "../specials/project-item";

const ProjectsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="mx-auto max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <motion.ul
          className="mt-8 flex w-full flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="w-full max-w-[400px] flex-none md:w-[calc(50%-2rem)] xl:w-[calc(33.3%-2rem)]"
            >
              <ProjectItem
                name={project.name}
                image={project.image}
                link={project.link}
                description={project.description}
                stack={project.stack}
              />
            </motion.div>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectsGrid;
