import InformationCircle from "../icons/information-circle";
import CircleStack from "../icons/stack/circle-stack";
import Cloud from "../icons/stack/cloud";
import FingerPrint from "../icons/template/finger-print";
import LockClosed from "../icons/template/lock";

const blocks = [
  {
    id: 1,
    icon: Cloud,
    title: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  },
  {
    id: 2,
    icon: LockClosed,
    title: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  },
  {
    id: 3,
    icon: CircleStack,
    title: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  },
  {
    id: 4,
    icon: FingerPrint,
    title: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  },
];

const GridSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-roboto mb-4 text-xl! text-indigo-600!">
          Deploy faster
        </p>
        <h1 className="font-montserrat mb-8 w-5/10 text-6xl font-bold text-gray-800">
          Everything you need to deploy your app
        </h1>
        <p className="font-roboto mb-6 w-6/10 text-2xl! text-gray-600!">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>

        <ul className="mx-auto mt-20 grid w-7/10 grid-cols-2 gap-x-12 gap-y-16 text-left">
          {blocks.map(({ id, icon: Icon, title, description }) => (
            <li key={id} className="flex items-start gap-6">
              <figure className="rounded-lg bg-indigo-600 p-2">
                <Icon className="size-6 text-white" />
              </figure>
              <div>
                <p className="font-roboto text-lg text-gray-900">{title}</p>
                <p className="font-roboto text-lg text-gray-700">
                  {description}
                </p>

                <div className="flex justify-end">
                  <button className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-3 transition-colors duration-300 ease-in-out hover:bg-indigo-600/30">
                    <InformationCircle className="size-6 text-indigo-600!" />
                    <p className="font-roboto text-indigo-600">Read more</p>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GridSection;
