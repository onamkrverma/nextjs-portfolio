"use client";
import AddEditForm from "@components/AddEditForm";
import Typography from "@components/Typography";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { TExperience } from "../page";

const EditExperience = ({ params }: { params: { id: string } }) => {
  const [experienceData, setExperienceData] = useState<TExperience | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const getExperience = async () => {
      try {
        const res = await fetch(`/api/experience/${params.id}`);
        const data = await res.json();
        setExperienceData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getExperience();
  }, [params.id]);

  const handleUpdate = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);
    try {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const formDataObj = Object.fromEntries(formData.entries());
        const { jobTitle, companyName, description, startDate, endDate } =
          formDataObj;
        const res = await fetch(`/api/experience/${params.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            jobTitle,
            companyName,
            description,
            startDate,
            endDate,
          }),
        });
        if (!res.ok) {
          throw new Error(`Failed to update experience`);
        }
        setStatusMessage({
          variant: "success",
          message: "Experience data updated successfully",
        });
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
        Edit Experience
      </Typography>
      <div className="flex justify-center ">
        <AddEditForm
          actionText="Update Experience"
          isLoading={isLoading}
          statusMessage={statusMessage}
          handleSubmit={handleUpdate}
          formData={experienceData}
          formRef={formRef}
          variant="experience"
        />
      </div>
    </main>
  );
};

export default EditExperience;
