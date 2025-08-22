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
    <li className="w-[calc(33.3%-2rem)] flex-none rounded-xl border-2 border-gray-300 bg-gray-100">
      <button
        onClick={() => setOpen(true)}
        className="group relative h-full w-full cursor-pointer p-4"
      >
        <img className="h-auto w-full rounded-lg" src={image} alt={name} />
        <p className="mt-4 text-left font-roboto text-2xl! text-gray-950!">
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
              <DialogTitle className="font-montserrat mb-4 text-4xl font-bold text-gray-900">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </DialogTitle>
              <Description className="text-xl font-normal text-gray-600">
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
