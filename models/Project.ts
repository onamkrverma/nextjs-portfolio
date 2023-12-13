import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    logo: {
      type: String,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    techUsed: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    githubLink: {
      type: String,
      require: true,
    },
    demoLink: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project ?? mongoose.model("Project", ProjectSchema);

export default Project;
