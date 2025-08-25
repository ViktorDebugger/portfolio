import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Check from "../icons/check";
import Badge from "./badge";

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
    <li className="glass-effect-button glass-main w-[calc(12.5%-1.5rem)] overflow-hidden rounded-2xl border-1! border-indigo-300! shadow-2xl! shadow-indigo-900/80 transition-all duration-300 ease-in-out hover:scale-105">
      <button
        onClick={() => setOpen(true)}
        className="group relative h-full w-full cursor-pointer p-4 text-black dark:text-white dark:bg-white/10"
      >
        <img
          className="h-auto w-full rounded-xl opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-30"
          src={image}
          alt={name}
        />
        <p className="absolute top-1/2 left-1/2 w-32 -translate-x-1/2 -translate-y-1/2 text-lg! font-bold! opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          {name}
        </p>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-2xl">
          <DialogPanel className="glass-effect glass-main gradient-border-left-blue w-5/6 space-y-4 rounded-2xl border-2 border-l-0! border-black bg-white/40! px-8 py-16 text-black shadow-2xl! shadow-indigo-500 dark:bg-black/40! dark:text-white">
            <div className="mb-12 flex items-center justify-between">
              <figure className="gradient-border-left-blue flex h-96 w-96 items-center justify-center rounded-2xl bg-black/20 p-4 dark:bg-white/20">
                <img
                  className="h-auto w-full rounded-2xl"
                  src={image}
                  alt={name}
                />
              </figure>
              <div className="w-6/10">
                <DialogTitle className="mb-4 text-4xl font-bold">
                  <a href={documentation} target="_blank">
                    {name}
                  </a>
                </DialogTitle>
                <ul className="mb-4 flex gap-2">
                  {categories.map((category) => (
                    <li>
                      <Badge category={category}>{category}</Badge>
                    </li>
                  ))}
                </ul>
                <Description className="mb-8 text-xl font-normal">
                  {description}
                </Description>
                <ul className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <li key={skill} className="flex gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black dark:bg-white">
                        <Check className="size-4 text-white dark:text-black" />
                      </div>
                      <p className="">{skill}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="flex justify-between rounded-lg border border-black px-6 py-3 dark:border-white">
              {learningStages.map(({ id, title }) => (
                <li
                  key={id}
                  className={`relative flex flex-1 items-center gap-3 ${id === learningStages.length ? "max-w-40" : ""}`}
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
                      {id !== learningStages.length && (
                        <div className="absolute -top-[3.35px] right-10 h-13 w-13 -rotate-45 border-r border-b border-black dark:border-white"></div>
                      )}
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
                          {id !== learningStages.length && (
                            <div className="absolute -top-[3.35px] right-10 h-13 w-13 -rotate-45 border-r border-b  dark:border-white border-black"></div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 p-2">
                            <Check className="size-6 text-white" />
                          </div>
                          <p className="text-black transition-colors duration-300 ease-in-out dark:text-white">
                            {title}
                          </p>
                          {id !== learningStages.length && (
                            <div className="absolute -top-[3px] right-10 h-13 w-13 -rotate-45 border-r border-b border-black dark:border-white"></div>
                          )}
                        </>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </DialogPanel>
        </div>
      </Dialog>
    </li>
  );
};

export default StackItem;
