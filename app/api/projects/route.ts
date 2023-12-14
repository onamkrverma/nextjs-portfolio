import { NextRequest, NextResponse } from "next/server";
import connectDB from "@utils/db";
import Project from "@models/Project";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;

  try {
    await connectDB();
    const project: object[] = await Project.find();
    return new NextResponse(JSON.stringify(project), { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
export const POST = async (req: Request) => {
  const {
    logo,
    title,
    description,
    techUsed,
    thumbnail,
    githubLink,
    demoLink,
  } = await req.json();

  try {
    await connectDB();
    const project = new Project({
      title,
      description,
      techUsed,
      logo,
      thumbnail,
      githubLink,
      demoLink,
    });
    const addProject = await project.save();
    return NextResponse.json(addProject, { status: 201 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
