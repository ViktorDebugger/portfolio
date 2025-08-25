import image from "./../../assets/hero-images/red-image.jpg";
import Bolt from "../icons/bolt";
import BookOpen from "../icons/book-open";
import Check from "../icons/check";
import ArrowRightLeft from "../icons/arrow-right-left";

const list = [
  {
    id: 1,
    icon: Check,
    title: "Discipline.",
    description:
      "Ability to organize one's own time and effectively complete tasks, adhering to deadlines and priorities.",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Learning.",
    description:
      "Continuous development and acquisition of new knowledge in the field of computer science, modern technologies and practical skills.",
  },
  {
    id: 3,
    icon: ArrowRightLeft,
    title: "Flexability.",
    description:
      "Rapid adaptation to new conditions, technologies and project requirements to achieve better results.",
  },
  {
    id: 4,
    icon: Bolt,
    title: "Activity.",
    description:
      "Participation in academic and extracurricular initiatives, project work, and professional development.",
  },
];

const FeatureSection = () => {
  return (
    <section className="flex h-auto w-full items-center justify-center">
      <div className="mx-5 flex max-w-[1550px] items-end justify-between lg:mx-16">
        <figure className="hidden w-6/10 xl:block xl:w-[48%]">
          <img
            className="gradient-border-red animate-gradient gradient-glow-red h-auto w-full rounded-2xl object-cover object-left p-2"
            src={image}
            alt="Feature image"
          />
        </figure>
        <div className="relative left-0 w-full xl:-left-30">
          <div className="flex flex-col gap-0 md:flex-row md:gap-10">
            <div className="glass-effect glass-main gradient-border-left-red mb-10 rounded-4xl border-l-0! p-8 w-full xl:w-8/10">
              <h1 className="gradient-text-red animate-gradient text-glow-red mb-4 text-3xl font-bold md:text-5xl">
                About Me
              </h1>
              <span className="xs:text-lg space-y-2 text-base text-black lg:text-xl dark:text-white">
                <p>
                  I am Luka Viktor, a 3rd year student of Computer Science at
                  the Lviv Polytechnic National University. In parallel with my
                  studies, I am engaged in fullstack web development and work at
                  Halwil as a Trainee Shopify Developer. Hallwil specializes in
                  creating modern e-commerce solutions for businesses around the
                  world, in particular online stores on the Shopify platform.
                </p>
                <p>
                  Thanks to this, I gain practical experience in website
                  development. I develop my own projects, where I learn to
                  develop client and server parts using various technologies and
                  integrate third-party services to increase the efficiency and
                  stability of projects.
                </p>
              </span>
            </div>

            <figure className="mx-auto mb-10 block max-w-8/10 sm:max-w-6/10 md:max-w-4/10 xl:hidden">
              <img
                className="gradient-border-red animate-gradient gradient-glow-red h-auto w-full rounded-2xl object-cover object-left p-2"
                src={image}
                alt="Feature image"
              />
            </figure>
          </div>

          <h1 className="gradient-text-red animate-gradient text-glow-red mb-4 text-center text-3xl font-bold">
            My main skills
          </h1>
          <ul className="space-y-2">
            {list.map(({ id, icon: Icon, title, description }) => (
              <li
                key={id}
                className="glass-effect glass-main gradient-border-left-red flex items-start gap-2 rounded-2xl! border-l-0! p-4"
              >
                <div className="glass-effect glass-main rounded-lg p-2 text-rose-600 sm:rounded-xl">
                  <Icon className="relative -left-[1px] size-6 sm:size-8 md:-left-0" />
                </div>

                <div className="w-full lg:w-9/10">
                  <p className="text-base text-black sm:text-lg lg:text-xl dark:text-white">
                    <span className="pr-2 font-bold">{title}</span>
                    <span>{description}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
