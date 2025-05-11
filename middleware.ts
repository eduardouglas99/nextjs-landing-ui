import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const languageCookie = request.cookies.get("preferredLanguage")

  if (!languageCookie) {
    const acceptLanguage = request.headers.get("accept-language") || ""
    const preferredLanguage = acceptLanguage.includes("pt") ? "PT" : "EN"

    const response = NextResponse.next()
    response.cookies.set("preferredLanguage", preferredLanguage)

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
