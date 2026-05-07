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

      <section className={styles.section}>
        <div className={styles.header}>
          <span>Reservas inteligentes</span>
          <h2>Hotéis em destaque</h2>
          <p>
            Cards modernos, responsivos e conectados com a API real do projeto.
          </p>
        </div>

        {loading && <p className={styles.message}>Carregando hotéis...</p>}
        {erro && <p className={styles.error}>{erro}</p>}

        <div className={styles.grid}>
          {hoteis.map((hotel) => (
            <CartaoHotel key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>

      <Galeria />
    </>
  );
}