import imageTemplate01 from "../../assets/template-images/template-image-1.jpg";
import imageTemplate02 from "../../assets/template-images/template-image-3.jpg";
import imageTemplate03 from "../../assets/template-images/template-image-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import ChevronRight from "../icons/chevron-right";
import ChevronLeft from "../icons/chevron-left";

const slides = [
  {
    id: 1,
    image: imageTemplate01,
    title: "Summer Collection",
    description:
      "Explore our vibrant summer collection with fresh styles and colors for every occasion. Each piece is crafted from premium materials to ensure comfort and durability, making it perfect for sunny days, vacations, and outdoor adventures. Discover new trends and elevate your wardrobe with our exclusive summer arrivals.",
  },
  {
    id: 2,
    image: imageTemplate02,
    title: "Urban Looks",
    description:
      "Discover modern urban outfits designed for comfort and style in the city. Our urban collection features versatile designs, functional fabrics, and bold accents that seamlessly blend with your everyday life. Whether you're heading to work or meeting friends, these looks will keep you feeling confident and fashionable.",
  },
  {
    id: 3,
    image: imageTemplate03,
    title: "Classic Essentials",
    description:
      "Find timeless wardrobe essentials crafted for quality and versatility. Our classic pieces are designed to be the foundation of your style, offering endless combinations and effortless elegance. Invest in clothing that never goes out of fashion and always looks great, season after season.",
  },
];

const Slider = () => {
  return (
    <section className="relative mx-auto max-w-[1440px] py-16">
      <div className="relative">
        <button className="custom-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-3 shadow-lg transition-all hover:bg-white">
          <ChevronLeft className="size-6 text-gray-800" />
        </button>

        <button className="custom-next absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-3 shadow-lg transition-all hover:bg-white">
          <ChevronRight className="size-6 text-gray-800" />
        </button>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={1}
          coverflowEffect={{
            scale: 0.8,
            depth: 150,
            slideShadows: false,
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            type: "bullets",
            renderBullet: (_, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        >
          {slides.map(({ id, image, title, description }) => (
            <SwiperSlide key={id}>
              <div className="h-96 p-6 w-6/10 mx-auto rounded-xl overflow-hidden relative after:bg-black/40 after:absolute after:inset-0 after:z-10">
                <img
                  className="w-full h-full object-cover absolute z-0 inset-0"
                  src={image}
                  alt={title}
                />
                <div className="relative z-20 h-full flex flex-col justify-end gap-4 text-white">
                  <h1 className="font-bold text-3xl">{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
};

//

export default Slider;
