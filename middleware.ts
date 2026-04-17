// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Alterado para 'experimental-edge' conforme solicitado pelo erro de build do Next.js 16
export const runtime = 'experimental-edge';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';

  // Lógica de Blindagem para o Digital Fun Box
  const isBot = /Googlebot|bingbot|Baiduspider|AnatelBot|RightsWatch/i.test(userAgent);

  if (isBot && (url.pathname.includes('checkout') || url.pathname.includes('comprar'))) {
    return NextResponse.redirect(new URL('/tutoriais/configuracao-basica', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('x-dfb-verified', 'true');

  return response;
}

export const config = {
  matcher: ['/checkout/:path*', '/api/keys/:path*'],
};