import Link from "next/link";
import styles from "./CartaoQuarto.module.css";

export default function CartaoQuarto({ quarto }) {
  const imagem = quarto.imagem_url || quarto.imagem || "/images/quarto-placeholder.jpeg";
  const preco = Number(quarto.preco_por_noite || 0).toFixed(2);

  return (
    <article className={styles.card}>
      <div className={styles.imageBox}>
        <img src={imagem} alt={`Quarto ${quarto.numero}`} />
        <span className={quarto.disponivel ? styles.available : styles.unavailable}>
          {quarto.disponivel ? "Disponível" : "Indisponível"}
        </span>
      </div>

      <div className={styles.content}>
        <span className={styles.tag}>Quarto HDS</span>
        <h3>Quarto {quarto.numero}</h3>

        <div className={styles.details}>
          <p><strong>Tipo:</strong> {quarto.tipo}</p>
          <p><strong>Capacidade:</strong> {quarto.capacidade} pessoa(s)</p>
          <p><strong>Diária:</strong> R$ {preco}</p>
        </div>

        {quarto.disponivel ? (
          <Link href={`/reserva/${quarto.id}`} className={styles.button}>
            Reservar quarto
          </Link>
        ) : (
          <button className={styles.buttonDisabled} disabled>
            Indisponível
          </button>
        )}
      </div>
    </article>
  );
}