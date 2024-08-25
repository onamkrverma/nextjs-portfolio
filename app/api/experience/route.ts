import { NextRequest, NextResponse } from "next/server";
import connectDB from "@utils/db";
import Experience from "@models/Experience";

// get all Experience list
export const GET = async (req: NextRequest) => {
  try {
    await connectDB();
    const experience: object[] = await Experience.find();
    return new NextResponse(JSON.stringify(experience), { status: 200 });
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

interface ExperienceRequest {
  jobTitle: string;
  companyName: string;
  description: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
}
// add new Experience
export const POST = async (req: Request) => {
  const {
    jobTitle,
    companyName,
    description,
    startDate,
    endDate,
    isWorkingHere,
  }: ExperienceRequest = await req.json();

  try {
    await connectDB();
    const experience = new Experience({
      jobTitle,
      companyName,
      description,
      startDate,
      endDate,
      isWorkingHere,
    });
    const addNewExperience = await experience.save();
    return NextResponse.json(addNewExperience, { status: 201 });
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : error);
    const status =
      error instanceof Error && error.name === "ValidationError" ? 422 : 500;
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status });
  }
};
