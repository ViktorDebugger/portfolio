import { Link } from "react-router-dom";
import templateImage from "../../assets/template-images/template-image-1.jpg";
import BookOpen from "../icons/book-open";

const PromoSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="relative h-[80vh] w-full overflow-hidden rounded-4xl">
        <img
          className="absolute inset-0 z-0 h-auto w-full object-cover blur-xs"
          src={templateImage}
          alt="Promo image"
        />
        <div className="absolute inset-0 z-0 h-auto w-full bg-linear-to-b from-black/40 to-blue-700/50"></div>
        <div className="relative z-10 mx-auto flex h-full w-2/3 flex-col items-center justify-center gap-6 text-center">
          <h1 className="font-montserrat text-6xl font-bold text-white">
            New arrivals are here
          </h1>
          <p className="font-roboto text-2xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they're still in
            stock.
          </p>
          <Link
            to="/blog"
            className="group mt-4 flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-4 py-3 transition-colors duration-300 ease-in-out hover:bg-white"
          >
            <BookOpen className="size-6 text-white! transition-colors duration-300 ease-in-out group-hover:text-black!" />
            <p className="font-roboto text-xl text-white transition-colors duration-300 ease-in-out group-hover:text-black!">
              Go to Blog
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
