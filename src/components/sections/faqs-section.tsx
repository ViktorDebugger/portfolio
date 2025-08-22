import Minus from "../icons/minus";
import Plus from "../icons/plus";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const faqs = [
  {
    id: 1,
    question: "Is team pricing available?",
    answer:
      "Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    id: 2,
    question: "Can I use the product for commercial projects?",
    answer:
      "Absolutely! All licenses allow usage in both personal and commercial projects.",
  },
  {
    id: 3,
    question: "Do you offer customer support?",
    answer:
      "Yes, our support team is available via email and chat to help you with any questions.",
  },
  {
    id: 4,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try all features for free for 14 days before making a purchase.",
  },
  {
    id: 5,
    question: "How do I request a refund?",
    answer:
      "You can request a refund within 30 days of purchase by contacting our support team.",
  },
];
const FAQSSection = () => {
  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="mx-auto w-1/2 text-center">
        <h1 className="mb-4 text-5xl text-gray-900 font-montserrat font-bold">
          Frequently asked questions
        </h1>
        <p className="text-xl text-gray-600 font-roboto">
          <span>
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by
          </span>
          <button onClick={scrollToFooter} className="mx-1 cursor-pointer text-indigo-600 transition-colors duration-300 ease-in-out hover:text-indigo-400">
            sending us an email
          </button>
          <span>and we’ll get back to you as soon as we can.</span>
        </p>
      </div>

      <ul className="mx-auto mt-20 w-9/10 space-y-8">
        {faqs.map(({ id, question, answer }) => (
          <li key={id}>
            <Disclosure
              as="div"
              className="group border-b border-gray-400 pb-8"
            >
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full cursor-pointer justify-between">
                    <p className="text-xl text-gray-900 font-roboto">
                      {question}
                    </p>
                    {open ? (
                      <Minus className="size-6" />
                    ) : (
                      <Plus className="size-6" />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel className="mt-4 text-xl! text-gray-600!">
                    {answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQSSection;
