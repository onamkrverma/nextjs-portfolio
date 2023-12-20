import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, email, subject, message } = await req.json();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        access_key: process.env.FORM_ACCESS_KEY,
        from_name: "Onam Portfolio Mail",
      }),
    });
    if (response.status !== 200) {
      return NextResponse.json(
        { error: "Failed to send mail" },
        { status: response.status }
      );
    }
    return NextResponse.json(
      { success: "Mail sent successfully" },
      { status: response.status }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
