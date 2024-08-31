import HtmlIcon from "@public/icons/html.svg";
import CssIcon from "@public/icons/css.svg";
import JSIcon from "@public/icons/javascript.svg";
import BootstapIcon from "@public/icons/bootstrap.svg";
import TailwindCssIcon from "@public/icons/tailwindCss.svg";
import GithubIcon from "@public/icons/github.svg";
import ReactIcon from "@public/icons/reactjs.svg";
import FirebaseIcon from "@public/icons/firebase.svg";
import TypescriptIcon from "@public/icons/typescript.svg";
import VscodeIcon from "@public/icons/vscode.svg";
import NetlifyIcon from "@public/icons/netlify.svg";
import VercelIcon from "@public/icons/vercel.svg";
import AstrojsIcon from "@public/icons/astrojs.svg";
import NextjsIcon from "@public/icons/nextjs.svg";
import NodjejsIcon from "@public/icons/nodejs.svg";
import MongodbIcon from "@public/icons/mongodb.svg";
import ExpressjsIcon from "@public/icons/expressjs.svg";

export const TechStackList = [
  {
    id: 0,
    title: "HTML5",
    icon: <HtmlIcon className="w-12 h-12 sm:w-24 sm:h-24 fill-red-500" />,
    subtitle: "html",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 1,
    title: "CSS3",
    icon: <CssIcon className="w-12 h-12 sm:w-24 sm:h-24 fill-blue-600" />,
    subtitle: "css",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 2,
    title: "JavaScript",
    icon: <JSIcon className="w-12 h-12 sm:w-24 sm:h-24 fill-amber-300" />,
    subtitle: "programming language",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 3,
    title: "Bootstrap",
    icon: (
      <BootstapIcon className="w-12 h-12 sm:w-24 sm:h-24 fill-violet-600" />
    ),
    subtitle: "css framework",
    link: "https://getbootstrap.com/",
  },
  {
    id: 4,
    title: "TailwindCSS",
    icon: (
      <TailwindCssIcon className="w-12 h-12 sm:w-24 sm:h-24  fill-sky-500 " />
    ),
    subtitle: "css framework",
    link: "https://tailwindcss.com/",
  },

  {
    id: 5,
    title: "GitHub",
    icon: (
      <GithubIcon className="w-12 h-12 sm:w-24 sm:h-24  fill-black dark:fill-primary-50" />
    ),
    subtitle: "Version Control",
    link: "https://github.com/",
  },
  {
    id: 6,
    title: "React js",
    icon: <ReactIcon className="w-12 h-12 sm:w-24 sm:h-24  fill-sky-600" />,
    subtitle: "JavaScript Library",
    link: "https://react.dev/",
  },
  {
    id: 7,
    title: "Firebase",
    icon: (
      <FirebaseIcon className="w-12 h-12 sm:w-24 sm:h-24  fill-amber-300" />
    ),
    subtitle: "BAAS",
    link: "https://firebase.google.com/",
  },
  {
    id: 8,
    title: "TypeScript",
    icon: <TypescriptIcon className="w-12 h-12 sm:w-24 sm:h-24 " />,
    subtitle: "programming language",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 9,
    title: "VSCode",
    icon: <VscodeIcon className="w-12 h-12 sm:w-24 sm:h-24  fill-sky-600" />,
    subtitle: "editor",
    link: "https://code.visualstudio.com/",
  },
  {
    id: 10,
    title: "Netlify",
    icon: <NetlifyIcon className="w-12 h-12 sm:w-24 sm:h-24 " />,
    subtitle: "deployment",
    link: "https://www.netlify.com/",
  },
  {
    id: 11,
    title: "Vercel",
    icon: <VercelIcon className="w-12 h-12 sm:w-24 sm:h-24 " />,
    subtitle: "deployment",
    link: "https://vercel.com/",
  },

  {
    id: 12,
    title: "Node.js",
    icon: <NodjejsIcon className="w-12 h-12 sm:w-24 sm:h-24 text-green-800 " />,
    subtitle: "JS runtime env.",
    link: "https://nodejs.org/en",
  },
  {
    id: 13,
    title: "Express.js",
    icon: <ExpressjsIcon className="w-12 h-12 sm:w-24 sm:h-24" />,
    subtitle: "Node.js web framework",
    link: "https://expressjs.com/",
  },
  {
    id: 14,
    title: "MongoDb",
    icon: <MongodbIcon className="w-12 h-12 sm:w-24 sm:h-24 text-green-800 " />,
    subtitle: "NoSQL database",
    link: "https://www.mongodb.com/",
  },
  {
    id: 15,
    title: "Astro.js",
    icon: (
      <AstrojsIcon className="w-12 h-12 sm:w-24 sm:h-24 dark:fill-white " />
    ),
    subtitle: "web framework",
    link: "https://astro.build/",
  },
  {
    id: 16,
    title: "Next.js",
    icon: <NextjsIcon className="w-12 h-12 sm:w-24 sm:h-24" />,
    subtitle: "web framework",
    link: "https://nextjs.org/",
  },
];
