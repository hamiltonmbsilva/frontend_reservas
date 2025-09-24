// src/app/hoteis/page.js
"use client";

import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import HotelCard from '../../components/HotelCard';

export default function HoteisPage() {
  const [hoteis, setHoteis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHoteis() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/hoteis/');
        if (!response.ok) {
          throw new Error('Falha ao buscar os dados da API.');
        }
        const data = await response.json();
        setHoteis(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHoteis();
  }, []); // O array vazio garante que a função só roda uma vez, ao montar o componente

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl text-gray-700">Carregando hotéis...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl text-red-500">Erro: {error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nossos Hotéis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hoteis.length > 0 ? (
            hoteis.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">Nenhum hotel encontrado.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}