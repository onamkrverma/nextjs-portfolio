"use client";
import { TProject } from "@app/dashboard/project/project";
import Button from "./Button";
import Input from "./Input";
import Textbox from "./Textbox";
import Typography from "./Typography";
import { ChangeEvent, RefObject } from "react";
import Select from "./Select";

type TAddEditForm = {
  isLoading: boolean;
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>;
  actionText: string;
  statusMessage: {
    variant: "error" | "success";
    message: string;
  } | null;
  projectData?: TProject | null;
  formRef: RefObject<HTMLFormElement>;
};

const AddEditForm = ({
  isLoading,
  handleSubmit,
  actionText,
  statusMessage,
  projectData,
  formRef,
}: TAddEditForm) => {
  return (
    <div className="w-full my-6 max-w-xl p-4 bg-primary-100 dark:bg-primary-900 shadow-md rounded-lg">
      <form
        className="w-full flex flex-col gap-4 "
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Input
          type="text"
          name="title"
          label="Title"
          defaultValue={projectData?.title}
          required
        />
        <Textbox
          name="description"
          label="Description"
          defaultValue={projectData?.description}
          required
        />
        <Select
          name="tag"
          label="Select tag"
          options={["personal", "professional"]}
          value={projectData?.tag}
        />
        <Input
          type="text"
          name="techUsed"
          label="Tech Used"
          defaultValue={projectData?.techUsed}
          required
        />
        <Input
          type="text"
          name="logo"
          label="Logo"
          placeholder="Logo (link only)"
          defaultValue={projectData?.logo}
        />
        <Input
          type="text"
          name="thumbnail"
          label="Thumbnail"
          placeholder="Thumbnail (link only)"
          defaultValue={projectData?.thumbnail}
          required
        />
        <Input
          type="text"
          name="githubLink"
          label="Github Link"
          defaultValue={projectData?.githubLink}
          required
        />
        <Input
          type="text"
          name="demoLink"
          label="Demo Link"
          defaultValue={projectData?.demoLink}
        />
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
