"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CartaoQuarto from "../../../components/CartaoQuarto";
import { apiFetch } from "../../../services/api";
import styles from "./DetalhesHotel.module.css";

export default function DetalhesHotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        const hotelData = await apiFetch(`/hoteis/${id}/`);
        const quartosData = await apiFetch(`/quartos/?hotel=${id}&disponivel=true`);

        setHotel(hotelData);
        setQuartos(quartosData);
      } catch (error) {
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) carregarDados();
  }, [id]);

  if (loading) {
    return <main className={styles.container}>Carregando detalhes do hotel...</main>;
  }

  if (erro) {
    return <main className={styles.container}><p className={styles.erro}>{erro}</p></main>;
  }

  if (!hotel) {
    return <main className={styles.container}>Hotel não encontrado.</main>;
  }

  const imagem = hotel.imagem_principal_url || "/images/hotel-placeholder.jpeg";

  return (
    <main className={styles.container}>
      <div className={styles.imagemPrincipal}>
        <img src={imagem} alt={`Imagem de ${hotel.nome}`} className={styles.img} />
      </div>

      <header className={styles.header}>
        <span className={styles.selo}>Reserva HDS</span>
        <h1 className={styles.titulo}>{hotel.nome}</h1>
        <p className={styles.endereco}>
          {hotel.endereco}, {hotel.cidade} - {hotel.estado}
        </p>
      </header>

      <section className={styles.descricao}>
        <p>{hotel.descricao}</p>
      </section>

      <h2 className={styles.subtitulo}>Quartos disponíveis</h2>

      <section className={styles.listaQuartos}>
        {quartos.length > 0 ? (
          quartos.map((quarto) => <CartaoQuarto key={quarto.id} quarto={quarto} />)
        ) : (
          <p className={styles.semQuartos}>Nenhum quarto disponível para este hotel.</p>
        )}
      </section>
    </main>
  );
}