import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

interface ProjectItemProps {
  name: string;
  image: string;
  link: string;
  description: string;
  stack: string[];
}

const ProjectItem = ({
  name,
  image,
  link,
  description,
  stack,
}: ProjectItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="glass-effect-button glass-main w-[calc(33.3%-2rem)] flex-none overflow-hidden rounded-2xl border-1! border-indigo-300! shadow-2xl! shadow-indigo-900/80 transition-all duration-300 ease-in-out hover:scale-105">
      <button
        onClick={() => setOpen(true)}
        className="group relative h-full w-full cursor-pointer p-8 text-black dark:text-white"
      >
        <img className="h-auto w-full rounded-lg" src={image} alt={name} />
        <p className="mt-4 text-left text-2xl font-bold">{name}</p>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-md">
          <DialogPanel className="glass-effect glass-main gradient-border-left-blue max-h-[90vh] w-5/6 max-w-7xl overflow-y-auto rounded-2xl border-l-0 shadow-2xl! shadow-indigo-500 text-black dark:text-white">
            <div className="space-y-4 p-8">
              <figure className="mx-auto mb-4 w-[800px] overflow-hidden rounded-xl">
                <img className="h-auto w-full" src={image} alt={name} />
              </figure>
              <div className="flex justify-between gap-8">
                <div className="w-[calc(60%-2rem)]">
                  <DialogTitle className="mb-4 text-4xl font-bold">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </DialogTitle>
                  <Description className="text-xl font-normal">
                    {description}
                  </Description>
                </div>
                <div className="mt-4 w-[calc(40%-2rem)]">
                  <h1 className="mb-4 text-2xl font-bold">Stack</h1>
                  <ul className="grid grid-cols-2 gap-4">
                    {stack.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-xl"
                      >
                        <div className="h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                        <p className="">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </li>
  );
};

export default ProjectItem;
