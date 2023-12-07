import Typography from "@components/Typography";
import Image from "next/image";
import userImage from "../public/placeholderUser.svg";
import Button from "@components/Button";

const Home = () => {
  return (
    <main className="container">
      {/* hero section */}
      <section className="flex flex-col gap-4 ">
        {/* logo */}
        <div className="w-full text-center block mb-40 sm:hidden">
          <Button
            link="/"
            variant="icon"
            title="onam"
            className="!text-3xl !p-0 !font-bold"
          >
            {"<Onam/>"}
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col gap-4 ">
            <Typography
              tag="h1"
              size="h2/bold"
              className="!text-primary-500 block sm:hidden"
            >
              Hi 👋
            </Typography>
            <Typography tag="h1" size="h2/bold">
              <span className="text-primary-500">I'm</span> Onam kumar verma
            </Typography>
            <Typography size="body1/normal" variant="secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              pariatur animi temporibus impedit dolorem saepe, vero ipsa
              distinctio illum, dicta minima? Harum quidem vero asperiores
              fugiat officia deleniti doloremque architecto.
            </Typography>
          </div>
          {/* image */}
          <div className="w-full hidden sm:block">
            <Image src={userImage} alt="onam" width="200" height="400" />
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
      <section className="h-[500px]">
        <div>new section</div>
      </section>
      <section className="h-[500px]">
        <div>new section</div>
      </section>
      <section className="h-[500px]">
        <div>new section</div>
      </section>
    </main>
  );
};

export default Home;
