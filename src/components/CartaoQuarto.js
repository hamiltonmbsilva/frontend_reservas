import React from "react";
import styles from "./CartaoQuarto.module.css";

export default function CartaoQuarto({ quarto }) {
  const imagem = quarto.imagem_url || "/images/quarto-placeholder.jpeg";

  return (
    <article className={styles.cartao}>
      <div className={styles.imagem}>
        <img src={imagem} alt={`Quarto ${quarto.numero}`} className={styles.img} />
      </div>

      <div className={styles.conteudo}>
        <span className={styles.seloHds}>HDS Reserva</span>
        <h3 className={styles.titulo}>Quarto {quarto.numero}</h3>
        <p className={styles.descricao}>Tipo: {quarto.tipo}</p>

        <div className={styles.info}>
          <p>Capacidade: {quarto.capacidade} pessoa(s)</p>
          <p>Diária: R$ {Number(quarto.preco_por_noite).toFixed(2)}</p>
          <p>{quarto.disponivel ? "Disponível" : "Indisponível"}</p>
        </div>
      </div>
    </article>
  );
}