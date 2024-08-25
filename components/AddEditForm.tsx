"use client";
import { TProject } from "@app/dashboard/project/project";
import Button from "./Button";
import Input from "./Input";
import Textbox from "./Textbox";
import Typography from "./Typography";
import { ChangeEvent, RefObject, useState } from "react";
import Select from "./Select";
import { TExperience } from "@app/dashboard/experience/page";

type TAddEditForm = {
  isLoading: boolean;
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>;
  actionText: string;
  statusMessage: {
    variant: "error" | "success";
    message: string;
  } | null;
  formData?: (TProject | TExperience) | null;
  formRef: RefObject<HTMLFormElement>;
  variant: "project" | "experience";
};

const AddEditForm = ({
  isLoading,
  handleSubmit,
  actionText,
  statusMessage,
  formData,
  formRef,
  variant,
}: TAddEditForm) => {
  const defaultChecked =
    formData && "endDate" in formData
      ? formData?.endDate
        ? false
        : true
      : false;

  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className="w-full my-6 max-w-xl p-4 bg-primary-100 dark:bg-primary-900 shadow-md rounded-lg">
      <form
        className="w-full flex flex-col gap-4 "
        onSubmit={handleSubmit}
        ref={formRef}
      >
        {variant === "project" ? (
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              name="title"
              label="Title"
              defaultValue={
                formData && "title" in formData ? formData?.title : ""
              }
              required
            />
            <Textbox
              name="description"
              label="Description"
              defaultValue={formData?.description}
              required
            />
            <Select
              name="tag"
              label="Select tag"
              options={["personal", "professional"]}
              defaultValue={formData && "tag" in formData ? formData?.tag : ""}
            />
            <Input
              type="text"
              name="techUsed"
              label="Tech Used"
              defaultValue={
                formData && "techUsed" in formData ? formData?.techUsed : ""
              }
              required
            />
            <Input
              type="text"
              name="logo"
              label="Logo"
              placeholder="Logo (link only)"
              defaultValue={
                formData && "logo" in formData ? formData?.logo : ""
              }
            />
            <Input
              type="text"
              name="thumbnail"
              label="Thumbnail"
              placeholder="Thumbnail (link only)"
              defaultValue={
                formData && "thumbnail" in formData ? formData?.thumbnail : ""
              }
              required
            />
            <Input
              type="text"
              name="githubLink"
              label="Github Link"
              defaultValue={
                formData && "githubLink" in formData ? formData?.githubLink : ""
              }
            />
            <Input
              type="text"
              name="demoLink"
              label="Demo Link"
              defaultValue={
                formData && "demoLink" in formData ? formData?.demoLink : ""
              }
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              name="jobTitle"
              label="Job Title"
              defaultValue={
                formData && "jobTitle" in formData ? formData?.jobTitle : ""
              }
              required
            />
            <Input
              type="text"
              name="companyName"
              label="Company Name"
              defaultValue={
                formData && "companyName" in formData
                  ? formData?.companyName
                  : ""
              }
              required
            />
            <Textbox
              name="description"
              label="Description"
              defaultValue={formData?.description}
              required
            />
            <div className="flex items-center flex-col sm:flex-row gap-2">
              <Input
                type="date"
                name="startDate"
                label="Start Date"
                defaultValue={
                  formData && "startDate" in formData ? formData?.startDate : ""
                }
                required
              />
              <Input
                type="date"
                name="endDate"
                label="End Date"
                defaultValue={
                  formData && "endDate" in formData ? formData?.endDate : ""
                }
                disabled={isChecked}
              />
            </div>
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="preset"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Current working here
            </label>
          </div>
        )}
        <div className="flex justify-end gap-4 items-center mt-4">
          <Button type="reset" title="Reset" variant="danger">
            Reset
          </Button>
          <Button
            type="submit"
            title={actionText}
            variant={"primary"}
            disabled={isLoading}
          >
            {isLoading ? "Please wait..." : actionText}
          </Button>
        </div>
        {statusMessage ? (
          <Typography
            variant={statusMessage.variant}
            className="my-4 text-center dark:bg-primary-200"
          >
            {statusMessage.variant === "error" ? "❌" : "✅"}{" "}
            {statusMessage.message}
          </Typography>
        ) : null}
      </form>
    </div>
  );
};

export default AddEditForm;
