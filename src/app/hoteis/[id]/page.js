"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CartaoQuarto from "../../../components/CartaoQuarto";
import { apiFetch } from "../../../services/api";
import styles from "./DetalhesHotel.module.css";

export default function DetalhesHotelPage() {
  const { id } = useParams();

  const [hotel, setHotel] = useState(null);
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarDetalhes() {
      try {
        const hotelData = await apiFetch(`/hoteis/${id}/`);
        const quartosData = await apiFetch(`/quartos/?hotel=${id}`);

        setHotel(hotelData);
        setQuartos(quartosData);
      } catch (error) {
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) carregarDetalhes();
  }, [id]);

  if (loading) {
    return <main className={styles.page}>Carregando detalhes...</main>;
  }

  if (erro) {
    return <main className={styles.page}><p className={styles.error}>{erro}</p></main>;
  }

  if (!hotel) {
    return <main className={styles.page}>Hotel não encontrado.</main>;
  }

  const imagem = hotel.imagem_principal_url || hotel.imagem_principal || "/images/hotel-placeholder.jpeg";

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.imageBox}>
          <img src={imagem} alt={hotel.nome} />
        </div>

        <div className={styles.infoBox}>
          <span className={styles.badge}>Hotel selecionado HDS</span>
          <h1>{hotel.nome}</h1>
          <p className={styles.location}>
            {hotel.endereco}, {hotel.cidade} - {hotel.estado}
          </p>
          <p className={styles.description}>{hotel.descricao}</p>

          <div className={styles.highlights}>
            <div>
              <strong>{quartos.length}</strong>
              <span>quarto(s)</span>
            </div>
            <div>
              <strong>{hotel.cidade}</strong>
              <span>localização</span>
            </div>
            <div>
              <strong>API</strong>
              <span>integrada</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.roomsSection}>
        <div className={styles.sectionHeader}>
          <span>Disponibilidade</span>
          <h2>Quartos deste hotel</h2>
          <p>Escolha um quarto e avance para a reserva real do sistema.</p>
        </div>

        <div className={styles.roomsGrid}>
          {quartos.length > 0 ? (
            quartos.map((quarto) => (
              <CartaoQuarto key={quarto.id} quarto={quarto} />
            ))
          ) : (
            <p className={styles.empty}>Nenhum quarto cadastrado para este hotel.</p>
          )}
        </div>
      </section>
    </main>
  );
}