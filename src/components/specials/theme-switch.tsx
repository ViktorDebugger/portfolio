import Sun from "../icons/sun";
import Moon from "../icons/moon";
import { useTheme } from "../../context/theme-context";
import { cn } from "../../utils/utils";

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
        "theme-switch-glow cursor-pointer rounded-lg md:rounded-2xl p-1",
        theme !== "light" ? "light" : "dark",
      )}
    >
      {theme === "light" ? (
        <Moon className="size-6 md:size-8 text-white" />
      ) : (
        <Sun className="size-6 md:size-8 text-black" />
      )}
    </button>
  );
};

export default ThemeSwitch;
