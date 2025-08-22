import Envelope from "../icons/envelope";
import MapPin from "../icons/map-pin";
import Phone from "../icons/phone";
import { Input, Textarea } from "@headlessui/react";
import { Resend } from "resend";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useTransition } from "react";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

const contactSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition(); 

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      message: undefined,
    },
  });

  const sendEmail = async (data: ContactFormData) => {
    await resend.emails.send({
      from: data.email,
      to: "viktor.luka.dev@gmail.com",
      subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
  };

  const submit = async (values: ContactFormData) => {
    const validatedFields = contactSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    await sendEmail(values);

    return { success: "Mail send!" };
  };

  const onSubmit = (values: ContactFormData) => {
    setSuccess(undefined);
    setError(undefined);
    startTransition(() => {
      submit(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <section className="mx-auto max-w-[1440px] pt-4 pb-16">
      <div className="flex w-full items-center justify-between px-8">
        <div className="w-1/3">
          <h1 className="font-montserrat mb-6 text-5xl! font-bold text-gray-900">
            Get in touch
          </h1>
          <p className="font-roboto mb-10 text-lg text-gray-600">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
            sed malesuada et magna.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-4">
              <MapPin className="size-6 text-gray-600" />
              <p className="font-roboto text-lg text-gray-600">
                545 Mavis Island Chicago, IL 99191
              </p>
            </li>
            <li className="group flex gap-4">
              <Phone className="size-6 text-gray-600 group-hover:text-indigo-500!" />
              <a
                href="tel:+15552345678"
                className="text-lg text-gray-600! group-hover:text-indigo-500!"
              >
                +1 (555) 234-5678
              </a>
            </li>
            <li className="group flex gap-4">
              <Envelope className="size-6 text-gray-600 group-hover:text-indigo-500!" />
              <a
                href="mailto:hello@example.com"
                className="text-lg! text-gray-600! group-hover:text-indigo-500!"
              >
                viktor.luka.dev@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="h-full w-1/2 rounded-xl border-2 border-gray-300 p-8">
          <form className="space-y-6">
            <div className="flex gap-6">
              <div className="w-1/2">
                <label htmlFor="first-name">
                  <p className="font-roboto mb-2 text-gray-900">First name</p>
                </label>
                <Input
                  id="first-name"
                  name="first-name"
                  type="text"
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="last-name">
                  <p className="font-roboto mb-2 text-gray-900">Last name</p>
                </label>
                <Input
                  id="last-name"
                  name="last-name"
                  type="text"
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">
                <p className="font-roboto mb-2 text-gray-900">Email*</p>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone">
                <p className="font-roboto mb-2 text-gray-900">Phone</p>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone">
                <p className="font-roboto mb-2 text-gray-900">Message*</p>
              </label>
              <Textarea
                id="phone"
                name="phone"
                required
                className="h-40 w-full resize-none rounded-lg border-2 border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="flex w-full justify-end">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-indigo-400"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
