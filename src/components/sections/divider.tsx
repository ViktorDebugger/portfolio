import { useTheme } from "../../context/theme-context";
import { cn } from "../../utils/utils";
import Plus from "../icons/plus";

const Divider = () => {
  const { theme } = useTheme();

  return (
    <div className="2xl:mx-auto mx-5  max-w-full 2xl:max-w-[1440px] py-10 text-black dark:text-white">
      <div className="flex justify-center">
        <div className="relative -bottom-[6px] -left-2 md:left-0 size-8 p-2">
          <Plus className="size-10" />
        </div>
      </div>
      <hr className={cn("divider-shadow rounded-sm border-t-[4px]", theme)} />
    </div>
  );
};

export default Divider;
