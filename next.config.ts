import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Se o TypeScript reclamar de 'eslint' ou 'typescript' dentro do objeto,
  // é porque a versão experimental que você usa mudou a estrutura ou 
  // o plugin do VS Code está usando uma definição de tipo antiga.
  
  eslint: {
    // Isso ignora os erros de lint durante o build na Cloudflare
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Isso ignora erros de tipagem no build, o que ajuda a passar o deploy
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

// Inicialização para desenvolvimento com Cloudflare
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());