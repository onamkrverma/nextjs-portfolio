import Typography from "@components/Typography";
import Image from "next/image";
import userImage from "@public/placeholderUser.svg";
import Button from "@components/Button";
import { poppins } from "./fonts";
import Card from "@components/Card";
import aboutVector from "@public/aboutVector.png";
import techStack from "@public/techStack.png";

const Home = () => {
  const projectData = [
    {
      id: "1",
      title: "Okv-Music",
      description:
        "Okv-Music is a progressive music app made with Javascript using React jS and YouTube Api that allows user to discover and listen to new music from around the world. The website features a clean and modern design, a user-friendly interface, and a powerful search feature of youtube.",
      techUsed:
        "React.js, Redux toolkit, CSS3, HTML,Youtube Api,Ytdl-core package",
      image: "https://imgur.com/jZHEXDE.png",
      github: "https://github.com/onamkrverma/okv-music",
      demo: "https://okv-music.netlify.app/",
    },
    {
      id: "2",
      title: "Okv photogram",
      description:
        "Okv photogram is a clone of instagram made with React jS and Firebase v9 (Baas) that allows user to post their images,comments and likes. User can explore other user's post and can follow them",
      techUsed: "React.js, Firebase v9,react-icons, CSS3, HTML.",
      image: "https://imgur.com/Dr5Qlfg.png",
      github: "https://github.com/onamkrverma/instagramClone",
      demo: "https://okv-photogram.netlify.app/",
    },
  ];

  const widgetCards = [
    {
      id: "1",
      title: "About me",
      subtitle: "Who I am and what I do",
      icon: aboutVector,
    },
    {
      id: "2",
      title: "Tech Stack",
      subtitle: "The dev tools and tech stack I use",
      icon: techStack,
    },
  ];

  return (
    <main className="container flex flex-col gap-16">
      {/* hero section */}
      <section className="flex flex-col gap-4 ">
        {/* logo */}
        <div className="w-full relative text-center block mb-20 sm:hidden">
          <Button
            link="/"
            variant="icon"
            title="onam"
            className={`!text-3xl dark:text-white !p-0 !font-bold ${poppins.className}`}
          >
            {"<Onam/>"}
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col gap-4 ">
            <Typography
              tag="h1"
              size="h2/bold"
              variant={"secondary"}
              className="block sm:hidden"
            >
              Hi 👋
            </Typography>
            <Typography tag="h1" size="h2/bold">
              <span className="text-primary-500">I'm</span> Onam Kumar Verma
            </Typography>
            <Typography size="body1/normal" variant="secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              pariatur animi temporibus impedit dolorem saepe, vero ipsa
              distinctio illum, dicta minima? Harum quidem vero asperiores
              fugiat officia deleniti doloremque architecto.
            </Typography>
          </div>
          {/* image */}
          <div className=" hidden sm:block">
            <Image src={userImage} alt="onam" width={300} height={400} />
          </div>
        </div>
        <Button
          type="button"
          title="Get in touch"
          className="!w-full sm:!w-fit"
        >
          Get in touch
        </Button>
      </section>

      {/* selected work */}
      <section className="flex flex-col gap-4 my-8">
        <Typography size="h3/semi-bold">Selected Work</Typography>
        <div className="flex flex-col gap-8">
          {projectData.map((data, index) => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              actionLink={data.demo}
              actionText="Visit Site"
              secondaryActionLink={data.github}
              secondaryActiontext="Github"
              projectLogoSrc={undefined}
              projectScreenshotSrc={data.image}
              variant="projectCard"
            />
          ))}
        </div>
      </section>

      {/* know me */}
      <section className="flex flex-col gap-4 my-8">
        <Typography size="h3/semi-bold">Get to know me</Typography>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {widgetCards.map((widget) => (
            <Card
              key={widget.id}
              title={widget.title}
              description={widget.subtitle}
              widgetCardImg={widget.icon}
              variant="widgetCard"
              actionLink="#"
            />
          ))}
        </div>
      </section>

      {/* let connect */}
      <section className="flex items-center justify-between flex-col sm:flex-row gap-4 my-8">
        <div className="flex flex-col gap-2">
          <Typography size="h3/semi-bold">Let’s work together</Typography>
          <Typography size="body1/normal" variant="secondary">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </Typography>
        </div>
        <Button
          title="connect"
          className="items-center gap-2 !w-full sm:!w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          Get in touch
        </Button>
      </section>
    </main>
  );
};

export default Home;
