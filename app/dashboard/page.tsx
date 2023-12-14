"use client";
import Button from "@components/Button";
import Typography from "@components/Typography";
import { signOut, useSession } from "next-auth/react";
import Card from "@components/Card";

const Dashboard = () => {
  const session = useSession();
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

  // if (session.status === "loading") {
  //   return (
  //     <div className="h-40">
  //       <Loading loadingText="Loading" />
  //     </div>
  //   );
  // }

  // if (session.status === "unauthenticated") {
  //   redirect("/dashboard/login");
  // }

  return (
    <main className="container !pr-0">
      <div className=" flex items-center justify-center relative">
        <Typography size="h5/semi-bold" className="text-lg sm:text-2xl">
          Admin Dashboard
        </Typography>
        <Button
          type="button"
          title="logout"
          variant="primary"
          className="absolute right-0 !bg-primary-50 !text-danger-600 gap-2 items-center !shadow-md !p-2"
          onClick={() =>
            signOut({ redirect: true, callbackUrl: "/dashboard/login" })
          }
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          <span className="hidden sm:block">logout</span>
        </Button>
      </div>
      <div className="flex flex-col gap-4 my-8">
        <Button type="button" title="Add Project">
          Add Project
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((data, index) => (
            <Card
              key={data.github}
              title={data.title}
              description={data.description}
              actionText="Edit"
              handleAction={() => {}}
              handleSecondaryAction={() => {}}
              secondaryActiontext="Delete"
              projectLogoSrc={undefined}
              projectScreenshotSrc={data.image}
              variant="adminProjectCard"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
