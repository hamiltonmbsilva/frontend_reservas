// src/components/CartaoHotel.js
import React from 'react';
import Link from 'next/link';
import styles from './CartaoHotel.module.css';

export default function CartaoHotel({ hotel }) {
  return (
    <div className={styles.cartao}>
      <div className={styles.conteudo}>
        <h3 className={styles.titulo}>{hotel.nome}</h3>
        <p className={styles.descricao}>{hotel.descricao}</p>
        <div className={styles.info}>
          <p className={styles.item}>
            <span className={styles.label}>Endereço:</span> {hotel.endereco}
          </p>
          <p className={styles.item}>
            <span className={styles.label}>Cidade:</span> {hotel.cidade}
          </p>
        </div>
      </div>
      <div className={styles.acoes}>
        <Link 
          href={`/hoteis/${hotel.id}`}
          className={styles.linkDetalhes}
        >
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
}