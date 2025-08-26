import image01 from "../../assets/template-images/template-image-1.jpg";
import image02 from "../../assets/template-images/template-image-2.jpg";
import image03 from "../../assets/template-images/template-image-3.jpg";
import image04 from "../../assets/template-images/template-image-4.jpg";

const LargeGallery = () => {
  return (
    <section className="flex flex-col gap-8 overflow-hidden px-4 pt-0 pb-16 md:px-8 md:pt-16">
      <div className="relative mx-auto flex max-w-[1550px] flex-col-reverse gap-6 lg:flex-row">
        <div className="glass-effect glass-main gradient-border-left-blue relative z-20 w-full rounded-2xl border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200 md:p-8 lg:w-7/10">
          <h1 className="animate-gradient gradient-text-blue text-glow-blue xs:text-4xl mb-6 text-2xl leading-[1.2] font-bold md:text-5xl xl:text-6xl">
            My Work
          </h1>
          <span className="space-y-6 text-xl text-black dark:text-white">
            <p>
              Since the beginning of the summer of 2025, I have been working at
              Hallwil, where I develop online stores for customers. This is my
              first job, which has become an important stage in my career
              development, has given me practical experience in commercial
              activities and has taught me how to work effectively in a team.
              While working with other developers, project managers, designers,
              testers and team leaders, I have significantly improved my
              communication skills and the ability to solve problems
              effectively. I am not shy about asking for help in difficult
              situations, which helps me find solutions faster and maintain team
              efficiency.
            </p>
            <p>
              Here I have gained valuable skills in correctly assessing tasks
              and allocating time, which allows me to meet deadlines. An
              important part of my progress has been my deep mastery of the Git
              version control system, with which I now work confidently. In
              addition, the work has given me an understanding of the processes
              and stages of product development in a team environment.
            </p>
            <p>
              While working with other developers, project managers, designers,
              testers and team leaders, I have significantly improved my
              communication skills and the ability to solve problems
              effectively. I am not shy about asking for help in difficult
              situations, which helps me find solutions faster and maintain team
              efficiency.
            </p>
          </span>
        </div>

        <figure className="relative -bottom-30 left-auto lg:absolute lg:bottom-0 lg:left-1/2">
          <img
            className="gradient-border-blue animate-gradient gradient-glow-blue w-full rounded-2xl object-cover p-1 sm:w-6/10 lg:w-full"
            src={image01}
            alt="Image 1"
          />
        </figure>
      </div>

      <div className="flex h-[400px] w-[1660px] items-end gap-8">
        <div className="flex items-start gap-8">
          <figure>
            <img
              className="gradient-border-blue gradient-glow-blue animate-gradient flex h-[300px] w-[500px] items-end rounded-2xl object-cover p-1"
              src={image02}
              alt="Image 2"
            />
          </figure>
          <figure>
            <img
              className="gradient-border-blue animate-gradient gradient-glow-blue h-[400px] w-[700px] rounded-2xl object-cover p-1"
              src={image03}
              alt="Image 3"
            />
          </figure>
        </div>
        <figure>
          <img
            className="gradient-border-blue animate-gradient gradient-glow-blue flex h-[300px] w-[500px] items-start rounded-2xl object-cover p-1"
            src={image04}
            alt="Image 4"
          />
        </figure>
      </div>
    </section>
  );
};

export default LargeGallery;
