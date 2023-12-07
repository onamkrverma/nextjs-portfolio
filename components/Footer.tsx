import Button from "@components/Button";
import Typography from "@components/Typography";
import Image from "next/image";
import Link from "next/link";
import footerGradient from "../public/footerGradient.svg";

const Footer = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "#",
    },
    {
      title: "Projects",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
  ];
  const socialLinks = [
    {
      title: "Github",
      link: "#",
    },
    {
      title: "Linkedin",
      link: "#",
    },
  ];

  return (
    <footer className="relative mt-8 pb-8 ">
      <span className="w-full block border border-primary-300 mb-10"></span>
      <div className="container">
        <div className="flex justify-between gap-2">
          <div className="hidden sm:block">
            {/* logo */}
            <Button
              link="/"
              variant="icon"
              title="onam"
              className="!text-3xl !p-0 !font-bold"
            >
              {"<Onam/>"}
            </Button>
          </div>
          {/* footer links */}
          <div className="flex justify-between flex-col sm:flex-row gap-4 sm:gap-20 mr-4">
            <div className="flex flex-col gap-4">
              <Typography size="body1/semi-bold">Link</Typography>
              <ul className="flex flex-col gap-2">
                {navLinks.map((navLink, index) => (
                  <li key={index}>
                    <Link
                      href={navLink.link}
                      title={navLink.title}
                      className="text-primary-600 font-medium hover:text-primary-900"
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Typography size="body1/semi-bold">Social</Typography>
              <ul className="flex flex-col gap-2">
                {socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <Link
                      href={socialLink.link}
                      title={socialLink.title}
                      className="text-primary-600 font-medium hover:text-primary-900"
                    >
                      {socialLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="block sm:hidden my-8">
          {/* logo */}
          <Button
            link="/"
            variant="icon"
            title="onam"
            className="!text-3xl !p-0 !font-bold"
          >
            {"<Onam/>"}
          </Button>
        </div>
        <Typography
          size="small/normal"
          variant="secondary"
          className="mb-10 sm:mb-0"
        >
          © 2023 Onam kumar verma. All Rights Reserved.
        </Typography>
      </div>
      {/* background gradient */}
      <div className="w-full h-[500px] absolute bottom-0 right-0 -z-10 ">
        <Image
          src={footerGradient}
          alt="gradient"
          quality={100}
          fill
          sizes="100vw"
          className="w-full object-cover blur-2xl"
        />
      </div>
    </footer>
  );
};

export default Footer;
