import { certificates } from "../../utils/data-certificates";
import CertificateItem from "../specials/certificate-item";

const CertificatesGrid = () => {
  return (
    <section className="mx-auto max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <ul className="mt-8 flex w-full flex-wrap justify-center gap-8">
          {certificates.map(({ id, name, image, link, description }) => (
            <CertificateItem
              key={id}
              name={name}
              image={image}
              link={link}
              description={description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificatesGrid;
