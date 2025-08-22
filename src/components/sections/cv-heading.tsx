import Eye from "../icons/eye";
import ArrowDownTray from "../icons/arrow-down-tray";

const CVHeading = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-montserrat mb-2 text-4xl font-bold text-gray-900">
          My CV Document
        </h1>
        <p className="font-roboto mb-6 max-w-5/10 text-xl text-gray-600">
          Download or view my resume to learn more about my experience, skills,
          and achievements. Ready for new challenges and opportunities!
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            download
            href="/public/Luka-Viktor.pdf"
            className="transition-color flex items-center gap-2 rounded-lg border-2 border-indigo-600 bg-indigo-600 px-4 py-3 duration-300 ease-in-out hover:border-indigo-600/0 hover:bg-indigo-600/80"
          >
            <ArrowDownTray className="size-6 text-white" />
            <p className="font-roboto text-lg font-semibold text-white">
              Download CV
            </p>
          </a>
          <a
            href="/Luka-Viktor.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-color flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-3 text-black! duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            <Eye className="size-6 text-black transition-colors duration-300 ease-in-out group-hover:text-white" />
            <p className="font-semibol font-roboto text-lg text-black transition-colors duration-300 ease-in-out group-hover:text-white!">
              View Online
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVHeading;
