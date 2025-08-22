import templateImage from "../../assets/template-images/template-image-5.jpg";
import Cloud from "../icons/stack/cloud";
import LockClosed from "../icons/template/lock";
import CircleStack from "../icons/stack/circle-stack";

const list = [
  {
    id: 1,
    icon: Cloud,
    title: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: 2,
    icon: LockClosed,
    title: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  },
  {
    id: 3,
    icon: CircleStack,
    title: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    id: 4,
    icon: LockClosed,
    title: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  },
];

const FeatureSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="flex items-center justify-between">
        <figure className="w-[55%]">
          <img
            className="h-[750px] w-full rounded-2xl object-cover object-left"
            src={templateImage}
            alt="Template image"
          />
        </figure>
        <div className="w-[40%]">
          <p className="font-roboto mb-4 text-lg text-indigo-600">
            Deploy faster
          </p>
          <h1 className="font-montserrat mb-10 text-5xl font-bold">
            A better workflow
          </h1>
          <p className="font-roboto mb-10 text-[22px] text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis ratione.
          </p>
          <ul className="space-y-6">
            {list.map(({ id, icon: Icon, title, description }) => (
              <li key={id} className="flex gap-2">
                <Icon className="size-6 text-indigo-600" />
                <div className="w-9/10">
                  <p className="font-roboto text-lg text-gray-950">
                    <span className="font-bold text-black!">{title}</span>
                    <span> {description}</span>
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
