import Sun from "../icons/sun";
import Moon from "../icons/moon";
import { useTheme } from "../../context/theme-context";
import { cn } from "../../tools/utils";

interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={switchTheme}
      className={cn(
        className,
        "theme-switch-glow cursor-pointer rounded-lg p-1 md:rounded-2xl",
        theme !== "light" ? "light" : "dark",
      )}
    >
      {theme === "light" ? (
        <Moon className="size-6 text-white md:size-8" />
      ) : (
        <Sun className="size-6 text-black md:size-8" />
      )}
    </button>
  );
};

export default ThemeSwitch;
