import { ShieldCheck, BookOpen, MonitorPlay, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Mobile First com sintaxe Tailwind 4 */}
      <section className="px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-32 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-950/10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Sua Experiência Digital <span className="text-blue-600">Otimizada</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 px-2 sm:px-0">
            Acesse guias de configuração passo a passo e gerencie suas licenças de entretenimento com total segurança e rapidez.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/tutoriais/configuracao-basica"
              className="flex h-14 items-center justify-center rounded-2xl bg-blue-600 px-8 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95"
            >
              Começar Tutorial
            </a>
            <a
              href="/verificar"
              className="flex h-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 text-base font-bold text-zinc-900 transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              Ativar Licença
            </a>
          </div>
        </div>
      </section>

      {/* Grid de Serviços - Agora usando MonitorPlay */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Tutoriais Simples</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Configuração guiada para FireStick, Android TV e dispositivos diversos.</p>
          </div>

          <div className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Gestão Segura</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Verificação instantânea de validade de PINs e chaves de acesso oficiais.</p>
          </div>

          <div className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-900 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30">
              <MonitorPlay size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Multidispositivos</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Sua licença Digital Fun Box funciona perfeitamente em múltiplos sistemas de reprodução.</p>
          </div>
        </div>
      </section>

      {/* Seção de Compliance com Aspas Escapadas */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm italic text-zinc-500">
            &quot;A Digital Fun Box atua como intermediária facilitadora no licenciamento de softwares de entretenimento e conectividade. Não hospedamos, transmitimos ou distribuímos conteúdos protegidos por direitos autorais.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}