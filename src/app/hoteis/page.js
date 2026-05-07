"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import CartaoHotel from "../components/CartaoHotel";
import Galeria from "../components/Galeria";
import { apiFetch } from "../services/api";
import styles from "./page.module.css";

export default function Home() {
  const [hoteis, setHoteis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarHoteis() {
      try {
        const data = await apiFetch("/hoteis/");
        setHoteis(data.slice(0, 3));
      } catch (error) {
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    }

    carregarHoteis();
  }, []);

  return (
    <>
      <HeroSection />
      <SearchBar />

      <section className={styles.secaoHoteis}>
        <span className={styles.selo}>Projeto real HDS</span>
        <h2 className={styles.tituloSecao}>Hotéis em destaque</h2>

        {loading && <p className={styles.loading}>Carregando hotéis...</p>}
        {erro && <p className={styles.erro}>Erro: {erro}</p>}

        <div className={styles.listaHoteis}>
          {hoteis.length > 0 ? (
            hoteis.map((hotel) => <CartaoHotel key={hotel.id} hotel={hotel} />)
          ) : (
            !loading && <p className={styles.semHoteis}>Nenhum hotel encontrado.</p>
          )}
        </div>
      </section>

      <Galeria />
    </>
  );
}