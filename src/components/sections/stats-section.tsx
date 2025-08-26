import templateImage from "../../assets/template-images/template-image-6.jpg";

const StatsSection = () => {
  return (
    <section className="flex h-auto w-full items-center justify-center">
      <div className="gradient-glow-blue relative mx-4 md:mx-8 h-auto max-w-[1550px] overflow-hidden rounded-4xl p-8 lg:h-[720px]">
        <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-indigo-700/30 to-purple-700/30"></div>
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover blur-xs"
          src={templateImage}
          alt="Stats image"
        />
        <div className="relative z-20 flex h-full flex-col justify-center p-0 2xl:p-8">
          <div className="mb-16">
            <h1 className="xs:text-xl mb-6 text-lg font-bold text-white sm:text-3xl lg:text-5xl 2xl:text-6xl">
              My Experience And Statistics
            </h1>
            <p className="mb-6 w-full text-lg text-white sm:text-xl lg:text-2xl 2xl:w-7/10">
              Here you can see my experience and statistics. I have worked with
              many technologies and frameworks. I have a lot of experience in
              creating web applications.
            </p>
          </div>
          <ul className="relative z-20 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <li className="border-l border-gray-300 px-2 py-1 xl:px-6">
              <h2 className="3xl:text-5xl mb-4 text-2xl font-bold text-white lg:text-3xl 2xl:text-4xl">
                2
              </h2>
              <p className="text-base text-gray-200 md:text-lg lg:text-xl 2xl:text-2xl">
                Years of experience in IT
              </p>
            </li>
            <li className="border-l border-gray-300 px-2 py-1 xl:px-6">
              <h2 className="3xl:text-5xl mb-4 text-2xl font-bold text-white lg:text-3xl 2xl:text-4xl">
                2
              </h2>
              <p className="text-base text-gray-200 md:text-lg lg:text-xl 2xl:text-2xl">
                Created projects
              </p>
            </li>
            <li className="border-l border-gray-300 px-2 py-1 xl:px-6">
              <h2 className="3xl:text-5xl mb-4 text-2xl font-bold text-white lg:text-3xl 2xl:text-4xl">
                2
              </h2>
              <p className="text-base text-gray-200 md:text-lg lg:text-xl 2xl:text-2xl">
                Months of commercial experience in web development
              </p>
            </li>
            <li className="border-l border-gray-300 px-2 py-1 xl:px-6">
              <h2 className="3xl:text-5xl mb-4 text-2xl font-bold text-white lg:text-3xl 2xl:text-4xl">
                6
              </h2>
              <p className="text-base text-gray-200 md:text-lg lg:text-xl 2xl:text-2xl">
                Practical projects
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
