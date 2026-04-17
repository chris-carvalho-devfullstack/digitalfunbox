import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Não declarar "runtime" aqui — o OpenNext/Cloudflare gerencia isso automaticamente

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";

  const isBot =
    /Googlebot|bingbot|Baiduspider|AnatelBot|RightsWatch/i.test(userAgent);

  if (
    isBot &&
    (url.pathname.includes("checkout") || url.pathname.includes("comprar"))
  ) {
    return NextResponse.redirect(
      new URL("/tutoriais/configuracao-basica", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/api/keys/:path*"],
};