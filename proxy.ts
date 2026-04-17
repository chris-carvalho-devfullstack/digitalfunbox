// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// No Next.js 16, a função exportada deve se chamar 'proxy' ou ser o export default
export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Lista de Bots para redirecionamento (Compliance/Blindagem)
  const isBot = /Googlebot|bingbot|Baiduspider|AnatelBot|RightsWatch/i.test(userAgent);

  // 2. Proteção de rotas sensíveis contra robôs
  if (isBot && (url.pathname.includes('checkout') || url.pathname.includes('comprar'))) {
    // Redireciona para o tutorial educativo (seu "Cavalo de Troia")
    return NextResponse.redirect(new URL('/tutoriais/configuracao-basica', request.url));
  }

  // 3. Header de verificação para o backend
  const response = NextResponse.next();
  response.headers.set('x-dfb-verified', 'true');

  return response;
}

// O matcher permanece o mesmo
export const config = {
  matcher: ['/checkout/:path*', '/api/keys/:path*'],
};