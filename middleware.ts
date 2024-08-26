import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const httpMethod = req.method;

  const authToken =
    req.cookies.get("next-auth.session-token")?.value ??
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!authToken) {
    if (pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    } else if (pathname === "/api/project" && httpMethod !== "GET") {
      return new NextResponse(JSON.stringify({ error: "Unauthorized!" }), {
        status: 401,
      });
    } else if (pathname === "/api/experience" && httpMethod !== "GET") {
      return new NextResponse(JSON.stringify({ error: "Unauthorized!" }), {
        status: 401,
      });
    } else if (pathname === "/api/auth/signup") {
      return new NextResponse(
        JSON.stringify({
          error: "Unauthorized! Only existing admin can add new admin",
        }),
        {
          status: 401,
        }
      );
    }
  } else {
    if (pathname === "/dashboard/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/project/:path*", "/api/auth/:path*"],
};
