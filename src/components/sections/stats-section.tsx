import templateImage from "../../assets/template-images/template-image-6.jpg";

const StatsSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="relative flex h-[90vh] w-full flex-col justify-center gap-20 overflow-hidden rounded-4xl p-12">
        <img
          className="absolute inset-0 z-0 h-auto w-full object-cover blur-xs"
          src={templateImage}
          alt="Stats image"
        />
        <div className="absolute inset-0 z-0 h-auto w-full bg-linear-to-b from-black/50 to-blue-700/50"></div>
        <div className="relative z-10 w-6/10">
          <p className="font-roboto mb-4 text-xl text-indigo-600">
            Our track record
          </p>
          <h1 className="font-montserrat mb-6 text-6xl font-bold text-white">
            Trusted by thousands of creators worldwide
          </h1>
          <p className="font-roboto mb-6 text-2xl text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </p>
        </div>
        <ul className="relative z-10 grid grid-cols-4">
          <li className="border-l border-gray-300 px-6 py-1">
            <h2 className="font-montserrat mb-4 text-4xl font-bold text-white">
              8,000+
            </h2>
            <p className="font-roboto text-xl text-gray-200">
              Creators on the platform
            </p>
          </li>
          <li className="border-l border-gray-300 px-6 py-1">
            <h2 className="font-montserrat mb-4 text-4xl font-bold text-white">
              3%
            </h2>
            <p className="font-roboto text-xl text-gray-200">
              Flat platform fee
            </p>
          </li>
          <li className="border-l border-gray-300 px-6 py-1">
            <h2 className="font-montserrat mb-4 text-4xl font-bold text-white">
              99.9%
            </h2>
            <p className="font-roboto text-xl text-gray-200">
              Uptime guarantee
            </p>
          </li>
          <li className="border-l border-gray-300 px-6 py-1">
            <h2 className="font-montserrat mb-4 text-4xl font-bold text-white">
              $70M
            </h2>
            <p className="font-roboto text-xl text-gray-200">
              Paid out to creators
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StatsSection;
