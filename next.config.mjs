// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Seus ajustes para o problema anterior estão aqui:
  
  compiler: {
    // Esta linha ajuda a evitar problemas de binários nativos do SWC
    reactRemoveProperties: { properties: ['^data-test$', '^data-cy$'] },
  },
};

// Use 'export default' em vez de 'module.exports'
export default nextConfig;