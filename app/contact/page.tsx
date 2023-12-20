"use client";
import Button from "@components/Button";
import Input from "@components/Input";
import Textbox from "@components/Textbox";
import Typography from "@components/Typography";
import { ChangeEvent, useRef, useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const socialLinks = [
    {
      title: "Linkedin",
      link: "https://linkedin.com/in/onamkumarverma",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 22"
          fill="none"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.556 21.9979H2.44792C1.09813 21.9979 0.00390625 20.9037 0.00390625 19.5539V2.44584C0.00390625 1.09605 1.09813 0.00183105 2.44792 0.00183105H19.556C20.9058 0.00183105 22 1.09605 22 2.44584V19.5539C22 20.9037 20.9058 21.9979 19.556 21.9979ZM15.6797 18.9429H18.9438V12.2376C18.9438 9.40045 17.3355 8.02868 15.0891 8.02868C12.8417 8.02868 11.8959 9.7788 11.8959 9.7788V8.35224H8.75023V18.9429H11.8959V13.3835C11.8959 11.8938 12.5816 11.0074 13.8941 11.0074C15.1005 11.0074 15.6797 11.8592 15.6797 13.3835V18.9429ZM3.05773 5.01118C3.05773 6.0904 3.92598 6.96547 4.99746 6.96547C6.06894 6.96547 6.93668 6.0904 6.93668 5.01118C6.93668 3.93195 6.06894 3.05688 4.99746 3.05688C3.92598 3.05688 3.05773 3.93195 3.05773 5.01118ZM6.65329 18.9429H3.37317V8.35224H6.65329V18.9429Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Github",
      link: "https://github.com/onamkrverma",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>{" "}
        </svg>
      ),
    },
  ];

  const handleSend = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);
    try {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const formDataObj = Object.fromEntries(formData.entries());
        const { name, email, subject, message } = formDataObj;
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        });
        const data = await response.json();

        if (response.status !== 200) {
          throw new Error("Failed to send mail");
        }
        setStatusMessage({
          variant: "success",
          message: "Mail send successfully",
        });
        e.target?.reset();
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setStatusMessage({ variant: "error", message: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="flex flex-col gap-2  my-12">
        <Typography size="h3/semi-bold" className="!text-3xl sm:text-4xl">
          Get in touch
        </Typography>
        <Typography size="body2/normal" variant="secondary">
          Let’s build something awesome.
        </Typography>
      </div>
      <span className="w-full block border border-primary-300 absolute right-0"></span>
      <section className="flex flex-col  gap-4  mt-20 my-4 p-4 bg-primary-100 dark:bg-primary-800 shadow-lg rounded-2xl">
        <Typography
          size="body1/semi-bold"
          className="text-center border-b border-primary-400 pb-2"
        >
          New message
        </Typography>
        <form
          method="POST"
          className="flex flex-col gap-2"
          ref={formRef}
          onSubmit={handleSend}
        >
          <div className="flex justify-between gap-4 flex-col sm:flex-row items-center">
            <Input
              name="name"
              type="text"
              label="Name"
              minLength={3}
              required
            />
            <Input
              name="email"
              type="email"
              label="Email"
              minLength={3}
              required
            />
          </div>
          <Input
            name="subject"
            type="text"
            label="Subject"
            minLength={5}
            required
          />
          <Textbox label="Message" name="message" minLength={10} required />
          <div className="flex justify-end gap-4 items-center mt-4">
            <Button type="reset" title="Reset" variant="danger">
              Rest
            </Button>
            <Button
              type="submit"
              title="Send"
              variant={"primary"}
              disabled={isLoading}
              className="!bg-primary-700"
            >
              {isLoading ? "Please wait..." : "Send"}
            </Button>
          </div>
          {statusMessage ? (
            <Typography
              variant={statusMessage.variant}
              className="my-4 text-center dark:bg-primary-200"
            >
              {statusMessage.variant === "error" ? "❌" : "✅"}{" "}
              {statusMessage.message}
            </Typography>
          ) : null}
        </form>
      </section>
      <div className="flex justify-center items-center gap-4 my-4 text-primary-600 dark:text-primary-400">
        {socialLinks.map((social, index) => (
          <Button
            key={index}
            link={social.link}
            variant="icon"
            title={social.title}
            className="hover:bg-primary-800 p-3 transition hover:text-white"
          >
            {social.icon}
          </Button>
        ))}
      </div>
    </main>
  );
};

export default Contact;
