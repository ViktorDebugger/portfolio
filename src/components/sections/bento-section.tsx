import image01 from "/template-images/template-image-5.jpg";

const BentoSection = () => {
  return (
    <section className="my-16 flex w-full items-center justify-center">
      <div className="flex max-w-[1550px] flex-col justify-center px-4 md:px-8">
        <h1 className="animate-gradient gradient-text-red text-glow-red xs:text-3xl mb-10 text-center text-2xl leading-[1.2] font-bold! sm:text-4xl md:text-5xl">
          My Learning Workflow And Tools
        </h1>

        <div className="frid-rows-4 grid w-full grid-cols-1 gap-5 text-left md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
          <div className="glass-effect glass-main backdrop-blur-xl backdrop-saturate-200 gradient-border-left-blue col-span-1 row-span-1 rounded-tl-4xl! rounded-tr-4xl! rounded-br-xl! rounded-bl-xl! border-l-0! p-8 md:col-span-2 xl:col-span-1 xl:row-span-2 xl:rounded-tr-xl! xl:rounded-bl-4xl!">
            <figure className="w-full overflow-hidden rounded-2xl">
              <img
                className="h-[350px] w-full object-cover object-left xl:h-[600px]"
                src={image01}
                alt="Image 1"
              />
            </figure>
          </div>

          <div className="glass-effect glass-main backdrop-blur-xl backdrop-saturate-200 gradient-border-left-blue col-span-1 row-span-1 row-start-2 flex flex-col gap-5 rounded-xl! border-l-0! p-8 text-black xl:col-start-2 xl:row-start-1 dark:text-white">
            <h3 className="text-2xl font-bold">Documentation</h3>
            <p className="text-base sm:text-xl">
              The main source of knowledge for me is official documentation. It
              allows me to work with up-to-date information and better
              understand the tools I use. Documentation also helps me develop
              the skill of finding solutions on my own.
            </p>
          </div>

          <div className="glass-effect glass-main backdrop-blur-xl backdrop-saturate-200 gradient-border-left-red col-span-1 row-span-1 row-start-3 hidden flex-col gap-5 rounded-xl rounded-tr-xl border-l-0! p-8 text-black md:row-start-2 md:flex xl:col-start-3 xl:row-start-1 xl:rounded-tr-4xl dark:text-white">
            <h3 className="text-2xl font-bold">Tutorials and real projects</h3>
            <p className="text-base sm:text-xl">
              In addition, I actively use tutorials based on real projects. This
              gives me the opportunity to see the practical application of
              technologies and learn from examples from a real environment. This
              approach helps me consolidate knowledge faster and implement it in
              my own projects.
            </p>
          </div>

          <div className="glass-effect glass-main backdrop-blur-xl backdrop-saturate-200 gradient-border-left-blue col-span-1 row-span-1 row-start-3 flex flex-col gap-5 rounded-xl rounded-tr-xl border-l-0! p-8 text-black md:row-start-2 md:hidden xl:col-start-3 xl:row-start-1 xl:rounded-tr-4xl dark:text-white">
            <h3 className="text-2xl font-bold">Tutorials and real projects</h3>
            <p className="text-base sm:text-xl">
              In addition, I actively use tutorials based on real projects. This
              gives me the opportunity to see the practical application of
              technologies and learn from examples from a real environment. This
              approach helps me consolidate knowledge faster and implement it in
              my own projects.
            </p>
          </div>

          <div className="glass-effect glass-main backdrop-blur-xl backdrop-saturate-200 gradient-border-left-blue col-span-1 col-start-1 flex flex-col gap-5 rounded-xl rounded-br-4xl rounded-bl-4xl border-l-0! p-8 text-black md:col-span-2 xl:col-start-2 xl:rounded-bl-xl dark:text-white">
            <h3 className="text-2xl font-bold">Artificial Intelligence</h3>
            <p className="text-base sm:text-xl">
              I use AI in my teaching, particularly the Cursor environment. I
              set up the context to get relevant data, which makes the teaching
              more flexible and accurate. This allows me to not only speed up
              the process, but also integrate AI into my development. Thanks to
              this, I can understand complex technologies faster and test
              different approaches to solving problems. In addition, using AI
              helps me optimize workflows and make projects more modern and
              innovative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
