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
    <li className="w-[calc(33.3%-2rem)] flex-none rounded-xl border-2 border-gray-300 bg-gray-100">
      <button
        onClick={() => setOpen(true)}
        className="group relative h-full w-full cursor-pointer p-4"
      >
        <img className="h-auto w-full rounded-lg" src={image} alt={name} />
        <p className="mt-4 text-left text-2xl text-gray-950 font-roboto">
          {name}
        </p>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-h-[90vh] w-5/6 max-w-7xl overflow-y-auto rounded-lg border-2 border-gray-300 bg-white">
            <div className="space-y-4 p-8">
              <figure className="mb-4 w-full overflow-hidden rounded-xl">
                <img className="h-auto w-full" src={image} alt={name} />
              </figure>
              <div className="flex justify-between gap-8">
                <div className="w-[calc(50%-2rem)]">
                  <DialogTitle className="font-montserrat mb-4 text-4xl font-bold text-gray-900">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </DialogTitle>
                  <Description className="text-xl font-normal text-gray-600">
                    {description}
                  </Description>
                </div>
                <div className="w-[calc(40%-2rem)] mt-4">
                  <h1 className="mb-4 text-2xl font-bold text-gray-900 font-montserrat">
                    Stack
                  </h1>
                  <ul className="grid grid-cols-2 gap-4">
                    {stack.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-black"></div>
                        <p className="font-roboto">{item}</p>
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
