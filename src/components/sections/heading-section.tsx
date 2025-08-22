interface HeadingSectionProps {
  title: string;
}

const HeadingSection = ({ title }: HeadingSectionProps) => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="border-b-2 border-gray-400 pb-4">
        <h2 className="font-montserrat text-3xl font-bold text-black">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default HeadingSection;
