// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Esta configuração é OBRIGATÓRIA para a Cloudflare e NÃO é permitida no proxy.ts
export const runtime = 'edge';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Lógica de Blindagem (Bots/Auditoria)
  const isBot = /Googlebot|bingbot|Baiduspider|AnatelBot|RightsWatch/i.test(userAgent);

  // 2. Redirecionamento de Compliance
  if (isBot && (url.pathname.includes('checkout') || url.pathname.includes('comprar'))) {
    return NextResponse.redirect(new URL('/tutoriais/configuracao-basica', request.url));
  }

  // 3. Header de verificação
  const response = NextResponse.next();
  response.headers.set('x-dfb-verified', 'true');

  return response;
}

export const config = {
  matcher: ['/checkout/:path*', '/api/keys/:path*'],
};