import React from "react";
import Typography from "./Typography";
import { TExperience } from "@app/dashboard/experience/page";
import PriceIcon from "@public/icons/prize.svg";

const WorkExperience = ({
  experienceData,
}: {
  experienceData: TExperience[];
}) => {
  return (
    <div className="flex flex-col gap-4 my-10">
      <Typography size="h5/semi-bold" className="uppercase">
        My Journey
      </Typography>
      <div className="">
        {experienceData
          .sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          )
          .map((experience) => (
            <div
              key={experience._id}
              className="flex gap-4 relative pb-10 last:pb-0"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 ">
                <PriceIcon className="w-6 h-6" />
              </div>
              <span className="w-2 h-full flex bg-primary-700 dark:bg-primary-300 absolute top-1 left-4 -z-10 "></span>
              <div className="flex flex-col gap-2 bg-primary-100 dark:bg-primary-900 border dark:border-primary-700  shadow-md p-4 rounded-lg relative before:absolute before:-left-5 before:w-6 before:h-1 before:bg-primary-700 before:dark:bg-primary-100 before:-z-10">
                <Typography size="h6/semi-bold" className="uppercase">
                  {experience.jobTitle}
                </Typography>
                <div className="flex flex-wrap gap-2  justify-between">
                  <Typography size="body1/semi-bold" className="uppercase">
                    {experience.companyName}
                  </Typography>
                  <Typography className="!text-xs">
                    {`${new Date(experience.startDate).toLocaleDateString(
                      "en",
                      {
                        dateStyle: "medium",
                      }
                    )} - ${
                      experience.endDate
                        ? new Date(experience.endDate).toLocaleDateString(
                            "en",
                            {
                              dateStyle: "medium",
                            }
                          )
                        : "Present"
                    }`}
                  </Typography>
                </div>
                <ul className="px-4">
                  {experience.description
                    .split("|")
                    .map((bulletPoint, index) => (
                      <li
                        key={index}
                        className="list-disc dark:text-neutral-400 "
                      >
                        {bulletPoint}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkExperience;
