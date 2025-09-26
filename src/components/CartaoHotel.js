// src/components/CartaoHotel.js
import React from 'react';
import Link from 'next/link';
import styles from './CartaoHotel.module.css';

export default function CartaoHotel({ hotel }) {
  // Constrói a URL do link para a página de detalhes
  const hotelLink = `/hoteis/${hotel.id}`;

  // Prepara o estilo de fundo com a imagem principal do hotel
  const backgroundStyle = {
    backgroundImage: `url(${hotel.imagem_principal})`,
  };

  return (
    <Link href={hotelLink} className={styles.linkWrapper}>
      <div className={styles.cartao}>
        
        {/* A imagem como plano de fundo */}
        <div 
          className={styles.imagemFundo} 
          style={backgroundStyle}
          role="img"
          aria-label={`Foto de ${hotel.nome}`}
        ></div>
        
        {/* O overlay escuro e o texto por cima */}
        <div className={styles.overlay}>
          <h3 className={styles.nome}>{hotel.nome}</h3>
          <p className={styles.cidade}>{hotel.cidade}</p>
        </div>
        
      </div>
    </Link>
  );
}