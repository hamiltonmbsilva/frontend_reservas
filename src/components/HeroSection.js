// src/components/HeroSection.js
import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.conteudo}>
        <h1 className={styles.titulo}>Encontre a sua estadia perfeita.</h1>
        <p className={styles.subtitulo}>Descubra os melhores hotéis e quartos para sua próxima viagem.</p>
      </div>
    </section>
  );
}