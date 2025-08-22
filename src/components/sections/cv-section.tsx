const CVSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="grid grid-cols-3 grid-rows-3 gap-10 px-14">
        <div className="col-span-1 row-span-2 flex flex-col gap-6">
          <div className="w-full rounded-xl border-2 border-gray-400 p-6">
            <h2 className="mb-4 text-3xl text-gray-900 font-montserrat font-bold">
              Document Information
            </h2>
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-4 text-gray-600!">
                <li>Format:</li>
                <li>Size:</li>
                <li>Last Updated:</li>
                <li>Language:</li>
              </ul>
              <ul className="flex flex-col gap-4 text-right text-gray-600!">
                <li>PDF</li>
                <li>2.4 MB</li>
                <li>22.07.2025</li>
                <li>English</li>
              </ul>
            </div>
          </div>
          <div className="w-full rounded-xl border-2 border-indigo-400 bg-indigo-50 p-6">
            <h2 className="mb-4 text-3xl text-gray-900 font-montserrat font-bold">Quick Stats</h2>
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-4 text-gray-600!">
                <li>Work Experience:</li>
                <li>Projects:</li>
                <li>Technologies:</li>
                <li>Education:</li>
              </ul>
              <ul className="flex flex-col gap-4 text-right font-bold text-indigo-600!">
                <li>5+ years</li>
                <li>25+</li>
                <li>15+</li>
                <li>Master's Degree</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-3 flex items-center justify-center rounded-xl border-2 border-gray-400 bg-gray-50">
          <iframe
            src="/Luka-Viktor.pdf"
            title="CV Preview"
            className="h-full w-full rounded-lg border"
          />
        </div>
      </div>
    </section>
  );
};

export default CVSection;
