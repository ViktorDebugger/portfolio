import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Check from "../icons/check";
import Badge from "./badge";
import { cn } from "../../utils/utils";

export const learningStages = [
  {
    id: 1,
    title: "Basics",
  },
  {
    id: 2,
    title: "Practice",
  },
  {
    id: 3,
    title: "Integration",
  },
  {
    id: 4,
    title: "Optimization",
  },
  {
    id: 5,
    title: "Mastery",
  },
];

interface StackItemProps {
  name: string;
  image: string;
  categories: string[];
  description: string;
  skills: string[];
  documentation: string;
  learningLevel: number;
}

const StackItem = ({
  name,
  image,
  categories,
  description,
  skills,
  documentation,
  learningLevel,
}: StackItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="glass-effect-button glass-main w-[calc(25%-0.5rem)] overflow-hidden rounded-xl border-1! border-indigo-300! shadow-2xl! shadow-indigo-900/80 backdrop-blur-xl backdrop-saturate-200 transition-all duration-300 ease-in-out hover:scale-105 md:w-[calc(20%-1rem)] md:rounded-2xl lg:w-[calc(16.6666%-1rem)] xl:w-[calc(12.125%-1rem)] 2xl:w-[calc(10%-1rem)]">
      <button
        onClick={() => setOpen(true)}
        className="group relative h-full w-full cursor-pointer p-1 text-black md:p-4 dark:bg-white/40 dark:text-white md:dark:bg-white/10"
      >
        <figure className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-30">
          <img className="h-auto w-full" src={image} alt={name} />
        </figure>
        <p className="absolute top-1/2 left-1/2 w-32 -translate-x-1/2 -translate-y-1/2 text-lg! font-bold! opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          {name}
        </p>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-end justify-center p-4 backdrop-blur-2xl md:items-center">
          <DialogPanel className="glass-effect glass-main gradient-border-left-blue absolute -bottom-10 max-h-[90vh] w-full space-y-4 rounded-2xl border-2 border-l-0! border-black bg-white/40! text-black shadow-2xl! shadow-indigo-500 backdrop-blur-xl backdrop-saturate-200 md:w-5/6 dark:bg-black/40! dark:text-white">
            <div className="absolute top-0 left-0 z-1 h-full w-full bg-black/30 dark:bg-black/20"></div>
            <div className="relative z-2 flex h-full max-h-[90vh] flex-col">
              <div className="scrollbar-hide flex-1 overflow-x-hidden overflow-y-auto p-4 pb-16 md:p-0 md:pb-8">
                <div className="mb-12 flex flex-col items-center justify-between gap-8 px-2 py-4 sm:px-8 md:px-8 md:py-8 lg:flex-row lg:gap-4">
                  <figure className="gradient-border-left-blue flex size-52 items-center justify-center rounded-2xl bg-black/20 p-4 sm:size-72 xl:size-80 2xl:size-96 dark:bg-white/20">
                    <img
                      className="h-auto w-full rounded-2xl"
                      src={image}
                      alt={name}
                    />
                  </figure>
                  <div className="w-full lg:w-[65%]">
                    <DialogTitle className="mb-4 text-3xl font-bold sm:text-4xl">
                      <a href={documentation} target="_blank">
                        {name}
                      </a>
                    </DialogTitle>
                    <ul className="mb-4 flex gap-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <Badge category={category}>{category}</Badge>
                        </li>
                      ))}
                    </ul>
                    <Description className="text-sm font-normal md:text-xl">
                      {description}
                    </Description>
                    <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {skills.map((skill) => (
                        <li key={skill} className="flex gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white">
                            <Check className="size-4 text-white dark:text-black" />
                          </div>
                          <p>{skill}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className="flex flex-col justify-between gap-4 overflow-hidden rounded-lg border-0 border-black bg-transparent mx-0 my-3 md:mx-6 px-0 py-3 md:px-6 lg:flex-row lg:gap-4 lg:bg-black/10 2xl:border dark:border-white lg:dark:bg-white/10">
                  {learningStages.map(({ id, title }) => (
                    <li
                      key={id}
                      className={cn(
                        "relative flex w-full flex-1 items-center gap-3 rounded-lg bg-black/10 p-2 lg:bg-transparent lg:p-0 dark:bg-white/10 lg:dark:bg-transparent",
                        id === learningStages.length &&
                          "max-w-full lg:max-w-40",
                      )}
                    >
                      {id === learningLevel ? (
                        <>
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-600 p-2">
                            <p className="text-lg font-semibold text-indigo-600">
                              0{id}
                            </p>
                          </div>
                          <p className="text-indigo-600 transition-colors duration-300 ease-in-out">
                            {title}
                          </p>
                        </>
                      ) : (
                        <>
                          {id > learningLevel ? (
                            <>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black p-2 text-black dark:border-white dark:text-white">
                                <p className="text-lg font-semibold">0{id}</p>
                              </div>
                              <p className="text-black transition-colors duration-300 ease-in-out dark:text-white">
                                {title}
                              </p>
                            </>
                          ) : (
                            <>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 p-2">
                                <Check className="size-6 text-white" />
                              </div>
                              <p className="text-black transition-colors duration-300 ease-in-out dark:text-white">
                                {title}
                              </p>
                            </>
                          )}
                        </>
                      )}
                      {id !== learningStages.length && (
                        <div className="absolute right-10 hidden h-13 w-13 -rotate-45 border-r border-b border-black 2xl:block dark:border-white"></div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </li>
  );
};

export default StackItem;
