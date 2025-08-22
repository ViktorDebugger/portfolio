import { Link } from "react-router-dom";
import Eye from "../icons/eye";
import Envelope from "../icons/envelope";

const CTASection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="mx-auto flex w-6/10 flex-col items-center gap-8 text-center">
        <h1 className="font-montserrat text-5xl font-bold">
          Boost your productivity today
        </h1>
        <h2 className="font-montserrat font-bold text-gray-800">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
          id veniam aliqua proident excepteur commodo do ea.
        </h2>
        <div className="flex items-center gap-4">
          <Link
            to="/cv"
            className="group transition-color flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-3 text-black! duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            <Eye className="size-6 text-black transition-colors duration-300 ease-in-out group-hover:text-white" />
            <p className="font-semibol font-roboto text-lg text-black transition-colors duration-300 ease-in-out group-hover:text-white!">
              View CV
            </p>
          </Link>
          <Link
            to="/contact"
            className="transition-color flex items-center gap-2 rounded-lg border-2 border-indigo-600 bg-indigo-600 px-4 py-3 duration-300 ease-in-out hover:border-indigo-600/0 hover:bg-indigo-600/80"
          >
            <Envelope className="size-6 text-white" />
            <p className="font-roboto text-lg font-semibold text-white">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
