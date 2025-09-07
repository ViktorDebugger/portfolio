import Envelope from "../icons/envelope";
import MapPin from "../icons/map-pin";
import Phone from "../icons/phone";
import { Input, Textarea } from "@headlessui/react";
import { Resend } from "resend";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useTransition, useRef } from "react";
import { cn } from "../../tools/utils";
import { useTheme } from "../../context/theme-context";
import { motion, useInView } from "motion/react";

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
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
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
    form.reset();

    return { success: "Mail send successfully!" };
  };

  const onSubmit = (values: ContactFormData) => {
    setSuccess("");
    setError("");
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
    <section
      ref={ref}
      className="mb-12 flex h-auto w-full items-center justify-center"
    >
      <div className="mx-4 flex w-full max-w-[1550px] flex-col items-center justify-between gap-4 sm:mx-8 xl:flex-row">
        <div className="flex flex-col">
          <motion.div
            className="glass-effect glass-main mr-auto mb-6 inline-block rounded-2xl px-6 py-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-glow-red gradient-text-red animate-gradient text-4xl font-bold md:text-5xl">
              Contact Me
            </h1>
          </motion.div>
          <motion.div
            className="gradient-glow-red glass-effect glass-main gradient-border-left-red w-full rounded-2xl border-l-0! px-6 py-8 backdrop-blur-xl backdrop-saturate-200 md:p-16 xl:w-1/2 2xl:w-[550px]"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <p className="mb-10 text-lg text-black dark:text-white">
              I am always open to new opportunities and collaborations. If you
              have any questions or want to work together, please contact me.
            </p>

            <ul className="space-y-3 text-black dark:text-white">
              <li className="flex gap-4">
                <MapPin className="size-6" />
                <p className="text-lg">Ukraine, Lviv</p>
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
          </motion.div>
        </div>

        <motion.div
          className="glass-effect glass-main gradient-border-left-red gradient-glow-red h-full w-full rounded-2xl border-l-0 p-8 backdrop-blur-xl backdrop-saturate-200 xl:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-black dark:text-white"
          >
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label htmlFor="first-name">
                  <p className="mb-2">First name</p>
                </label>
                <Input
                  id="first-name"
                  type="text"
                  {...form.register("firstName")}
                  disabled={isPending}
                  className="w-full rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
                />
                {form.formState.errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {form.formState.errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="last-name">
                  <p className="mb-2 text-black dark:text-white">Last name</p>
                </label>
                <Input
                  id="last-name"
                  type="text"
                  {...form.register("lastName")}
                  disabled={isPending}
                  className="w-full rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
                />
                {form.formState.errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">
                    {form.formState.errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email">
                <p className="mb-2 text-black dark:text-white">Email*</p>
              </label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                disabled={isPending}
                className="w-full rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
              />
              {form.formState.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone">
                <p className="mb-2 text-black dark:text-white">Phone</p>
              </label>
              <Input
                id="phone"
                type="tel"
                disabled={isPending}
                {...form.register("phone")}
                className="w-full rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
              />
              {form.formState.errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone">
                <p className="mb-2 text-black dark:text-white">Message*</p>
              </label>
              <Textarea
                id="message"
                {...form.register("message")}
                disabled={isPending}
                className="h-40 w-full resize-none rounded-lg border-2 border-black/60 px-4 py-2 text-base focus:border-black focus:outline-none dark:border-white/60 dark:focus:border-white"
              />
              {form.formState.errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-4 sm:flex-row">
              {error && (
                <div className="mb-2 w-full flex-1 rounded-md bg-rose-500/50 p-1 text-center text-lg text-rose-700">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-2 w-full flex-1 rounded-md bg-emerald-500/50 p-1 text-center text-lg text-emerald-700">
                  {success}
                </div>
              )}
              <button
                type="submit"
                disabled={isPending}
                className={cn(
                  "button-colors-red flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-8 py-3 sm:w-auto",
                  theme,
                )}
              >
                <Envelope className="size-6" />
                <p className="text-lg font-semibold">Send message</p>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
