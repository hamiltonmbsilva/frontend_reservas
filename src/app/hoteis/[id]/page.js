// src/app/hoteis/[id]/page.js
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
//import Layout from '../../../components/layout/Layout';
import CartaoQuarto from '../../../components/CartaoQuarto';
import styles from './DetalhesHotel.module.css';

export default function DetalhesHotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHotelData() {
      try {
        setLoading(true);
        // Busca os detalhes do hotel
        const hotelResponse = await fetch(`http://127.0.0.1:8000/api/hoteis/${id}/`);
        if (!hotelResponse.ok) {
          throw new Error('Hotel não encontrado');
        }
        const hotelData = await hotelResponse.json();
        setHotel(hotelData);

        // Busca os quartos relacionados a este hotel
        const quartosResponse = await fetch(`http://127.0.0.1:8000/api/quartos/?hotel_id=${id}`);
        if (!quartosResponse.ok) {
          throw new Error('Falha ao buscar quartos');
        }
        const quartosData = await quartosResponse.json();
        setQuartos(quartosData);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchHotelData();
    }
  }, [id]);

  if (loading) {
    return <div className={styles.container}><p>Carregando detalhes do hotel...</p></div>;
  }

  if (error) {
    return <div className={styles.container}><p className={styles.erro}>{error}</p></div>;
  }

  if (!hotel) {
    return <div className={styles.container}><p>Hotel não encontrado.</p></div>;
  }

  return (
    
      <div className={styles.container}>
        {/* Adicione a imagem principal do hotel aqui */}
        {hotel.imagem_principal && (
            <div className={styles.imagemPrincipal}>
                <img src={hotel.imagem_principal} alt={`Imagem de ${hotel.nome}`} className={styles.img} />
            </div>
        )}

        <div className={styles.header}>
          <h1 className={styles.titulo}>{hotel.nome}</h1>
          <p className={styles.endereco}>{hotel.endereco}, {hotel.cidade}</p>
        </div>
        <div className={styles.descricao}>
          <p>{hotel.descricao}</p>
        </div>

        <h2 className={styles.subtitulo}>Quartos Disponíveis</h2>
        <div className={styles.listaQuartos}>
          {quartos.length > 0 ? (
            quartos.map(quarto => (
              <CartaoQuarto key={quarto.id} quarto={quarto} />
            ))
          ) : (
            <p className={styles.semQuartos}>Nenhum quarto disponível para este hotel.</p>
          )}
        </div>
      </div>
    
  );
}