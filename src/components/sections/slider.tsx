import imageTemplate01 from "/template-images/template-image-1.jpg";
import imageTemplate02 from "/template-images/template-image-3.jpg";
import imageTemplate03 from "/template-images/template-image-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { cn } from "../../tools/utils";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: imageTemplate01,
    title: "Constantly learning",
    description:
      "I have an intrinsic motivation for continuous learning. I am constantly looking for new approaches, methodologies and tools that help me become better at my job. This allows me to quickly adapt to changes in the field of technology. Thanks to this, I always update my knowledge and remain competitive.",
  },
  {
    id: 2,
    image: imageTemplate02,
    title: "Constantly learning something new",
    description:
      "I never stop at what I have achieved. In my free time, I pay attention to learning new programming languages, libraries and frameworks. This helps me expand my technical horizons and find non-standard solutions. I immediately try to apply new knowledge in practice.",
  },
  {
    id: 3,
    image: imageTemplate03,
    title: "Initiative",
    description:
      "I always offer ideas and approaches that can improve the product or work process. I am not afraid to take on additional tasks when I see that it will benefit the team. This approach allows me to actively influence the development of projects. Initiative helps me do more than just perform basic duties.",
  },
  {
    id: 4,
    image: imageTemplate01,
    title: "Flexible",
    description:
      "I quickly adapt to new conditions and changes in projects. I can work with different technologies and switch between tasks without losing quality. This makes me effective in a dynamic development environment. Flexibility allows me to easily integrate into any team.",
  },
  {
    id: 5,
    image: imageTemplate02,
    title: "Responsible",
    description:
      "I take each task seriously and always bring things to the end. I understand that the result of the entire team depends on my work. Therefore, I always meet deadlines and perform the assigned tasks qualitatively. Responsibility is one of my key professional traits.",
  },
  {
    id: 6,
    image: imageTemplate03,
    title: "Organized",
    description:
      "I can effectively plan my time and resources. This allows me to work on several tasks at the same time and maintain productivity. To organize my work, I use modern time management tools and techniques. Thanks to this, I complete tasks systematically and without chaos.",
  },
];

const Slider = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          ),
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={ref}
      className="flex h-auto w-full items-center justify-center"
    >
      <motion.div
        className="relative my-6 flex max-w-[1550px] items-center justify-center"
        initial={
          isMobile
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.8, y: 50 }
        }
        animate={
          isMobile
            ? { opacity: 1, scale: 1, y: 0 }
            : isInView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.8, y: 50 }
        }
        transition={
          isMobile ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }
        }
      >
        <div className="h-[300px] w-[250px] sm:h-[300px] sm:w-[200px] xl:h-[600px] xl:w-[500px]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCards, Autoplay]}
            cardsEffect={{
              slideShadows: true,
              rotate: true,
              perSlideOffset: 8,
            }}
          >
            {slides.map(({ id, image, title, description }) => (
              <SwiperSlide key={id}>
                <div
                  className={cn(
                    "relative h-[300px] w-[250px] overflow-hidden rounded-xl after:absolute after:inset-0 after:z-10 after:bg-gradient-to-tr after:opacity-50 sm:h-[300px] sm:w-[200px] xl:h-[600px] xl:w-[500px]",
                    id % 2
                      ? "after:from-indigo-500 after:via-transparent after:to-purple-500"
                      : "after:from-red-500 after:via-transparent after:to-rose-500",
                  )}
                >
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={image}
                    alt={title}
                  />

                  <div className="relative z-20 flex h-full flex-col justify-end rounded-2xl p-6 text-white backdrop-blur-sm">
                    <h1 className="xs:text-2xl mb-2 text-lg font-bold lg:text-3xl">
                      {title}
                    </h1>
                    <p className="xs:text-xl text-xs leading-relaxed lg:text-2xl">
                      {description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {slides.map(({ id, image, title, description }) => (
              <SwiperSlide key={id}>
                <div
                  className={cn(
                    "relative h-[300px] w-[250px] overflow-hidden rounded-xl after:absolute after:inset-0 after:z-10 after:bg-gradient-to-tr after:opacity-50 sm:h-[300px] sm:w-[200px] xl:h-[600px] xl:w-[500px]",
                    id % 2
                      ? "after:from-indigo-500 after:via-transparent after:to-purple-500"
                      : "after:from-red-500 after:via-transparent after:to-rose-500",
                  )}
                >
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={image}
                    alt={title}
                  />

                  <div className="relative z-20 flex h-full flex-col justify-end rounded-2xl p-6 text-white backdrop-blur-sm">
                    <h1 className="xs:text-2xl mb-2 text-lg font-bold lg:text-3xl">
                      {title}
                    </h1>
                    <p className="xs:text-xl text-xs leading-relaxed lg:text-2xl">
                      {description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

//

export default Slider;
