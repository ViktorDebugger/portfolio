import ArrowRight from "../icons/arrow-right";
import imageTemplate from "../../assets/template-images/template-image-5.jpg";

const list = [
  {
    id: 1,
    title: "Full-time designer",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
    salary: "$75,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    title: "Laravel developer",
    description:
      "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
    salary: "$125,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    title: "React Native developer",
    description:
      "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
    salary: "$105,000 USD",
    location: "San Francisco, CA",
  },
];

const ContentSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="mb-8 w-5/10">
        <h2 className="font-montserrat mb-6 text-5xl font-bold text-gray-900">
          We’re always looking for awesome people to join us
        </h2>
        <p className="font-roboto text-2xl text-gray-600">
          Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod
          lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <figure className="w-5/10">
          <img
            className="h-[700px] rounded-2xl object-cover object-left"
            src={imageTemplate}
            alt="Content image"
          />
        </figure>
        <div className="relative bottom-10 w-4/10">
          <ul className="mb-32 flex flex-col gap-20">
            {list.map(({ id, title, description, salary, location }) => (
              <li key={id}>
                <button className="cursor-pointer text-left">
                  <p className="font-roboto mb-4 text-2xl text-gray-900">
                    {title}
                  </p>
                  <p className="font-roboto mb-6 text-lg text-gray-600">
                    {description}
                  </p>
                  <div className="flex items-center gap-10">
                    <p className="font-roboto text-lg text-gray-900">
                      {salary}
                    </p>
                    <p className="font-roboto text-lg text-gray-500">
                      {location}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <button className="group flex cursor-pointer items-center gap-2">
            <p className="font-roboto text-lg text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-indigo-400!">
              See all openings
            </p>
            <ArrowRight className="size-6 text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-indigo-400!" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
