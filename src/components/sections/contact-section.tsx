import Envelope from "../icons/envelope";
import MapPin from "../icons/map-pin";
import Phone from "../icons/phone";
import { Input, Textarea } from "@headlessui/react";
import { Resend } from "resend";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useTransition } from "react";
import { cn } from "../../utils/utils";
import { useTheme } from "../../context/theme-context";

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
  const { theme } = useTheme();

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
    <section className="mb-12 flex h-auto w-full items-center justify-center">
      <div className="mx-4 sm:mx-8 flex w-full max-w-[1550px] flex-col items-center justify-between gap-4 xl:flex-row">
        <div className="gradient-glow-red glass-effect glass-main gradient-border-left-red w-full rounded-2xl border-l-0 px-6 py-8 md:p-16 xl:w-1/2 2xl:w-[550px]">
          <h1 className="text-glow-red gradient-text-red animate-gradient mb-6 text-4xl md:text-5xl font-bold">
            Contact Me
          </h1>
          <p className="mb-10 text-lg text-black dark:text-white">
            I am always open to new opportunities and collaborations. If you
            have any questions or want to work together, please contact me.
          </p>

          <ul className="space-y-3 text-black dark:text-white">
            <li className="flex gap-4">
              <MapPin className="size-6" />
              <p className="text-lg">
                Ukraine, Lviv
              </p>
            </li>
            <li className="group flex gap-4">
              <Phone className="size-6 group-hover:text-rose-500" />
              <a
                href="tel:+15552345678"
                className="text-lg group-hover:text-rose-500"
              >
                +1 (555) 234-5678
              </a>
            </li>
            <li className="group flex gap-4">
              <Envelope className="size-6 group-hover:text-rose-500" />
              <a
                href="mailto:hello@example.com"
                className="text-lg group-hover:text-rose-500"
              >
                viktor.luka.dev@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="glass-effect glass-main gradient-border-left-red gradient-glow-red h-full w-full rounded-2xl border-l-0 p-8 xl:w-1/2">
          <form className="space-y-6 text-black dark:text-white">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label htmlFor="first-name">
                  <p className="mb-2">First name</p>
                </label>
                <Input
                  id="first-name"
                  name="first-name"
                  type="text"
                  className="w-full rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="last-name">
                  <p className="mb-2 text-black dark:text-white">Last name</p>
                </label>
                <Input
                  id="last-name"
                  name="last-name"
                  type="text"
                  className="w-full rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">
                <p className="mb-2 text-black dark:text-white">Email*</p>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="phone">
                <p className="mb-2 text-black dark:text-white">Phone</p>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="phone">
                <p className="mb-2 text-black dark:text-white">Message*</p>
              </label>
              <Textarea
                id="phone"
                name="phone"
                required
                className="h-40 w-full resize-none rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
              />
            </div>
            <div className="flex w-full justify-end">
              <button
                type="submit"
                className={cn(
                  "button-colors-red flex cursor-pointer items-center justify-center gap-2 rounded-lg px-8 py-3 w-full sm:w-auto",
                  theme,
                )}
              >
                <Envelope className="size-6" />
                <p className="text-lg font-semibold">Send message</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
