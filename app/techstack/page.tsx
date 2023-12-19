import Card from "@components/Card";
import Typography from "@components/Typography";
import { TechStackList } from "./techStackList";

const TechStack = () => {
  return (
    <main className="container">
      <div className="flex flex-col gap-2  my-12">
        <Typography size="h3/semi-bold" className="!text-3xl sm:text-4xl">
          Tech Stack
        </Typography>
        <Typography size="body2/normal" variant="secondary">
          The dev tools and tech stack I use{" "}
        </Typography>
      </div>
      <span className="w-full block border border-primary-300 absolute right-0"></span>

      <div className=" flex flex-col gap-4 mt-20 my-4">
        <Typography size="h5/semi-bold" variant="secondary">
          Tools & Technology
        </Typography>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 ">
          {TechStackList.sort((a, b) => b.id - a.id).map((data, index) => (
            <Card
              key={data.id}
              title={data.title}
              description={data.subtitle}
              actionLink={data.link}
              techStackIcon={data.icon}
              variant="techCard"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TechStack;
