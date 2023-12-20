"use client";
import Button from "@components/Button";
import Typography from "@components/Typography";
import { signOut } from "next-auth/react";
import Card from "@components/Card";
import { useEffect, useState } from "react";
import { TProject } from "./project/project";
import Loading from "@components/Loading";
import Popup from "@components/Popup";

const Dashboard = () => {
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
        <Button title="Add Project" link="/dashboard/project">
          Add Project
        </Button>

        {!isProjectsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData?.length ? (
              projectsData.map((data, index) => (
                <Card
                  key={data._id}
                  title={data.title}
                  description={data.description}
                  actionText="Edit"
                  actionLink={`/dashboard/project/${data._id}`}
                  handleSecondaryAction={() => {
                    setIsDeletePopup(true), setSelectedProjectId(data._id);
                  }}
                  secondaryActiontext="Delete"
                  projectLogoSrc={data.logo}
                  projectScreenshotSrc={data.thumbnail}
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

export default Dashboard;
