"use client";
import Button from "@components/Button";
import Typography from "@components/Typography";
import Card from "@components/Card";
import { useEffect, useState } from "react";
import { TProject } from "./project";
import Loading from "@components/Loading";
import Popup from "@components/Popup";

const Projects = () => {
  const [isDeletePopup, setIsDeletePopup] = useState<boolean>(false);
  const [projectsData, setProjectsData] = useState<TProject[]>([]);
  const [isProjectsLoading, setIsProjectsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const getProjects = async () => {
    setIsProjectsLoading(true);
    try {
      const res = await fetch(`/api/project`);
      const data = await res.json();
      setProjectsData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsProjectsLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  // handle delete project
  const handleDelete = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      if (!selectedProjectId) return;
      const res = await fetch(`/api/project/${selectedProjectId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Failed to delete project");
      }
      setIsDeletePopup(false);
      setSelectedProjectId(null);
      getProjects();
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
        <Button title="Add Project" link="/dashboard/project/new">
          Add Project
        </Button>

        {!isProjectsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData?.length ? (
              projectsData
                .sort(
                  (a, b) =>
                    Number(new Date(b.createdAt)) -
                    Number(new Date(a.createdAt))
                )
                .map((project, index) => (
                  <Card
                    key={project._id}
                    title={project.title}
                    tag={project.tag}
                    description={project.description}
                    actionText="Edit"
                    actionLink={`/dashboard/project/${project._id}`}
                    handleSecondaryAction={() => {
                      setIsDeletePopup(true), setSelectedProjectId(project._id);
                    }}
                    secondaryActiontext="Delete"
                    projectLogoSrc={project.logo}
                    projectScreenshotSrc={project.thumbnail}
                    variant="adminProjectCard"
                  />
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
          setIsDeletePopup(false), setSelectedProjectId(null);
        }}
        handleSecondaryAction={handleDelete}
        secondaryActiontext={"Yes,Sure"}
        title={"Are you sure want to delete this project?"}
        subtitle={`This will permanently delete project ID: ${selectedProjectId}`}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default Projects;
