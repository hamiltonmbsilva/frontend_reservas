// src/components/CartaoQuarto.js
import React from 'react';
import styles from './CartaoQuarto.module.css';

export default function CartaoQuarto({ quarto }) {
  return (
    <div className={styles.cartao}>
      {/* Adicione a imagem principal do quarto aqui */}
      {quarto.imagem_principal && (
          <div className={styles.imagem}>
              <img src={quarto.imagem_principal} alt={`Quarto ${quarto.tipo}`} className={styles.img} />
          </div>
      )}

      <div className={styles.conteudo}>
        <h3 className={styles.titulo}>{quarto.tipo}</h3>
        <p className={styles.descricao}>{quarto.descricao}</p>
        <div className={styles.info}>
          <p>Capacidade: {quarto.capacidade_de_pessoas} pessoas</p>
          <p>Preço: R$ {quarto.preco_por_noite}</p>
        </div>
      </div>
    </div>
  );
}