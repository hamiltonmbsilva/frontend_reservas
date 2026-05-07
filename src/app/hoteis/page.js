"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import CartaoHotel from "../../components/CartaoHotel";
import SkeletonHotelCard from "../../components/SkeletonHotelCard";
import { apiFetch } from "../../services/api";
import styles from "./HoteisPage.module.css";

export default function HoteisPage() {
  const searchParams = useSearchParams();

  const [hoteis, setHoteis] = useState([]);
  const [busca, setBusca] = useState(searchParams.get("busca") || "");
  const [estado, setEstado] = useState("");
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

  const estadosDisponiveis = useMemo(() => {
    const estados = hoteis.map((hotel) => hotel.estado).filter(Boolean);
    return [...new Set(estados)];
  }, [hoteis]);

  const hoteisFiltrados = useMemo(() => {
    return hoteis.filter((hotel) => {
      const termo = busca.toLowerCase().trim();

      const combinaBusca = termo
        ? `${hotel.nome} ${hotel.cidade} ${hotel.estado} ${hotel.pais}`
            .toLowerCase()
            .includes(termo)
        : true;

      const combinaEstado = estado ? hotel.estado === estado : true;

      return combinaBusca && combinaEstado;
    });
  }, [busca, estado, hoteis]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>Reserva HDS</span>

        <h1>Encontre hotéis com uma experiência mais inteligente</h1>

        <p>
          Filtros rápidos, carregamento elegante e visual moderno para transformar
          o projeto em uma plataforma mais profissional.
        </p>
      </section>

      <section className={styles.filters}>
        <div className={styles.field}>
          <label>Buscar</label>
          <input
            type="text"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Nome, cidade, estado ou país..."
          />
        </div>

        <div className={styles.field}>
          <label>Estado</label>
          <select
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
          >
            <option value="">Todos</option>

            {estadosDisponiveis.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            setBusca("");
            setEstado("");
          }}
        >
          Limpar filtros
        </button>
      </section>

      {erro && <p className={styles.error}>{erro}</p>}

      {loading ? (
        <section className={styles.grid}>
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonHotelCard key={`skeleton-hds-${index}`} />
          ))}
        </section>
      ) : (
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