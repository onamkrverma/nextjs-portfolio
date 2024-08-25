"use client";
import AddEditForm from "@components/AddEditForm";
import Typography from "@components/Typography";
import React, { ChangeEvent, useRef, useState } from "react";

const AddNewExperience = () => {
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
        const { jobTitle, companyName, description, startDate, endDate } =
          formDataObj;

        const res = await fetch(`/api/experience`, {
          method: "POST",
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
          throw new Error("Failed to add Experience");
        }
        setStatusMessage({
          variant: "success",
          message: "Experience added successfully",
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
        Add New Experience
      </Typography>
      <div className="flex justify-center ">
        <AddEditForm
          isLoading={isLoading}
          actionText="Add Experience"
          statusMessage={statusMessage}
          handleSubmit={handleAdd}
          formRef={formRef}
          variant="experience"
        />
      </div>
    </main>
  );
};

export default AddNewExperience;
