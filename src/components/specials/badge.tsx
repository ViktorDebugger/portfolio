interface BadgeProps {
  children: React.ReactNode;
  category: string;
}

const categoryStyles: Record<string, { style: string }> = {
  "Frontend Core": {
    style: "text-orange-800 bg-orange-50 ring-1 ring-orange-300",
  },
  "React Ecosystem": {
    style: "text-sky-800 bg-sky-50 ring-1 ring-sky-300",
  },
  Backend: {
    style: "text-green-800 bg-green-50 ring-1 ring-green-300",
  },
  "UI Libraries": {
    style: "text-fuchsia-800 bg-fuchsia-50 ring-1 ring-fuchsia-300",
  },
  "Icons & Assets": {
    style: "text-yellow-900 bg-yellow-50 ring-1 ring-yellow-300",
  },
  "Animation & Interaction": {
    style: "text-pink-800 bg-pink-50 ring-1 ring-pink-300",
  },
  "State Management": {
    style: "text-purple-800 bg-purple-50 ring-1 ring-purple-300",
  },
  Databases: {
    style: "text-emerald-800 bg-emerald-50 ring-1 ring-emerald-300",
  },
  "Backend Services": {
    style: "text-cyan-800 bg-cyan-50 ring-1 ring-cyan-300",
  },
  Authentication: {
    style: "text-red-800 bg-red-50 ring-1 ring-red-300",
  },
  Communication: {
    style: "text-blue-800 bg-blue-50 ring-1 ring-blue-300",
  },
  "Development Tools": {
    style: "text-indigo-700 bg-indigo-50 ring-1 ring-indigo-300",
  },
  "E-commerce": {
    style: "text-lime-800 bg-lime-50 ring-1 ring-lime-300",
  },
};

const Badge = ({ children, category }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${categoryStyles[category]?.style ?? ""}`}
    >
      {children}
    </span>
  );
};

export default Badge;
