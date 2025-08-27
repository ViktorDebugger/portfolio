import { certificates } from "../../data/certificates";
import CertificateItem from "../specials/certificate-item";

const CertificatesGrid = () => {
  return (
    <section className="mx-auto max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <ul className="mt-8 flex w-full flex-wrap justify-center gap-8">
          {certificates.map((certificate) => (
            <CertificateItem
              key={certificate.id}
              name={certificate.name}
              image={certificate.image}
              link={certificate.link}
              description={certificate.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificatesGrid;
