import Admin from "@models/Admin";
import connectDB from "@utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();
  await connectDB();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const existAdmin = await Admin.findOne({ email });
    if (existAdmin) {
      return NextResponse.json(
        { error: "Admin already exist with this email" },
        { status: 403 }
      );
    }
    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });
    return NextResponse.json(newAdmin, { status: 201 });
  } catch (error: any) {
    console.log(error.message);
    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 422 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
