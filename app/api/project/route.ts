import { NextRequest, NextResponse } from "next/server";
import connectDB from "@utils/db";
import Project from "@models/Project";

// get all project list
export const GET = async (req: NextRequest) => {
  const searchQuery = req.nextUrl.searchParams.getAll("search");
  const tag = req.nextUrl.searchParams.get("tag");

  try {
    await connectDB();
    if (searchQuery?.length) {
      const project: object[] = await Project.find({
        title: { $in: searchQuery },
      });
      return new NextResponse(JSON.stringify(project), { status: 200 });
    } else if (tag) {
      const project: object[] = await Project.find({
        tag: tag,
      });
      return new NextResponse(JSON.stringify(project), { status: 200 });
    } else {
      const project: object[] = await Project.find();
      return new NextResponse(JSON.stringify(project), { status: 200 });
    }
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

// add new project
export const POST = async (req: Request) => {
  try {
    const {
      logo,
      title,
      description,
      techUsed,
      thumbnail,
      githubLink,
      demoLink,
      tag,
    } = await req.json();

    await connectDB();

    const project = new Project({
      title,
      description,
      techUsed,
      logo,
      thumbnail,
      githubLink,
      demoLink,
      tag,
    });
    const addProject = await project.save();
    return NextResponse.json(addProject, { status: 201 });
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : error);
    const status =
      error instanceof Error && error.name === "ValidationError" ? 422 : 500;
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status });
  }
};
