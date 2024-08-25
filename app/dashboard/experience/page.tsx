"use client";
import Button from "@components/Button";
import Loading from "@components/Loading";
import Popup from "@components/Popup";
import Typography from "@components/Typography";
import React, { useEffect, useState } from "react";

export type TExperience = {
  _id: string;
  jobTitle: string;
  companyName: string;
  description: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
};

const Experience = () => {
  const [isDeletePopup, setIsDeletePopup] = useState<boolean>(false);
  const [experienceData, setExperienceData] = useState<TExperience[]>([]);
  const [isProjectsLoading, setIsProjectsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState<
    string | null
  >(null);

  const getExperiences = async () => {
    setIsProjectsLoading(true);
    try {
      const res = await fetch(`/api/experience`);
      const data = await res.json();
      setExperienceData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsProjectsLoading(false);
    }
  };

  useEffect(() => {
    getExperiences();
  }, []);

  // handle delete project
  const handleDelete = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      if (!selectedExperienceId) return;
      const res = await fetch(`/api/experience/${selectedExperienceId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Failed to delete experience");
      }
      setIsDeletePopup(false);
      setSelectedExperienceId(null);
      getExperiences();
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container !pr-0">
      <div className="flex flex-col gap-4 my-8">
        <Button title="Add Experience" link="/dashboard/experience/new">
          Add Experience
        </Button>

        {!isProjectsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceData?.length ? (
              experienceData.map((experience, index) => (
                <div
                  key={experience._id}
                  className="flex flex-col gap-2 bg-primary-100 dark:bg-primary-900 border dark:border-primary-700  shadow-md p-4 rounded-lg"
                >
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
                      .slice(0, 200)
                      .split("|")
                      .map((bulletPoint, index) => (
                        <li key={index} className="list-disc">
                          {bulletPoint}
                        </li>
                      ))}
                    <li>{"read more..."}</li>
                  </ul>

                  <div className="flex gap-2 items-center justify-end mt-8 sm:mt-2">
                    <Button
                      link={`/dashboard/experience/${experience._id}`}
                      title={"edit"}
                      variant="primary"
                      className="gap-1 items-center !shadow-md shadow-primary-600"
                    >
                      Edit
                    </Button>

                    <Button
                      title="delete"
                      variant={"danger"}
                      className={`gap-1 items-center text-primary-800 dark:text-primary-50`}
                      onClick={() => {
                        setIsDeletePopup(true);
                        setSelectedExperienceId(experience._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <Typography>No Data found</Typography>
            )}
          </div>
        ) : (
          <div className="h-40">
            <Loading loadingText="loading" />
          </div>
        )}
      </div>

      <Popup
        isPopup={isDeletePopup}
        setIsPopup={setIsDeletePopup}
        actionText={"No"}
        handleAction={() => {
          setIsDeletePopup(false), setSelectedExperienceId(null);
        }}
        handleSecondaryAction={handleDelete}
        secondaryActiontext={"Yes,Sure"}
        title={"Are you sure want to delete this experience?"}
        subtitle={`This will permanently delete experience ID: ${selectedExperienceId}`}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default Experience;
