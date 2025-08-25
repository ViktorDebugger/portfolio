import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

interface CertificateItemProps {
  name: string;
  image: string;
  link: string;
  description: string;
}

const CertificateItem = ({
  name,
  image,
  link,
  description,
}: CertificateItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="glass-effect-button glass-main w-[calc(33.3%-2rem)] flex-none overflow-hidden rounded-2xl border-1! border-indigo-300! shadow-2xl! shadow-indigo-900/80 transition-all duration-300 ease-in-out hover:scale-105">
      <button
        onClick={() => setOpen(true)}
        className="relative h-full w-full cursor-pointer p-8 text-black dark:text-white"
      >
        <img className="h-auto w-full rounded-lg" src={image} alt={name} />
        <p className="mt-4 text-left text-2xl! font-bold">{name}</p>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-md">
          <DialogPanel className="glass-effect glass-main gradient-border-left-blue max-h-[90vh] w-5/6 max-w-7xl overflow-y-auto rounded-2xl border-l-0 shadow-2xl! shadow-indigo-500 text-black dark:text-white">
            <div className="space-y-4 p-8">
              <figure className="mx-auto mb-8 w-[800px] overflow-hidden rounded-xl">
                <img className="h-auto w-full" src={image} alt={name} />
              </figure>
              <DialogTitle className="mb-4 text-4xl font-bold">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </DialogTitle>
              <Description className="text-xl font-normal">
                {description}
              </Description>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </li>
  );
};

export default CertificateItem;
