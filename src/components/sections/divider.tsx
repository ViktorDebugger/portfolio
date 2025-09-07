import { useTheme } from "../../context/theme-context";
import { cn } from "../../tools/utils";
import Plus from "../icons/plus";

const Divider = () => {
  const { theme } = useTheme();

  return (
    <div className="mx-5 max-w-full py-10 text-black 2xl:mx-auto 2xl:max-w-[1440px] dark:text-white">
      <div className="flex justify-center">
        <div className="relative -bottom-[6px] -left-2 size-8 p-2 md:left-0">
          <Plus className="size-10" />
        </div>
      </div>
      <hr className={cn("divider-shadow rounded-sm border-t-[4px]", theme)} />
    </div>
  );
};

export default Divider;
