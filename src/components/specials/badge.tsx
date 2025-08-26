import { cn } from "../../utils/utils";

interface BadgeProps {
  children: React.ReactNode;
  category: string;
}

const categoryStyles: Record<string, { style: string }> = {
  "Frontend Core": {
    style: "text-orange-600 ring-1 ring-orange-600 shadow-orange-600/20",
  },
  "React Ecosystem": {
    style: "text-sky-600 ring-1 ring-sky-600 shadow-sky-600/20",
  },
  Backend: {
    style: "text-green-600 ring-1 ring-green-600 shadow-green-600/20",
  },
  "UI Libraries": {
    style: "text-fuchsia-600 ring-1 ring-fuchsia-600 shadow-fuchsia-600/20",
  },
  "Icons & Assets": {
    style: "text-yellow-600 ring-1 ring-yellow-600 shadow-yellow-600/20",
  },
  "Animation & Interaction": {
    style: "text-pink-600 ring-1 ring-pink-600 shadow-pink-600/20",
  },
  "State Management": {
    style: "text-purple-600 ring-1 ring-purple-600 shadow-purple-600/20",
  },
  Databases: {
    style: "text-emerald-600 ring-1 ring-emerald-600 shadow-emerald-600/20",
  },
  "Backend Services": {
    style: "text-cyan-600 ring-1 ring-cyan-600 shadow-cyan-600/20",
  },
  Authentication: {
    style: "text-red-600 ring-1 ring-red-600 shadow-red-600/20",
  },
  Communication: {
    style: "text-blue-600 ring-1 ring-blue-600 shadow-blue-600/20",
  },
  "Development Tools": {
    style: "text-indigo-600 ring-1 ring-indigo-600 shadow-indigo-600/20",
  },
  "E-commerce": {
    style: "text-lime-600 ring-1 ring-lime-600 shadow-lime-600/20",
  },
  "APIs & Services": {
    style: "text-teal-600 ring-1 ring-teal-600 shadow-teal-600/20",
  },
  Forms: {
    style: "text-amber-600 ring-1 ring-amber-600 shadow-amber-600/20",
  },
  "Content Management": {
    style: "text-rose-600 ring-1 ring-rose-600 shadow-rose-600/20",
  },
  Media: {
    style: "text-violet-600 ring-1 ring-violet-600 shadow-violet-600/20",
  },
  "JavaScript Libraries": {
    style: "text-slate-600 ring-1 ring-slate-600 shadow-slate-600/20",
  },
};

const Badge = ({ children, category }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md dark:bg-white/40 bg-black/30 px-2 py-1 text-xs md:text-sm font-bold shadow-lg ring-1 ring-inset",
        categoryStyles[category]?.style ?? "",
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
