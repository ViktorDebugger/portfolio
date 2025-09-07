import { stack } from "../../data/stack";
import StackItem from "../specials/stack-item";
import CategoriesMenu from "../specials/categories-menu";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "framer-motion";

const StackGrid = () => {
  const [category, setCategory] = useState("All");
  const [list, setList] = useState(stack);
  const [showAll, setShowAll] = useState(false);
  const startItems = 12;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleFilter = (name: string) => {
    setCategory(name);
    setShowAll(false);
    let newList = stack;
    if (name !== "All") {
      newList = newList.filter(({ categories }) => categories.includes(name));
    }
    setList(newList);
  };

  const displayedItems = showAll ? list : list.slice(0, startItems);
  const hasMoreItems = list.length > startItems;

  return (
    <section ref={ref} className="mx-auto max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <CategoriesMenu category={category} handler={handleFilter} />

        <motion.ul
          className="mt-8 flex w-full flex-wrap justify-center gap-2 px-0 md:gap-6 md:px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="w-[calc(25%-0.5rem)] md:w-[calc(20%-1rem)] lg:w-[calc(16.6666%-1rem)] xl:w-[calc(12.125%-1rem)] 2xl:w-[calc(10%-1rem)]"
            >
              <StackItem
                name={item.name}
                image={item.image}
                categories={item.categories}
                description={item.description}
                skills={item.skills}
                documentation={item.documentation}
                learningLevel={item.learningLevel}
              />
            </motion.div>
          ))}
        </motion.ul>

        {hasMoreItems && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="glass-effect-button glass-main mt-8 flex cursor-pointer items-center gap-2 rounded-2xl border-l-4! border-l-indigo-600! p-4 text-black shadow-2xl! shadow-indigo-900/80 backdrop-blur-xl backdrop-saturate-200 transition-all duration-300 ease-in-out hover:scale-105 dark:text-white"
          >
            <span className="text-lg font-semibold">
              {showAll
                ? "Show Less"
                : `Show More (${list.length - startItems})`}
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default StackGrid;
