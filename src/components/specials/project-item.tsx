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
    <li className="glass-effect-button glass-main w-full max-w-[400px] flex-none overflow-hidden rounded-2xl border-1! border-indigo-300! shadow-2xl! shadow-indigo-900/80 transition-all duration-300 ease-in-out hover:scale-105 md:w-[calc(50%-2rem)] xl:w-[calc(33.3%-2rem)]">
      <button
        onClick={() => setOpen(true)}
        className="relative h-full w-full cursor-pointer p-4 text-black md:p-8 dark:text-white"
      >
        <img className="h-auto w-full rounded-lg" src={image} alt={name} />
        <p className="mt-4 text-left text-2xl font-bold">{name}</p>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-end justify-center p-4 backdrop-blur-md md:items-center">
          <DialogPanel className="glass-effect glass-main gradient-border-left-blue absolute -bottom-10 max-h-[90vh] w-full rounded-2xl border-l-0 pb-32 text-black shadow-2xl! shadow-indigo-500 md:bottom-auto md:w-5/6 md:max-w-7xl md:pb-8 dark:text-white">
            <div className="absolute top-0 left-0 z-1 h-full w-full bg-black/30 dark:bg-black/50"></div>
            <div className="relative z-2 flex h-full max-h-[90vh] flex-col">
              <div className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-hide">
                <div className="space-y-4 p-4 sm:p-8">
                  <figure className="mx-auto mb-8 w-full overflow-hidden rounded-xl md:w-[420px] lg:w-[600px]">
                    <img className="h-auto w-full" src={image} alt={name} />
                  </figure>
                  <div className="flex flex-col justify-between gap-4 lg:flex-row">
                    <div className="w-full lg:w-6/10">
                      <DialogTitle className="mb-4 text-xl font-bold sm:text-2xl md:text-4xl">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {name}
                        </a>
                      </DialogTitle>
                      <Description className="text-sm font-normal md:text-xl">
                        {description}
                      </Description>
                    </div>
                    <div className="mt-4 w-full lg:w-[35%] mb-8 lg:mb-0">
                      <h1 className="mb-4 text-2xl font-bold">Stack</h1>
                      <ul className="grid grid-cols-2 gap-4">
                        {stack.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm md:text-xl"
                          >
                            <div className="size-2 md:size-3 rounded-full bg-black dark:bg-white"></div>
                            <p className="">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
