import mongoose from "mongoose";

const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required!"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required!"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required!"],
      trim: true,
    },
  },
  { timestamps: true }
);
const Admin = mongoose.models.Admin ?? mongoose.model("Admin", AdminSchema);
export default Admin;
