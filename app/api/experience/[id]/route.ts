import { NextRequest, NextResponse } from "next/server";
import connectDB from "@utils/db";
import Experience from "@models/Experience";

// get Experience data by id
// /api/experience/${id}
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    if (!id) return;
    await connectDB();
    const experience = await Experience.findById(id);
    return NextResponse.json(experience, { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

// update existing Experience

// /api/experience/${id}

interface ExperienceRequest {
  jobTitle: string;
  companyName: string;
  description: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
}
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  // const id = req.nextUrl.searchParams.get("id");
  const { id } = params;
  const {
    jobTitle,
    companyName,
    description,
    startDate,
    endDate,
    isWorkingHere,
  }: ExperienceRequest = await req.json();

  try {
    if (!id)
      return NextResponse.json(
        {
          error:
            "Experience id required for update in path params, for eg. /api/Experience/${id}",
        },
        { status: 404 }
      );
    await connectDB();
    const experienceExist = await Experience.findById(id);
    if (!experienceExist) {
      return NextResponse.json(
        { error: "Experience does not exit with this id" },
        { status: 404 }
      );
    }
    const updatedData = {
      jobTitle,
      companyName,
      description,
      startDate,
      endDate,
      isWorkingHere,
    };
    const updateExperience = await Experience.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );
    return NextResponse.json(updateExperience, { status: 201 });
  } catch (error: any) {
    console.error(error.message);
    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
// delete existing Experience
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  // const id = req.nextUrl.searchParams.get("id");
  const { id } = params;

  try {
    if (!id)
      return NextResponse.json(
        {
          error:
            "experience id required for delete in path params, for eg. /api/experience/${id}",
        },
        { status: 404 }
      );
    await connectDB();
    const experienceExist = await Experience.findById(id);
    if (!experienceExist) {
      return NextResponse.json(
        { error: "Experience does not exit with this id" },
        { status: 404 }
      );
    }

    await Experience.findByIdAndDelete(id);
    return NextResponse.json(
      { message: `Experience with id:${id} has been deleted successfully` },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
