import image01 from "../../assets/template-images/template-image-1.jpg";
import image02 from "../../assets/template-images/template-image-2.jpg";
import image03 from "../../assets/template-images/template-image-3.jpg";
import image04 from "../../assets/template-images/template-image-4.jpg";

const LargeGallery = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="mt-10 w-4/10">
            <h1 className="font-montserrat mb-4 text-6xl font-bold text-gray-900">
              Our people
            </h1>
            <p className="font-roboto mb-6 text-2xl text-gray-700">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="font-roboto text-xl text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
          </div>
          <figure className="w-5/10">
            <img
              className="rounded-2xl object-cover"
              src={image01}
              alt="Image 1"
            />
          </figure>
        </div>

        <div className="relative flex h-[400px] justify-end gap-8">
          <figure className="flex items-end">
            <img
              className="absolute -left-56 h-[300px] w-[500px] rounded-2xl object-cover"
              src={image02}
              alt="Image 2"
            />
          </figure>
          <figure>
            <img
              className="h-[400px] w-[700px] rounded-2xl object-cover"
              src={image03}
              alt="Image 3"
            />
          </figure>
          <figure className="flex items-start">
            <img
              className="h-[300px] w-[400px] rounded-2xl object-cover"
              src={image04}
              alt="Image 4"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default LargeGallery;
