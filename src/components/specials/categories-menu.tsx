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
import BookOpen from "../icons/stack/book-open.tsx";
import Bolt from "../icons/stack/bolt.tsx";
import InformationCircle from "../icons/stack/information-circle.tsx";
import BriefCase from "../icons/stack/brief-case.tsx";
import Eye from "../icons/stack/eye.tsx";

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
  {
    id: 15,
    name: "APIs & Services",
    description: "External APIs and service integrations",
    icon: Bolt,
  },
  {
    id: 16,
    name: "Forms",
    description: "Form handling and validation libraries",
    icon: InformationCircle,
  },
  {
    id: 17,
    name: "Content Management",
    description: "CMS and content management systems",
    icon: BookOpen,
  },
  {
    id: 18,
    name: "Media",
    description: "Media processing and streaming tools",
    icon: Eye,
  },
  {
    id: 19,
    name: "JavaScript Libraries",
    description: "Utility and helper JavaScript libraries",
    icon: BriefCase,
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
        className="glass-effect-button glass-main mx-4 flex cursor-pointer items-center gap-4 self-end overflow-hidden rounded-2xl border-l-4! border-l-indigo-600! p-4 text-black shadow-2xl! shadow-indigo-900/80 transition-all duration-300 ease-in-out hover:scale-105 md:mx-8 dark:text-white"
        onClick={() => setOpen(true)}
      >
        <p className="">{category}</p>
        {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center gap-4 text-left backdrop-blur-lg">
          <DialogPanel className="glass-effect glass-main gradient-border-left-blue mx-4 max-w-5xl rounded-2xl absolute -bottom-10 border-l-0 text-black shadow-2xl! shadow-indigo-500 dark:text-white">
            <div className="absolute top-0 left-0 z-0 h-full w-full bg-black/30 dark:bg-black/50"></div>
            <div className="relative z-2 flex h-full max-h-[90vh] flex-col">
              <div className="scrollbar-hide flex-1 overflow-x-hidden overflow-y-auto p-6">
                <DialogTitle className="text-light-heading-1 dark:text-dark-heading-1 relative mb-8 text-center text-4xl font-bold">
                  Categories
                </DialogTitle>

                <ul className="flex flex-wrap items-center justify-center gap-y-4 md:gap-2">
                  {categories.map(({ id, name, description, icon: Icon }) => (
                    <li key={id} className="w-[calc(50%-0.5rem)] md:w-[calc(33.3%-0.5rem)] flex-none">
                      <button
                        onClick={() => handleCategory(name)}
                        className="group flex w-full cursor-pointer items-center gap-4 rounded-lg p-2 transition-colors duration-300 ease-in-out hover:text-indigo-600"
                      >
                        <div className="rounded-lg">
                          <Icon className="size-6" />
                        </div>
                        <div className="space-y-1 text-left">
                          <p className="font-bold transition-colors duration-300 ease-in-out">
                            {name}
                          </p>
                          <p className="text-md">{description}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default CategoriesMenu;
