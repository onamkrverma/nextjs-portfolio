import Typography from "@components/Typography";
import Image from "next/image";
import onamImg from "@public/onam.png";
import Link from "next/link";
import { Metadata } from "next";
import Button from "@components/Button";

export const metadata: Metadata = {
  title: "About | Onam - Front End Developer",
};

const About = () => {
  return (
    <main className="container">
      <div className="flex flex-col gap-2  my-12">
        <Typography size="h3/semi-bold" className="!text-3xl sm:text-4xl">
          A litle bit about me
        </Typography>
        <Typography size="body2/normal" variant="secondary">
          Who am i and what i do
        </Typography>
      </div>
      <span className="w-full block border border-primary-300 absolute right-0"></span>

      <section className="flex flex-col sm:flex-row gap-4  mt-20 my-4">
        {/* image on top in mobile view */}
        <div className="block sm:hidden w-48 h-fit bg-primary-800 rounded-3xl">
          <Image
            src={onamImg}
            alt="onam"
            width={300}
            height={200}
            quality={100}
            className="w-full h-full object-cover rounded-3xl"
            style={{ filter: "drop-shadow(2px 2px 5px gray)" }}
          />
        </div>
        <div className="flex flex-col gap-6 sm:w-3/4">
          <div className="flex flex-col gap-2">
            <Typography size="body1/semi-bold" className="uppercase">
              Who i am
            </Typography>
            <Typography size="body1/normal" variant="secondary">
              I am Onam Kumar Verma, a self-taught Front End developer from
              Delhi, India.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography size="body1/semi-bold" className="uppercase">
              What i do
            </Typography>
            <Typography size="body1/normal" variant="secondary">
              I have one year of experience in creating user-friendly web
              applications. I am currently working as a front-end developer at
              SAHUKAR CONSULTANCY, a tech company. I have honed my skills in
              React.js, TailwindCSS, and TypeScript, which enable me to craft
              seamless and interactive user experiences. During my time at
              SAHUKAR CONSULTANCY, I worked on building an e-commerce website
              with Astro.js and open-source commerce modules Medusa.js. I am
              enthusiastic about delivering seamless and interactive user
              experiences.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography size="body1/semi-bold" className="uppercase">
              What i did
            </Typography>
            <Typography size="body1/normal" variant="secondary">
              I hold a BSc(H) degree in chemistry, but I also have a strong
              passion for web technology. My interest began when I was in
              college, where I used to create blogging websites using
              Google&apos;s Blogspot platform and customize the blog themes and
              templates with the help of HTML and CSS. Now, as a front-end
              developer, I am exploring web technology with various tools and
              frameworks.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography size="body1/semi-bold" className="uppercase">
              My Learing resources
            </Typography>
            <Typography size="body1/normal" variant="secondary">
              I have acquired web technology skills from various online
              resources, such as YouTube videos, freecodecamp, W3Schools, and
              official documentation etc.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography size="body1/semi-bold" className="uppercase">
              Certificates
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full h-fit">
                <Image
                  src="https://imgur.com/VCQHGSs.png"
                  alt="freecodecamp"
                  width={300}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover rounded-md"
                />
                <Link
                  href="https://www.freecodecamp.org/certification/fccd6827402-2aa3-473a-8fd3-06849e4a7845/javascript-algorithms-and-data-structures"
                  className="text-primary-600 dark:text-primary-50  hover:text-primary-900 underline my-2"
                  target="_blank"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {/* image on right side */}
          <div className="hidden sm:block w-72 h-fit bg-primary-800 rounded-3xl">
            <Image
              src={onamImg}
              alt="onam"
              width={300}
              height={200}
              quality={100}
              className="w-full h-full object-cover rounded-3xl"
              style={{ filter: "drop-shadow(2px 2px 5px gray)" }}
            />
          </div>
          <Button
            link="/contact"
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
        </div>
      </section>
    </main>
  );
};

export default About;
