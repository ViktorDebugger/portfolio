import image01 from "/template-images/template-image-1.jpg";
import image02 from "/template-images/template-image-2.jpg";
import image03 from "/template-images/template-image-3.jpg";
import image04 from "/template-images/template-image-4.jpg";
import image05 from "/template-images/template-image-5.jpg";

const SmallGallery = () => {
  return (
    <section className="flex h-auto min-h-[800px]">
      <div className="relative mx-5 flex h-[1100px] max-w-[1550px] items-center justify-between sm:mx-8 sm:h-[800px] xl:items-center 2xl:mx-auto">
        <div className="glass-effect glass-main gradient-border-left-blue z-10 w-full rounded-2xl border-l-0! p-4 backdrop-blur-xl backdrop-saturate-200 lg:p-8 xl:w-2/3">
          <h1 className="animate-gradient gradient-text-blue text-glow-blue xs:text-4xl mb-6 text-2xl leading-[1.2] font-bold md:text-5xl xl:text-6xl">
            Studying In University
          </h1>
          <span className="space-y-6 text-lg text-black lg:text-2xl dark:text-white">
            <p>
              In 2023, I enrolled in the bachelor's program in Computer Science
              at the National University "Lviv Polytechnic". It was then that my
              active path in the field of programming began. First, I mastered
              the basics of programming, algorithms and data structures, as well
              as object-oriented programming (OOP).
            </p>
            <p>
              Over time, my studies smoothly transitioned to creating functional
              applications, working with databases and getting acquainted with
              the basics of computer networks. The next stage was web
              development, which I am currently actively studying, paying
              attention to both the client and server parts of web applications.
              Studying at the university formed in me the skill of
              self-education: I learned to work effectively with documentation,
              articles, tutorials, and also use artificial intelligence to learn
              and check relevant information.
            </p>
            <p>
              In addition to my core studies, I actively participate in
              university events: educational lectures, algorithm and
              cybersecurity competitions, career fairs. Such events give me the
              opportunity to communicate with company representatives, develop
              not only technical but also professional skills necessary for
              future career growth.
            </p>
          </span>
        </div>
        <div className="absolute top-10 w-full xl:top-50">
          <div className="absolute top-auto -right-40 grid grid-cols-3 gap-8 xl:-top-40">
            <div className="flex h-full flex-col justify-end gap-8">
              <figure>
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover p-1!"
                  src={image01}
                  alt="Image 1"
                />
              </figure>
            </div>
            <div className="relative -bottom-40 flex h-full flex-col gap-8">
              <figure>
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover p-1!"
                  src={image02}
                  alt="Image 2"
                />
              </figure>
              <figure>
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover p-1!"
                  src={image03}
                  alt="Image 3"
                />
              </figure>
            </div>
            <div className="flex h-full flex-col gap-8">
              <figure>
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover p-1!"
                  src={image04}
                  alt="Image 4"
                />
              </figure>
              <figure>
                <img
                  className="gradient-border-blue animate-gradient gradient-glow-blue h-72 w-60 rounded-2xl object-cover object-left p-1!"
                  src={image05}
                  alt="Image 5"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallGallery;
