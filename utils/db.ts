import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.DATABASE;
  try {
    if (!uri) return;
    await mongoose.connect(uri);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(error);
    throw new Error("Connection failed!");
  }
};

export default connectDB;
