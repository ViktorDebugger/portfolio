import { Switch } from "@headlessui/react";
import Sun from "../icons/sun";
import Moon from "../icons/moon";
import { useTheme } from "../../context/theme-context";

interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();

  const isEnable = () => theme === "dark";

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      checked={isEnable()}
      onChange={switchTheme}
      className={`${className} group bg-gray-400 data-checked:bg-gray-800 inline-flex h-6 w-10 cursor-pointer items-center rounded-lg transition`}
    >
      <div className="bg-white dark:bg-black relative size-4 translate-x-1 rounded-md transition group-data-checked:translate-x-5">
        {theme === "light" ? (
          <Sun className="text-black absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2" />
        ) : (
          <Moon className="text-white absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>
    </Switch>
  );
};

export default ThemeSwitch;
