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
    <li className="w-[calc(12.5%-1.5rem)] flex-none rounded-xl border-2 border-gray-300 bg-gray-100 transition-colors duration-300 ease-in-out hover:bg-gray-200">
      <button
        onClick={() => setOpen(true)}
        className="group relative h-full w-full cursor-pointer p-4"
      >
        <img
          className="h-auto w-full rounded-xl opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
          src={image}
          alt={name}
        />
        <p className="font-roboto absolute top-1/2 left-1/2 w-32 -translate-x-1/2 -translate-y-1/2 text-lg! font-bold! text-gray-950! opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          {name}
        </p>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-5/6 space-y-4 rounded-lg border-2 border-gray-300 bg-white px-8 py-16">
            <div className="mb-12 flex items-center justify-between">
              <figure className="flex h-96 w-96 items-center justify-center rounded-2xl border-2 border-gray-300 bg-gray-200 p-4">
                <img
                  className="h-auto w-full rounded-2xl"
                  src={image}
                  alt={name}
                />
              </figure>
              <div className="w-6/10">
                <DialogTitle className="font-montserrat mb-4 text-4xl font-bold text-gray-900">
                  <a href={documentation} target="_blank">{name}</a>
                </DialogTitle>
                <ul className="mb-4 flex gap-2">
                  {categories.map((category) => (
                    <li>
                      <Badge category={category}>{category}</Badge>
                    </li>
                  ))}
                </ul>
                <Description className="mb-8 text-xl font-normal text-gray-600">
                  {description}
                </Description>
                <ul className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <li key={skill} className="flex gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                        <Check className="size-4 text-white" />
                      </div>
                      <p className="font-roboto">{skill}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="flex justify-between rounded-lg border border-gray-400 px-6 py-3">
              {learningStages.map(({ id, title }) => (
                <li
                  key={id}
                  className={`relative flex flex-1 items-center gap-3 ${id === learningStages.length ? "max-w-40" : ""}`}
                >
                  {id === learningLevel ? (
                    <>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-600 p-2">
                        <p className="font-roboto text-lg font-semibold text-indigo-600">
                          0{id}
                        </p>
                      </div>
                      <p className="font-roboto text-indigo-600 transition-colors duration-300 ease-in-out">
                        {title}
                      </p>
                      {id !== learningStages.length && (
                        <div className="absolute -top-[3.35px] right-10 h-13 w-13 -rotate-45 border-r border-b border-gray-400"></div>
                      )}
                    </>
                  ) : (
                    <>
                      {id > learningLevel ? (
                        <>
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-400 p-2">
                            <p className="font-roboto text-lg font-semibold text-gray-400">
                              0{id}
                            </p>
                          </div>
                          <p className="font-roboto text-gray-400 transition-colors duration-300 ease-in-out">
                            {title}
                          </p>
                          {id !== learningStages.length && (
                            <div className="absolute -top-[3.35px] right-10 h-13 w-13 -rotate-45 border-r border-b border-gray-400"></div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 p-2">
                            <Check className="size-6 text-white" />
                          </div>
                          <p className="font-roboto text-black transition-colors duration-300 ease-in-out">
                            {title}
                          </p>
                          {id !== learningStages.length && (
                            <div className="absolute -top-[3px] right-10 h-13 w-13 -rotate-45 border-r border-b border-gray-400"></div>
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
