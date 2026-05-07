"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const router = useRouter();
  const [busca, setBusca] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const termo = busca.trim();

    if (!termo) {
      router.push("/hoteis");
      return;
    }

    router.push(`/hoteis?busca=${encodeURIComponent(termo)}`);
  }

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <span>Destino</span>
          <input
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            type="text"
            placeholder="Hotel, cidade ou estado"
          />
        </div>

        <div className={styles.field}>
          <span>Check-in</span>
          <input type="date" />
        </div>

        <div className={styles.field}>
          <span>Check-out</span>
          <input type="date" />
        </div>

        <button type="submit">Buscar HDS</button>
      </form>
    </section>
  );
}