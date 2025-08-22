import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import ChatBubble from "./../icons/stack/chat-bubble-left-right.tsx";
import CircleStack from "./../icons/stack/circle-stack.tsx";
import Cloud from "./../icons/stack/cloud.tsx";
import CodeBracket from "./../icons/stack/code-bracket.tsx";
import Cog6Tooth from "../icons/stack/cog-6-tooth.tsx";
import Cube from "./../icons/stack/cube.tsx";
import Photo from "./../icons/stack/photo.tsx";
import ServerStack from "./../icons/stack/server-stack.tsx";
import ShieldCheck from "./../icons/stack/shield-check.tsx";
import ShoppingCart from "./../icons/stack/shopping-cart.tsx";
import Sparkles from "./../icons/stack/sparkles.tsx";
import Swatch from "./../icons/stack/swatch.tsx";
import WrenchScrewdriver from "./../icons/stack/wrench-screwdriver.tsx";
import Squares2X2 from "./../icons/squares2x2.tsx";
import Plus from "../icons/plus.tsx";
import Minus from "../icons/minus.tsx";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "All",
    description: "Show all technologies",
    icon: Squares2X2,
  },
  {
    id: 2,
    name: "Frontend Core",
    description: "HTML, CSS, JavaScript basics",
    icon: CodeBracket,
  },
  {
    id: 3,
    name: "React Ecosystem",
    description: "React and related frameworks",
    icon: Cube,
  },
  {
    id: 4,
    name: "Backend",
    description: "Server-side technologies",
    icon: ServerStack,
  },
  {
    id: 5,
    name: "UI Libraries",
    description: "Component libraries and design",
    icon: Swatch,
  },
  {
    id: 6,
    name: "Icons & Assets",
    description: "Icon libraries and resources",
    icon: Photo,
  },
  {
    id: 7,
    name: "Animation & Interaction",
    description: "Motion and interactive libraries",
    icon: Sparkles,
  },
  {
    id: 8,
    name: "State Management",
    description: "Application state solutions",
    icon: Cog6Tooth,
  },
  {
    id: 9,
    name: "Databases",
    description: "Data storage technologies",
    icon: CircleStack,
  },
  {
    id: 10,
    name: "Backend Services",
    description: "Cloud platforms and APIs",
    icon: Cloud,
  },
  {
    id: 11,
    name: "Authentication",
    description: "User auth and security",
    icon: ShieldCheck,
  },
  {
    id: 12,
    name: "Communication",
    description: "Email and messaging services",
    icon: ChatBubble,
  },
  {
    id: 13,
    name: "Development Tools",
    description: "Build tools and utilities",
    icon: WrenchScrewdriver,
  },
  {
    id: 14,
    name: "E-commerce",
    description: "Online store platforms",
    icon: ShoppingCart,
  },
];

interface CategoriesMenuProps {
  category?: string;
  handler: (name: string) => void;
}

const CategoriesMenu = ({ category, handler }: CategoriesMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleCategory = (name: string) => {
    handler(name);
    setOpen(false);
  };

  return (
    <>
      <button
        className="flex cursor-pointer items-center gap-4 self-end p-4"
        onClick={() => setOpen(true)}
      >
        <p className="font-roboto">{category}</p>
        {open ? (
          <Minus className="size-4 text-gray-950" />
        ) : (
          <Plus className="size-4 text-gray-950" />
        )}
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center gap-4 text-left">
          <DialogPanel className="max-w-6xl rounded-lg border-2 border-gray-400 bg-white p-6">
            <DialogTitle className="font-montserrat text-light-heading-1 dark:text-dark-heading-1 mb-8 text-center text-4xl font-bold">
              Categories
            </DialogTitle>

            <ul className="flex flex-wrap items-center justify-center gap-2">
              {categories.map(({ id, name, description, icon: Icon }) => (
                <li key={id} className="w-[calc(33.3%-0.5rem)] flex-none">
                  <button
                    onClick={() => handleCategory(name)}
                    className="group flex w-full cursor-pointer items-center gap-4 rounded-lg p-2 transition-colors duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <div className="rounded-lg bg-gray-100 p-3 transition-colors duration-300 ease-in-out group-hover:bg-white">
                      <Icon className="size-6 text-black transition-colors duration-300 ease-in-out group-hover:text-indigo-600" />
                    </div>
                    <div className="space-y-1 text-left">
                      <p className="font-roboto transition-colors duration-300 ease-in-out group-hover:text-black">
                        {name}
                      </p>
                      <p className="text-md font-roboto text-gray-600">
                        {description}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default CategoriesMenu;
