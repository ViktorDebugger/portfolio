import Plus from "../icons/plus";

const Divider = () => {
  return (
    <div className="mx-auto max-w-[1440px] py-10">
      <div className="flex justify-center">
        <div className="relative size-8 bg-white p-2 -bottom-[17px]">
          <Plus className="size-4 text-gray-400" />
        </div>
      </div>
      <hr className="border-t-2 border-gray-400" />
    </div>
  );
};

export default Divider;
