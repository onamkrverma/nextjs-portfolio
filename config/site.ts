export const siteConfig = {
  name: "Onam Kumar Verma",
  shortName: "Onam",
  role: "Full Stack Developer",
  title: "Onam - Full Stack Developer",
  url: "https://onam.vercel.app",
  location: "Delhi, India",
  company: "Gyanis",
  ogImage: "/logo.webp",

  /** Hero paragraph on the homepage. */
  tagline:
    "I started out building interfaces. Then I got tired of shipping half a feature and waiting on someone else's API, so I learned to build that half too. Now I work across the whole stack.",

  /** Meta description. Kept shorter and more keyword-bearing than the tagline. */
  description:
    "Onam Kumar Verma is a full stack developer from Delhi, India. I build end-to-end web applications with Next.js, Node.js, NestJS, Python and PostgreSQL.",

  keywords:
    "Onam kumar verma, Onam, Onamkrverma, onam Portfolio, Portfolio, full stack developer, backend developer, Next.js developer, Node.js, NestJS, Python, PostgreSQL, web developer Portfolio",

  links: {
    linkedin: "https://linkedin.com/in/onamkumarverma",
    github: "https://github.com/onamkrverma",
  },

  /** Feeds the JSON-LD Person `knowsAbout` field. */
  knowsAbout: [
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Express.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "REST API Design",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
