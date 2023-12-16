"use client";
import Link from "next/link";
import Button from "@components/Button";
import { usePathname } from "next/navigation";
import { poppins } from "@app/fonts";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@app/contex/ThemeContex";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
    },
    {
      title: "About",
      link: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Projects",
      link: "/projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>
      ),
    },
    {
      title: "Contact",
      link: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
    },
  ];

  const currentPath = usePathname();
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#0D0D0D";
    } else {
      document.documentElement.classList.remove("dark");

      document.body.style.background = "#fbfbfb";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return currentPath !== "/dashboard/login" ? (
    <>
      <header
        className={`hidden sm:block bg-white/25 border-white/50 rounded-xl border backdrop-blur-md dark:bg-primary-900/30 dark:border-white/20 `}
      >
        <nav className="flex items-center justify-between  p-4">
          <div className="flex items-center gap-8">
            {/* logo */}
            <Button
              link="/"
              variant="icon"
              title="onam"
              className={`!text-2xl !p-0 dark:text-white !font-bold ${poppins.className} `}
            >
              {"<Onam/>"}
            </Button>
            <div className="flex items-center gap-4">
              {navLinks.map((navLink, index) => (
                <Link
                  key={index}
                  href={navLink.link}
                  title={navLink.title}
                  className="text-primary-600 dark:text-primary-50 font-medium hover:text-primary-900"
                >
                  {navLink.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-50">
            <div className="flex items-center border-r border-primary-700">
              <Button link={"#"} variant="icon" title="Linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.556 21.9979H2.44792C1.09813 21.9979 0.00390625 20.9037 0.00390625 19.5539V2.44584C0.00390625 1.09605 1.09813 0.00183105 2.44792 0.00183105H19.556C20.9058 0.00183105 22 1.09605 22 2.44584V19.5539C22 20.9037 20.9058 21.9979 19.556 21.9979ZM15.6797 18.9429H18.9438V12.2376C18.9438 9.40045 17.3355 8.02868 15.0891 8.02868C12.8417 8.02868 11.8959 9.7788 11.8959 9.7788V8.35224H8.75023V18.9429H11.8959V13.3835C11.8959 11.8938 12.5816 11.0074 13.8941 11.0074C15.1005 11.0074 15.6797 11.8592 15.6797 13.3835V18.9429ZM3.05773 5.01118C3.05773 6.0904 3.92598 6.96547 4.99746 6.96547C6.06894 6.96547 6.93668 6.0904 6.93668 5.01118C6.93668 3.93195 6.06894 3.05688 4.99746 3.05688C3.92598 3.05688 3.05773 3.93195 3.05773 5.01118ZM6.65329 18.9429H3.37317V8.35224H6.65329V18.9429Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
              <Button link={"#"} variant="icon" title="Github">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1015_5621)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9642 0C5.34833 0 0 5.38776 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6296 8.97331 21.6718 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41723 17.8401 3.62474 17.4811 3.62474 17.4811C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33927 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81323 9.01984 5.56604 8.1818C5.44727 7.88253 5.03118 6.64506 5.68506 4.98882C5.68506 4.98882 6.69527 4.66947 8.97306 6.22604C9.94827 5.9622 10.954 5.82799 11.9642 5.82686C12.9745 5.82686 14.0042 5.96669 14.9552 6.22604C17.2332 4.66947 18.2434 4.98882 18.2434 4.98882C18.8973 6.64506 18.481 7.88253 18.3622 8.1818C19.1349 9.01984 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38776 18.5603 0 11.9642 0Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1015_5621">
                      <rect width="24" height="23.5102" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
            <Button
              type="button"
              variant="icon"
              title="Change Theme"
              onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
              }
              className="transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 block dark:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hidden dark:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </Button>
          </div>
        </nav>
      </header>
      {/* for mobile navigation */}
      <nav className=" sm:hidden block w-full fixed bottom-0 right-0 z-10">
        <div className="flex items-center justify-evenly gap-2 p-2 bg-primary-600/30 dark:bg-primary-900/60  rounded-xl border border-white/50 backdrop-blur-md mx-4 mb-2">
          {navLinks.map((item, index) => (
            <Button
              key={index}
              link={item.link}
              variant="icon"
              title={item.title}
              className={`!rounded-lg px-3 dark:text-primary-300 ${
                currentPath === item.link ? "bg-primary-600 !text-white" : ""
              }`}
            >
              {item.icon}
            </Button>
          ))}
        </div>
      </nav>
    </>
  ) : null;
};

export default Navbar;
