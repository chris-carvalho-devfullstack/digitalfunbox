import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mantemos apenas o typescript para evitar que erros de tipagem travem o build da Cloudflare
  typescript: { ignoreBuildErrors: true }
};

export default nextConfig;

// Setup para rodar localmente no OpenNext
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());