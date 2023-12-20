import { TProject } from "@app/dashboard/project/project";
import Card from "@components/Card";
import Typography from "@components/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Onam - Front End Developer",
};

async function getProjectData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/project`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch project data");
  }

  return res.json();
}

const Projects = async () => {
  const projectsData: TProject[] = await getProjectData();

  return (
    <main className="container">
      <div className="flex flex-col gap-2  my-12">
        <Typography size="h3/semi-bold" className="!text-3xl sm:text-4xl">
          Projects
        </Typography>
        <Typography size="body2/normal" variant="secondary">
          Projects, I’ve worked on
        </Typography>
      </div>
      <span className="w-full block border border-primary-300 absolute right-0"></span>
      <div className="flex flex-col gap-4 my-4 mt-20">
        <Typography size="h5/semi-bold" variant="secondary">
          Personal
        </Typography>
        <div className="flex flex-col gap-8 mb-4 ">
          {projectsData.map((data, index) => (
            <Card
              key={data._id}
              title={data.title}
              description={data.description}
              actionLink={data.demoLink}
              actionText="Visit Site"
              secondaryActionLink={data.githubLink}
              secondaryActiontext="Github"
              projectLogoSrc={undefined}
              projectScreenshotSrc={data.thumbnail}
              techUsed={data.techUsed}
              variant="projectCard"
            />
          ))}
        </div>

        <div className="flex flex-col gap-2 ">
          <Typography size="h5/semi-bold" variant="secondary">
            Professional
          </Typography>
          <Typography size="body2/normal" variant="secondary">
            *I have built some confidential projects for client and Due to
            client confidentiality, I cannot reveal the projects I have built
            for them. However, I will share any public projects I create in the
            future.
          </Typography>
        </div>
      </div>
    </main>
  );
};

export default Projects;
