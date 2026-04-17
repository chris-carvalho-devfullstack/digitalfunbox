// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Adicione esta linha para compatibilidade com Cloudflare
export const runtime = 'edge'; 

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Lista de Bots para redirecionamento (Compliance/Blindagem)
  const isBot = /Googlebot|bingbot|Baiduspider|AnatelBot|RightsWatch/i.test(userAgent);

  // 2. Proteção de rotas sensíveis
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