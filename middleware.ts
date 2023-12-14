import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("middleware");
  const httpMethod = req.method;

  const authToken = req.cookies.get("next-auth.session-token")?.value;
  console.log(authToken);

  if (pathname === "/dashboard") {
    if (!authToken) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }
  }
  if (pathname === "/dashboard/login") {
    if (authToken) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  if (pathname === "/api/projects" && httpMethod !== "GET") {
    if (!authToken) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized!" }), {
        status: 401,
      });
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/projects/:path*"],
};
