import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

// Import rofl images
import rofl1 from "../../assets/rofls/photo_2024-06-14_20-05-32.jpg";
import rofl2 from "../../assets/rofls/photo_2024-06-14_20-09-20.jpg";
import rofl3 from "../../assets/rofls/photo_2024-09-03_09-24-29.jpg";
import rofl4 from "../../assets/rofls/photo_2025-01-23_11-39-48.jpg";
import rofl5 from "../../assets/rofls/photo_2025-01-23_12-33-26.jpg";
import rofl6 from "../../assets/rofls/photo_2025-03-05_13-01-05.jpg";
import rofl7 from "../../assets/rofls/photo_2025-06-04_18-03-28.jpg";
import rofl8 from "../../assets/rofls/photo_2025-06-16_15-21-49.jpg";
import rofl9 from "../../assets/rofls/photo_2025-07-29_01-51-30.jpg";

const roflImages = [
  { id: 1, image: rofl1, alt: "Rofl photo June 2024" },
  { id: 2, image: rofl2, alt: "Rofl photo June 2024" },
  { id: 3, image: rofl3, alt: "Rofl photo September 2024" },
  { id: 4, image: rofl4, alt: "Rofl photo January 2025" },
  { id: 5, image: rofl5, alt: "Rofl photo January 2025" },
  { id: 6, image: rofl6, alt: "Rofl photo March 2025" },
  { id: 7, image: rofl7, alt: "Rofl photo June 2025" },
  { id: 8, image: rofl8, alt: "Rofl photo June 2025" },
  { id: 9, image: rofl9, alt: "Rofl photo July 2025" },
];

const Rofls = () => {
  return (
    <div className="my-32">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        modules={[EffectCube]}
        className="mySwiper h-[500px] w-[500px]"
      >
        {roflImages.map(({ id, image, alt }) => (
          <SwiperSlide key={id}>
            <img src={image} alt={alt} className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Rofls;
