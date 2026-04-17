import { MonitorPlay, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Guia de Configuração Digital Fun Box | Suporte Técnico 2026",
  description: "Aprenda a configurar sua central de entretenimento Digital Fun Box em dispositivos Android TV, FireStick e TV Box.",
};

export default function BasicSetup() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 dark:bg-zinc-950 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="mb-12 border-b border-zinc-100 pb-8 dark:border-zinc-800">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30">
            <MonitorPlay size={24} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Como Configurar sua Digital Fun Box
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Siga este guia técnico para otimizar sua conectividade e garantir o melhor desempenho do seu reprodutor de mídia.
          </p>
        </header>

        <section className="space-y-12">
          <div className="flex gap-6">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span>
            <div>
              <h2 className="text-xl font-bold dark:text-white">Preparação do Dispositivo</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Certifique-se de que seu dispositivo está conectado a uma rede Wi-Fi estável (preferencialmente 5GHz). Acesse as configurações e habilite a instalação de fontes desconhecidas para o player.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</span>
            <div>
              <h2 className="text-xl font-bold dark:text-white">Inserção do Token de Acesso</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Abra o aplicativo e utilize o teclado virtual para inserir o seu PIN de ativação. Os PINs da Digital Fun Box são sensíveis a maiúsculas e minúsculas.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-50 p-8 dark:bg-blue-900/10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600">Dica de Especialista</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Caso encontre erros de conexão, limpe o cache do aplicativo nas configurações do sistema e tente novamente. A nossa infraestrutura em nuvem valida o seu token em tempo real.
            </p>
          </div>
        </section>

        <footer className="mt-16 border-t border-zinc-100 pt-8 text-center dark:border-zinc-800">
          <p className="text-sm text-zinc-500 italic">
            &quot;A Digital Fun Box fornece apenas consultoria técnica e intermediação de licenças. O uso do software é de responsabilidade do usuário final.&quot;
          </p>
        </footer>
      </article>
    </div>
  );
}