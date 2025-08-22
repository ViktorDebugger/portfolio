import image01 from "../../assets/template-images/template-image-1.jpg";
import image02 from "../../assets/template-images/template-image-2.jpg";
import image03 from "../../assets/template-images/template-image-3.jpg";
import image04 from "../../assets/template-images/template-image-4.jpg";
import image05 from "../../assets/template-images/template-image-5.jpg";

const SmallGallery = () => {
  return (
    <section className="mx-auto h-[105vh] w-full max-w-[1440px] py-32">
      <div className="relative flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="mb-8 text-6xl!">
            We’re changing the way people connect
          </h1>
          <p className="text-lg text-gray-700 font-roboto">
            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
            cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
            mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
            mollit id pariatur in voluptate cillum. Eu voluptate tempor esse
            minim amet fugiat veniam occaecat aliqua. Cupidatat minim id magna
            ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit.
            Et labore commodo nulla aliqua proident mollit ullamco exercitation
            tempor.Eu voluptate tempor esse minim amet fugiat veniam occaecat
            aliqua. Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
            quis cupidatat mollit aute velit. Et labore commodo nulla aliqua
            proident mollit ullamco exercitation tempor.
          </p>
        </div>
        <div className="absolute -top-40 -right-40 grid grid-cols-3 gap-8">
          <div className="flex h-full flex-col justify-end gap-8">
            <figure>
              <img
                className="h-72 w-60 rounded-2xl object-cover"
                src={image01}
                alt="Image 1"
              />
            </figure>
          </div>
          <div className="relative -bottom-40 flex h-full flex-col gap-8">
            <figure>
              <img
                className="h-72 w-60 rounded-2xl object-cover"
                src={image02}
                alt="Image 2"
              />
            </figure>
            <figure>
              <img
                className="h-72 w-60 rounded-2xl object-cover"
                src={image03}
                alt="Image 3"
              />
            </figure>
          </div>
          <div className="flex h-full flex-col gap-8">
            <figure>
              <img
                className="h-72 w-60 rounded-2xl object-cover"
                src={image04}
                alt="Image 4"
              />
            </figure>
            <figure>
              <img
                className="h-72 w-60 rounded-2xl object-cover object-left"
                src={image05}
                alt="Image 5"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallGallery;
