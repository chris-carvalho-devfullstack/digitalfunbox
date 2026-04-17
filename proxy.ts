// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Lista de Bots que queremos "educar" com conteúdo limpo
  const isBot = /Googlebot|bingbot|Baiduspider|AnatelBot|RightsWatch/i.test(userAgent);

  // 2. Se for um Bot tentando acessar caminhos de checkout ou chaves
  if (isBot && (url.pathname.includes('checkout') || url.pathname.includes('comprar'))) {
    // Redirecionamos o robô para um tutorial inofensivo
    return NextResponse.redirect(new URL('/tutoriais/configuracao-basica', request.url));
  }

  // 3. Adiciona um header para identificarmos no backend se é um humano validado
  const response = NextResponse.next();
  response.headers.set('x-dfb-verified', 'true');

  return response;
}

// Define em quais rotas o middleware deve atuar
export const config = {
  matcher: ['/checkout/:path*', '/api/keys/:path*'],
};