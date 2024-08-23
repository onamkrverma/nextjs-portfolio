"use client";
import AddEditForm from "@components/AddEditForm";
import Typography from "@components/Typography";
import { ChangeEvent, useRef, useState } from "react";

const AddProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleAdd = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
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
          tag,
        } = formDataObj;

        const res = await fetch(`/api/project`, {
          method: "POST",
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
            tag,
          }),
        });
        if (!res.ok) {
          throw new Error("Failed to add project");
        }
        setStatusMessage({
          variant: "success",
          message: "Project added successfully",
        });
        e.target?.reset();
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setStatusMessage({ variant: "error", message: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container ">
      <Typography size="h5/semi-bold" className="capitalize text-center">
        Add New Project
      </Typography>
      <div className="flex justify-center ">
        <AddEditForm
          isLoading={isLoading}
          actionText="Add Project"
          statusMessage={statusMessage}
          handleSubmit={handleAdd}
          formRef={formRef}
          variant="project"
        />
      </div>
    </main>
  );
};

export default AddProject;
