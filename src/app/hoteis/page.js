"use client";

import { useEffect, useMemo, useState } from "react";
import CartaoHotel from "../../components/CartaoHotel";
import { apiFetch } from "../../services/api";
import styles from "./HoteisPage.module.css";

export default function HoteisPage() {
  const [hoteis, setHoteis] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarHoteis() {
      try {
        const data = await apiFetch("/hoteis/");
        setHoteis(data);
      } catch (error) {
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    }

    carregarHoteis();
  }, []);

  const hoteisFiltrados = useMemo(() => {
    const termo = busca.toLowerCase().trim();

    if (!termo) return hoteis;

    return hoteis.filter((hotel) =>
      `${hotel.nome} ${hotel.cidade} ${hotel.estado} ${hotel.pais}`
        .toLowerCase()
        .includes(termo)
    );
  }, [busca, hoteis]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>Reserva HDS</span>
        <h1>Escolha o hotel ideal para sua próxima estadia</h1>
        <p>
          Uma vitrine moderna, responsiva e conectada com API real para transformar
          este projeto em uma solução apresentável no seu portfólio.
        </p>
      </section>

      <section className={styles.searchBox}>
        <input
          type="text"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Buscar por nome, cidade, estado ou país..."
        />
      </section>

      {loading && <p className={styles.message}>Carregando hotéis...</p>}
      {erro && <p className={styles.error}>{erro}</p>}

      {!loading && !erro && (
        <section className={styles.grid}>
          {hoteisFiltrados.length > 0 ? (
            hoteisFiltrados.map((hotel) => (
              <CartaoHotel key={hotel.id} hotel={hotel} />
            ))
          ) : (
            <p className={styles.message}>Nenhum hotel encontrado.</p>
          )}
        </section>
      )}
    </main>
  );
}