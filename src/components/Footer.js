// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.secao}>
          <h4 className={styles.titulo}>MyHotel</h4>
          <p className={styles.texto}>
            Encontrando sua estadia perfeita desde 2025.
          </p>
        </div>
        <div className={styles.secao}>
          <h4 className={styles.titulo}>Navegação</h4>
          <ul className={styles.lista}>
            <li><a href="/" className={styles.link}>Home</a></li>
            <li><a href="/hoteis" className={styles.link}>Hotéis</a></li>
            <li><a href="/galeria" className={styles.link}>Galeria</a></li>
            <li><a href="/quem-somos" className={styles.link}>Quem Somos</a></li>
            <li><a href="/contato" className={styles.link}>Contato</a></li>
          </ul>
        </div>
        <div className={styles.secao}>
          <h4 className={styles.titulo}>Siga-nos</h4>
          <div className={styles.redesSociais}>
            <a href="#" className={styles.linkSocial}>Facebook</a>
            <a href="#" className={styles.linkSocial}>Instagram</a>
            <a href="#" className={styles.linkSocial}>Twitter</a>
          </div>
        </div>
      </div>
      <div className={styles.direitos}>
        <p>&copy; 2025 MyHotel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}