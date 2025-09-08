// src/app/page.js

import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4"> {/* Adicionei um bg-gray-50 e p-4 para um fundo claro e espaçamento */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8">
          Bem-vindo ao Sistema de Reservas
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl">
          Encontre os melhores quartos nos melhores hotéis e reserve sua estadia perfeita.
        </p>
      </div>
    </Layout>
  );
}
