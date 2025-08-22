import { Link } from "react-router-dom";
import ArrowLeft from "../components/icons/arrow-left";
import XMark from "../components/icons/x-mark";

const NotFound = () => {
  return (
    <section className="relative mx-auto h-[80vh] max-w-[1440px]">
      <XMark className="pointer-events-none absolute -inset-22 z-0 h-[800px] w-[800px] stroke-gray-200" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h2 className="font-montserrat mb-4 font-bold text-indigo-600">404</h2>
        <h1 className="font-montserrat mb-6 font-bold">
          This page does not exist
        </h1>
        <h2 className="font-montserrat mb-8 font-bold text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </h2>
        <div className="flex gap-8">
          <Link to="/" className="group flex items-center gap-2">
            <ArrowLeft className="size-6 transition-colors duration-300 ease-in-out group-hover:text-black/70" />
            <p className="font-roboto font-semibold text-black transition-colors duration-300 ease-in-out group-hover:text-black/70!">
              Previous page
            </p>
          </Link>
          <Link
            to="/"
            className="transition-color inline-flex rounded-lg bg-indigo-600 px-4 py-3 duration-300 ease-in-out hover:bg-indigo-600/80"
          >
            <p className="font-roboto font-semibold text-white">Go back home</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
