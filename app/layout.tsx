import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Fun Box | Suporte e Entretenimento",
  description: "Central de tutoriais, suporte técnico e gestão de licenças digitais para dispositivos de streaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-blue-600">Digital<span className="text-zinc-900 dark:text-white">FunBox</span></span>
            </div>
            <nav className="hidden space-x-8 md:flex text-sm font-medium">
              <a href="/tutoriais" className="transition-colors hover:text-blue-600">Tutoriais</a>
              <a href="/suporte" className="transition-colors hover:text-blue-600">Suporte</a>
              <a href="/verificar" className="transition-colors hover:text-blue-600">Verificar PIN</a>
            </nav>
            {/* Botão simples para mobile - pode ser expandido com um menu lateral depois */}
            <div className="md:hidden">
              <button className="p-2 text-zinc-600 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
  <div className="mx-auto max-w-7xl px-4 text-center text-sm text-zinc-500 sm:px-6 lg:px-8">
    <p>&copy; 2026 Digital Fun Box. Todos os direitos reservados.</p>
    <p className="mt-2 text-xs italic">Intermediação de licenças e consultoria técnica especializada.</p>
  </div>
</footer>
      </body>
    </html>
  );
}