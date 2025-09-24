// src/app/hoteis/page.js
"use client";
// src/app/page.js
import Layout from '../components/layout/Layout';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import CartaoHotel from '../components/CartaoHotel'; // Mantenha este para a seção de destaques
import { useEffect, useState } from 'react'; // Adicione esses imports
import styles from './page.module.css'; // Vamos criar este arquivo em breve

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
        // Limita a exibição a 3 hotéis na página inicial
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
    <Layout>
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
    </Layout>
  );
}

// Crie também o arquivo src/app/page.module.css
// e adicione estilos para as classes styles.secaoHoteis, styles.tituloSecao, etc.