import mongoose from "mongoose";

const { Schema } = mongoose;

const ExperienceSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "jobTitle is required!"],
      trim: true,
    },
    companyName: {
      type: String,
      required: [true, "companyName is required!"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description is required!"],
      trim: true,
    },

    startDate: {
      type: String,
      required: [true, "startDate is required!"],
      trim: true,
    },
    endDate: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Experience =
  mongoose.models.Experience ?? mongoose.model("Experience", ExperienceSchema);

export default Experience;
