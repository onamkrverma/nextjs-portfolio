"use client";
import { ThemeContext } from "@app/contex/ThemeContex";
import { poppins } from "@app/fonts";
import Button from "@components/Button";
import Typography from "@components/Typography";
import MoonIcon from "@public/icons/moon.svg";
import SunIcon from "@public/icons/sun.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#0D0D0D";
      document.body.style.color = "#fbfbfb";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#fbfbfb";
      document.body.style.color = "#0D0D0D";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Admin",
      link: "/dashboard",
    },
  ];
  const socialLinks = [
    {
      title: "Github",
      link: "https://github.com/onamkrverma",
    },
    {
      title: "Linkedin",
      link: "https://linkedin.com/in/onamkumarverma",
    },
  ];

  const currentPath = usePathname();

  return currentPath !== "/dashboard/login" ? (
    <footer className="container relative mt-8 pb-8 ">
      <span className="w-full block border border-primary-300 mb-10"></span>

      <div className="container">
        <div className="flex justify-between gap-2">
          <div className="hidden sm:block">
            {/* logo */}
            <Button
              link="/"
              variant="icon"
              title="onam"
              className={`!text-3xl dark:text-white !p-0 !font-bold ${poppins.className}`}
            >
              {"<Onam/>"}
            </Button>
          </div>
          {/* footer links */}
          <div className="flex justify-between flex-wrap gap-4 sm:gap-20 mr-4">
            <div className="flex flex-col gap-4">
              <Typography size="h6/semi-bold">Navigation</Typography>
              <ul className="flex flex-col gap-2">
                {navLinks.map((navLink, index) => (
                  <li key={index}>
                    <Link
                      href={navLink.link}
                      title={navLink.title}
                      className="text-primary-600 dark:text-primary-500 font-medium hover:text-primary-900 dark:hover:text-primary-300"
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Typography size="h6/semi-bold">Social</Typography>
              <ul className="flex flex-col gap-2">
                {socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <Link
                      href={socialLink.link}
                      title={socialLink.title}
                      className="text-primary-600 dark:text-primary-500 font-medium hover:text-primary-900 dark:hover:text-primary-300"
                    >
                      {socialLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start sm:hidden my-8">
          {/* logo */}
          <Button
            link="/"
            variant="icon"
            title="onam"
            className={`!text-3xl dark:text-white !p-0 !font-bold ${poppins.className}`}
          >
            {"<Onam/>"}
          </Button>
        </div>
        <div className="flex justify-between items-center gap-2 flex-wrap mb-16 sm:mb-0">
          <Typography size="small/normal" variant="secondary">
            © 2024 Onam kumar verma. All Rights Reserved.
          </Typography>
          <div className="flex items-center justify-between gap-1 py-0.5 px-[2px] border border-neutral-600 dark:border-neutral-300  rounded-xl">
            <Button
              type="button"
              variant="icon"
              title="dark Theme"
              onClick={() => setTheme("dark")}
              className={`gap-1 items-center capitalize !p-0 transition w-5 h-5 !rounded-full ${
                theme === "dark" ? "bg-amber-700 text-primary-50" : ""
              }`}
            >
              <MoonIcon
                className={`w-3 h-3 ${theme === "dark" ? "stroke-2" : ""}`}
              />
            </Button>
            <Button
              type="button"
              variant="icon"
              title="light Theme"
              onClick={() => setTheme("light")}
              className={`gap-1 items-center capitalize w-5 h-5 !p-0 transition !rounded-full ${
                theme === "light" ? "bg-amber-700 text-primary-50" : ""
              }`}
            >
              <SunIcon
                className={`w-4 h-4 ${theme === "light" ? "stroke-2" : ""}`}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* background gradient */}
      <div className="absolute bottom-0 h-48 w-[90%] -z-10  flex items-center justify-center rounded-full">
        <span className="bg-custom_gradient block w-3/4 h-full blur-3xl rotate-180" />
      </div>
      <Typography
        size="small/normal"
        variant="secondary"
        className="text-center"
      >
        UI Design by{" "}
        <a
          href="https://www.figma.com/community/file/1266863403759514317"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Eihab Khan
        </a>{" "}
        and Develop by{" "}
        <a
          href="https://linkedin.com/in/onamkumarverma"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Onamkrverma
        </a>
      </Typography>
    </footer>
  ) : null;
};

export default Footer;
