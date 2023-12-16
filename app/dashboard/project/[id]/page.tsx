"use client";
import AddEditForm from "@components/AddEditForm";
import Typography from "@components/Typography";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { TProject } from "../project";

const EditProduct = ({ params }: { params: { id: string } }) => {
  const [projectData, setProjectData] = useState<TProject | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const getProject = async () => {
    try {
      const res = await fetch(`/api/project/${params.id}`);
      const data = await res.json();
      setProjectData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, [params.id]);

  const handleUpdate = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);
    try {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const formDataObj = Object.fromEntries(formData.entries());
        const {
          title,
          description,
          techUsed,
          thumbnail,
          logo,
          githubLink,
          demoLink,
        } = formDataObj;

        const res = await fetch(`/api/project/${params.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            title,
            description,
            techUsed,
            thumbnail,
            logo,
            githubLink,
            demoLink,
          }),
        });
        if (!res.ok) {
          throw new Error(`Failed to update project`);
        }
        setStatusMessage({
          variant: "success",
          message: "Project data updated successfully",
        });
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setStatusMessage({ variant: "error", message: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container ">
      <Typography size="h5/semi-bold" className="capitalize text-center">
        Edit Project
      </Typography>
      <div className="flex justify-center ">
        <AddEditForm
          actionText="Update Project"
          isLoading={isLoading}
          statusMessage={statusMessage}
          handleSubmit={handleUpdate}
          projectData={projectData}
          formRef={formRef}
        />
      </div>
    </main>
  );
};

export default EditProduct;
