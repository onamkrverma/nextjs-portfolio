import Image, { StaticImageData } from "next/image";
import placeholderImg from "../public/placeholderImg.svg";
import Typography from "@components/Typography";
import Button from "@components/Button";
import Link from "next/link";

type TCard = {
  title: string;
  description: string;
  projectLogoSrc?: string | undefined;
  projectScreenshotSrc?: string;
  actionText?: string;
  actionLink?: string;
  handleAction?: () => void;
  secondaryActiontext?: string;
  handleSecondaryAction?: () => void;
  secondaryActionLink?: string;
  variant: "projectCard" | "widgetCard" | "techCard" | "adminProjectCard";
  techUsed?: string;
  widgetCardImg?: StaticImageData | string;
};

const Card = ({
  title,
  description,
  projectLogoSrc,
  projectScreenshotSrc,
  actionLink,
  secondaryActionLink,
  actionText,
  handleAction,
  handleSecondaryAction,
  secondaryActiontext,
  variant,
  techUsed,
  widgetCardImg,
}: TCard) => {
  return (
    <div
      className={`bg-primary-100 dark:bg-primary-900 border dark:border-primary-700  shadow-md ${
        variant !== "projectCard" ? "p-6 rounded-3xl" : "p-4 rounded-xl"
      }`}
    >
      {variant === "projectCard" || variant === "adminProjectCard" ? (
        <div className="flex flex-col gap-4">
          <div
            className={`flex justify-between gap-4 flex-col sm:flex-row ${
              variant === "adminProjectCard" ? "!flex-col" : ""
            }`}
          >
            <div
              className={`flex flex-col gap-2 sm:w-1/2 ${
                variant === "adminProjectCard" ? "!w-full" : ""
              }`}
            >
              <Image
                src={projectLogoSrc ?? placeholderImg}
                alt="project logo"
                width={30}
                height={30}
                className="bg-primary-300  rounded-lg"
              />
              <Typography size="h5/semi-bold">{title}</Typography>
              <Typography size="body1/normal" variant="secondary">
                {variant === "adminProjectCard"
                  ? description.slice(0, 100) + "..."
                  : description}
              </Typography>

              {variant === "projectCard" ? (
                <div>
                  <Typography size="body1/semi-bold">Tech Used</Typography>
                  {techUsed?.split(",")?.map((item, index) => (
                    <Typography
                      key={index}
                      size="small/normal"
                      variant="secondary"
                      className="italic"
                    >
                      • {item}
                    </Typography>
                  ))}
                </div>
              ) : null}
            </div>
            {projectScreenshotSrc ? (
              variant === "projectCard" ? (
                <div className="border p-3 bg-primary-950 rounded-xl shadow-lg shadow-primary-800 w-full sm:w-80 h-fit cursor-pointer transition sm:rotate-12 hover:rotate-0 ">
                  <Image
                    src={projectScreenshotSrc}
                    alt="project screenshot"
                    quality={100}
                    width={320}
                    height={320}
                    className="object-cover w-full h-fit"
                  />
                </div>
              ) : (
                <div className="w-full h-40 border p-3 bg-primary-950 rounded-xl shadow-lg shadow-primary-800">
                  <Image
                    src={projectScreenshotSrc}
                    alt="project screenshot"
                    quality={100}
                    width={200}
                    height={100}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              )
            ) : null}
          </div>
          <div className="flex gap-2 items-center mt-8 sm:mt-2">
            {actionText ? (
              actionLink ? (
                <Button
                  link={actionLink}
                  title={actionText}
                  variant="primary"
                  className="gap-1 items-center !py-2 !shadow-md shadow-primary-600"
                >
                  {actionText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 transition hover:translate-x-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              ) : (
                <Button
                  type="button"
                  title={actionText}
                  variant="primary"
                  className="gap-1 items-center !py-2 !shadow-md shadow-primary-600"
                  onClick={handleAction}
                >
                  {actionText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 transition hover:translate-x-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              )
            ) : null}
            {secondaryActiontext ? (
              secondaryActionLink ? (
                <Button
                  link={secondaryActionLink}
                  title={secondaryActiontext}
                  variant={variant === "adminProjectCard" ? "danger" : "icon"}
                  className={`gap-1 items-center text-primary-800 dark:text-primary-50 ${
                    variant === "adminProjectCard" ? "!py-2" : ""
                  }`}
                >
                  {secondaryActiontext}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 transition hover:translate-x-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              ) : (
                <Button
                  type="button"
                  title={secondaryActiontext}
                  variant={variant === "adminProjectCard" ? "danger" : "icon"}
                  className={`gap-1 items-center text-primary-800 dark:text-primary-50 ${
                    variant === "adminProjectCard" ? "!py-2" : ""
                  }`}
                  onClick={handleSecondaryAction}
                >
                  {secondaryActiontext}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 transition hover:translate-x-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              )
            ) : null}
          </div>
        </div>
      ) : actionLink ? (
        <Link
          href={actionLink}
          className="flex flex-col items-center gap-2 group"
        >
          <div className="flex flex-col items-center gap-2">
            <Typography size="h5/semi-bold">{title}</Typography>
            <Typography size="body1/normal" variant="secondary">
              {description}
            </Typography>
          </div>
          {widgetCardImg ? (
            <div
              className={`transition w-full  ease-in-out duration-500 group-hover:scale-105 ${
                title.includes("About") ? "group-hover:-rotate-6" : ""
              }`}
            >
              <Image
                src={widgetCardImg}
                alt="widgetCard"
                quality={100}
                width={200}
                height={300}
                className="object-cover w-full"
              />
            </div>
          ) : null}
        </Link>
      ) : null}
    </div>
  );
};

export default Card;
