// src/app/page.js
"use client";
//import Layout from '../components/layout/Layout';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import CartaoHotel from '../components/CartaoHotel';
import Galeria from '../components/Galeria'; // Importe o novo componente Galeria
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
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
        setHoteis(data.slice(0, 3)); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHoteis();
  }, []);

  return (
    <>
      <HeroSection />
      <SearchBar />

      <div className={styles.secaoHoteis}>
        <h2 className={styles.tituloSecao}>Hotéis em Destaque</h2>
        {loading && <p className={styles.loading}>Carregando hotéis...</p>}
        {error && <p className={styles.erro}>Erro: {error}</p>}
        
        <div className={styles.listaHoteis}>
          {hoteis.length > 0 ? (
            hoteis.map(hotel => (
              <CartaoHotel key={hotel.id} hotel={hotel} />
            ))
          ) : (
            !loading && <p className={styles.semHoteis}>Nenhum hotel encontrado.</p>
          )}
        </div>
      </div>
       {/* Adicione o componente Galeria aqui, logo abaixo da seção de hotéis */}
      <Galeria />
    </>
  );
}