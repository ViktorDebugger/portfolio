import templateImage from "../../assets/template-images/template-image-6.jpg";

const StatsSection = () => {
  return (
    <section className="flex h-auto w-full items-center justify-center">
      <div className="gradient-glow-blue relative h-[720px] max-w-[1550px] overflow-hidden rounded-4xl mx-8 p-8 after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-b after:from-indigo-700/30 after:to-purple-700/30">
        <img
          className="absolute inset-0 z-0 object-cover blur-xs"
          src={templateImage}
          alt="Stats image"
        />
        <div className="relative z-20 flex h-full flex-col justify-center 2xl:p-8 p-0">
          <div className="mb-16">
            <h1 className="mb-6 text-6xl font-bold text-white">
              My Experience And Statistics
            </h1>
            <p className="mb-6 w-7/10 text-2xl text-white">
              Here you can see my experience and statistics. I have worked with
              many technologies and frameworks. I have a lot of experience in
              creating web applications.
            </p>
          </div>
          <ul className="relative z-20 grid grid-cols-4 w-full">
            <li className="border-l border-gray-300 px-6 py-1">
              <h2 className="mb-4 text-4xl font-bold text-white">2</h2>
              <p className="text-xl text-gray-200">Years of experience in IT</p>
            </li>
            <li className="border-l border-gray-300 px-6 py-1">
              <h2 className="mb-4 text-4xl font-bold text-white">2</h2>
              <p className="text-xl text-gray-200">Created projects</p>
            </li>
            <li className="border-l border-gray-300 px-6 py-1">
              <h2 className="mb-4 text-4xl font-bold text-white">2</h2>
              <p className="text-xl text-gray-200">
                Months of commercial experience in web development
              </p>
            </li>
            <li className="border-l border-gray-300 px-6 py-1">
              <h2 className="mb-4 text-4xl font-bold text-white">6</h2>
              <p className="text-xl text-gray-200">Practical projects</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
