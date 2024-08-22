import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    logo: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      required: [true, "title is required!"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description is required!"],
      trim: true,
    },
    techUsed: {
      type: String,
      required: [true, "techUsed is required!"],
      trim: true,
    },
    thumbnail: {
      type: String,
      required: [true, "thumbnail is required!"],
      trim: true,
    },
    githubLink: {
      type: String,
      // required: [true, "githubLink is required!"],
      trim: true,
    },
    demoLink: {
      type: String,
      trim: true,
    },
    tag: {
      type: String,
      enum: ["personal", "professional"],
      required: [true, "tag is required!"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project ?? mongoose.model("Project", ProjectSchema);

export default Project;
