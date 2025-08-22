import image01 from "./../../assets/template-images/template-image-5.jpg";
import image02 from "./../../assets/template-images/template-image-6.jpg";
import image03 from "./../../assets/template-images/template-image-3.jpg";
import image04 from "./../../assets/template-images/template-image-1.jpg";

const BentoSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <p className="font-roboto mb-4 text-lg text-indigo-600!">
          Deploy faster
        </p>
        <h1 className="font-montserrat mb-10 max-w-1/2 text-5xl! font-bold text-gray-900!">
          Everything you need to deploy your app
        </h1>

        <div className="grid w-full grid-cols-3 gap-5 text-left">
          <div className="col-span-1 row-span-2 flex max-h-full flex-col justify-between gap-5 rounded-l-4xl rounded-r-xl border border-gray-400 p-10">
            <div className="h-2/10">
              <h3 className="font-montserrat mb-2 font-bold">
                Mobile friendly
              </h3>
              <p className="font-roboto text-lg text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
            <figure className="h-8/10 w-full overflow-hidden rounded-2xl">
              <img
                className="h-full w-full object-cover object-left"
                src={image01}
                alt="Image 1"
              />
            </figure>
          </div>
          <div className="col-span-1 row-span-2 flex flex-col gap-5">
            <div className="flex flex-col justify-between gap-5 rounded-xl border border-gray-400 p-8">
              <div className="h-4/10">
                <h3 className="font-montserrat mb-2 font-bold">Performance</h3>
                <p className="font-roboto text-lg text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  maiores impedit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
              <figure className="h-7/10 w-full overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full object-cover object-left"
                  src={image02}
                  alt="Image 2"
                />
              </figure>
            </div>
            <div className="flex flex-col justify-between gap-5 rounded-xl border border-gray-400 p-8">
              <div className="h-4/10">
                <h3 className="font-montserrat mb-2 font-bold">Security</h3>
                <p className="font-roboto text-lg text-gray-600">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
              </div>
              <figure className="h-7/10 w-full overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full object-cover object-left"
                  src={image03}
                  alt="Image 3"
                />
              </figure>
            </div>
          </div>
          <div className="col-span-1 row-span-2 flex flex-col justify-between gap-5 rounded-l-xl rounded-r-4xl border border-gray-400 p-8">
            <div className="h-2/10">
              <h3 className="font-montserrat mb-2 font-bold">Powerful APIs</h3>
              <p className="font-roboto text-lg text-gray-600">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget sem sodales gravida. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Morbi viverra dui mi arcu sed.
              </p>
            </div>
            <figure className="h-8/10 w-full overflow-hidden rounded-2xl">
              <img
                className="h-full w-full object-cover object-left"
                src={image04}
                alt="Image 4"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
