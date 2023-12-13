import { NextResponse } from "next/server";
import connectDB from "@utils/db";
import Project from "@models/Project";
export const GET = async () => {
  // fetch
  try {
    await connectDB();
    const project: object[] = await Project.find();
    return NextResponse.json(JSON.stringify(project), { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
