import image01 from "../../assets/template-images/template-image-1.jpg";
import image02 from "../../assets/template-images/template-image-2.jpg";
import image03 from "../../assets/template-images/template-image-3.jpg";
import image04 from "../../assets/template-images/template-image-4.jpg";

const LargeGallery = () => {
  return (
    <section className="flex h-auto w-full items-center justify-center">
      <div className="relative flex max-w-[1550px]">
        <div className="flex flex-col gap-8 mx-8">
          <div className="relative flex justify-end">
            <div className="glass-effect glass-main gradient-border-left-blue  rounded-2xl border-l-0! p-8 ">
              <h1 className="text-glow-blue animate-gradient gradient-text-blue mb-8 text-6xl leading-[1.2] font-bold">
                My Work
              </h1>
              <span className="space-y-6 text-xl text-black dark:text-white">
                <p>
                  Since the beginning of the summer of 2025, I have been working
                  at Hallwil, where I develop online stores for customers. This
                  is my first job, which has become an important stage in my
                  career development, has given me practical experience in
                  commercial activities and has taught me how to work
                  effectively in a team. While working with other developers,
                  project managers, designers, testers and team leaders, I have
                  significantly improved my communication skills and the ability
                  to solve problems effectively. I am not shy about asking for
                  help in difficult situations, which helps me find solutions
                  faster and maintain team efficiency.
                </p>
                <p>
                  Here I have gained valuable skills in correctly assessing
                  tasks and allocating time, which allows me to meet deadlines.
                  An important part of my progress has been my deep mastery of
                  the Git version control system, with which I now work
                  confidently. In addition, the work has given me an
                  understanding of the processes and stages of product
                  development in a team environment.
                </p>
                <p>
                  While working with other developers, project managers,
                  designers, testers and team leaders, I have significantly
                  improved my communication skills and the ability to solve
                  problems effectively. I am not shy about asking for help in
                  difficult situations, which helps me find solutions faster and
                  maintain team efficiency.
                </p>
              </span>
            </div>
            <figure className="gradient-border-blue animate-gradient gradient-glow-blue relative -right-40 w-5/10 rounded-2xl p-1">
              <img
                className="rounded-2xl object-cover"
                src={image01}
                alt="Image 1"
              />
            </figure>
          </div>

          <div className="relative -right-30 flex h-[400px] justify-end gap-8">
            <figure className="gradient-border-blue gradient-glow-blue animate-gradient absolute bottom-0 -left-96 flex h-[300px] w-[500px] items-end rounded-2xl p-1">
              <img
                className="h-[292px] w-full rounded-2xl object-cover"
                src={image02}
                alt="Image 2"
              />
            </figure>
            <figure className="gradient-border-blue animate-gradient gradient-glow-blue h-[400px] w-[700px] rounded-2xl p-1">
              <img
                className="h-[392px] w-full rounded-2xl object-cover"
                src={image03}
                alt="Image 3"
              />
            </figure>
            <figure className="gradient-border-blue animate-gradient gradient-glow-blue flex h-[300px] w-[400px] items-start rounded-2xl p-1">
              <img
                className="h-[292px] w-full rounded-2xl object-cover"
                src={image04}
                alt="Image 4"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeGallery;
