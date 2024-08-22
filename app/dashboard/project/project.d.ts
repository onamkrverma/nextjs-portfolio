export type TProject = {
  _id: string;
  logo?: string;
  title: string;
  description: string;
  techUsed: string;
  thumbnail: string;
  githubLink?: string;
  demoLink?: string;
  tag: "personal" | "professional";
  createdAt: string;
};
