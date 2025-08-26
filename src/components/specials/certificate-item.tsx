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
    <li className="glass-effect-button glass-main w-full max-w-[400px] flex-none overflow-hidden rounded-2xl border-1! border-indigo-300! shadow-2xl! shadow-indigo-900/80 transition-all duration-300 ease-in-out hover:scale-105 md:w-[calc(50%-2rem)] xl:w-[calc(33.3%-2rem)]">
      <button
        onClick={() => setOpen(true)}
        className="relative h-full w-full cursor-pointer p-4 text-black md:p-8 dark:text-white"
      >
        <img className="h-auto w-full rounded-lg" src={image} alt={name} />
        <p className="mt-4 text-left text-xl font-bold xl:text-2xl">{name}</p>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-end justify-center p-4 backdrop-blur-md md:items-center">
          <DialogPanel className="glass-effect glass-main gradient-border-left-blue absolute -bottom-10 max-h-[90vh] w-full overflow-y-auto rounded-2xl border-l-0 pb-16 text-black shadow-2xl! shadow-indigo-500 md:bottom-auto md:w-5/6 md:max-w-7xl md:pb-8 dark:text-white">
            <div className="absolute top-0 left-0 z-1 h-full w-full bg-black/30 dark:bg-black/50"></div>
            <div className="relative z-2 flex h-full max-h-[90vh] flex-col">
              <div className="scrollbar-hide flex-1 overflow-x-hidden overflow-y-auto">
                <div className="space-y-4 p-4 sm:p-8">
                  <figure className="mx-auto mb-8 w-full overflow-hidden rounded-xl md:w-[420px] lg:w-[600px]">
                    <img className="h-auto w-full" src={image} alt={name} />
                  </figure>
                  <DialogTitle className="mb-4 text-xl font-bold sm:text-2xl md:text-4xl">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </DialogTitle>
                  <Description className="mb-8 text-sm font-normal md:text-xl lg:mb-0">
                    {description}
                    {description}
                  </Description>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </li>
  );
};

export default CertificateItem;
