import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (process.env.SITE_LOCKED !== "true") {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (pathname === "/down") {
    return NextResponse.next()
  }

  return NextResponse.rewrite(new URL("/down", request.url))
}

export const config = {
  matcher: [
    /*
     * Match all paths except Next.js internals and static files.
     * Everything else (pages + API) is rewritten to /down when locked.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|PNG)$).*)",
  ],
}
