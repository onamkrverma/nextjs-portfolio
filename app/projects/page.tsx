import { TProject } from "@app/dashboard/project/project";
import Card from "@components/Card";
import Typography from "@components/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Onam - Front End Developer",
};

async function getProfessionalProjectData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ??
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  const res = await fetch(`${baseUrl}/api/project?tag=professional`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch professional project data");
  }

  return res.json();
}
async function getPersonalProjectData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ??
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  const res = await fetch(`${baseUrl}/api/project?tag=personal`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch project data");
  }

  return res.json();
}

const Projects = async () => {
  const personalProjectsData: TProject[] = await getPersonalProjectData();
  const professionalProjectsData: TProject[] =
    await getProfessionalProjectData();

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

      <div className="flex flex-col gap-2 my-4 mt-20">
        <Typography size="h5/semi-bold" variant="secondary">
          Professional
        </Typography>

        <div className="flex flex-col gap-8 mb-4 ">
          {professionalProjectsData.length ? (
            professionalProjectsData
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  Number(new Date(a.createdAt).getTime())
              )
              .map((data, index) => (
                <Card
                  key={data._id}
                  title={data.title}
                  description={data.description}
                  actionLink={data.demoLink}
                  actionText="Visit Site"
                  secondaryActionLink={data.githubLink}
                  secondaryActiontext="Github"
                  projectLogoSrc={data.logo}
                  projectScreenshotSrc={data.thumbnail}
                  techUsed={data.techUsed}
                  variant="projectCard"
                />
              ))
          ) : (
            <Typography>No Data found</Typography>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 my-8">
        <Typography size="h5/semi-bold" variant="secondary">
          Personal
        </Typography>
        <div className="flex flex-col gap-8 mb-4 ">
          {personalProjectsData.length ? (
            personalProjectsData
              .sort(
                (a, b) =>
                  Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
              )
              .map((data, index) => (
                <Card
                  key={data._id}
                  title={data.title}
                  description={data.description}
                  actionLink={data.demoLink}
                  actionText="Visit Site"
                  secondaryActionLink={data.githubLink}
                  secondaryActiontext="Github"
                  projectLogoSrc={data.logo}
                  projectScreenshotSrc={data.thumbnail}
                  techUsed={data.techUsed}
                  variant="projectCard"
                />
              ))
          ) : (
            <Typography>No Data found</Typography>
          )}
        </div>
      </div>
    </main>
  );
};

export default Projects;
