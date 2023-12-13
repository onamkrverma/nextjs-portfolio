import mongoose from "mongoose";

const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "name is required!"],
    },
    email: {
      type: String,
      unique: true,
      require: [true, "email is required!"],
    },
    password: {
      type: String,
      require: [true, "password is required!"],
    },
  },
  { timestamps: true }
);
const Admin = mongoose.models.Admin ?? mongoose.model("Admin", AdminSchema);
export default Admin;
