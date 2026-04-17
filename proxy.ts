import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// "runtime" não é mais permitido no proxy — roda sempre em Node.js
// "config" com matcher não é mais permitido — proxy intercepta TODAS as rotas

export default function proxy(request: NextRequest) {
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