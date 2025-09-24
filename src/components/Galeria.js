// src/components/Galeria.js
import React from 'react';
import styles from './Galeria.module.css';

// Dados de exemplo para a galeria
// Substitua por suas próprias imagens na pasta public/images/galeria
const imagensGaleria = [
  { id: 1, src: '/images/galeria/img1.jpeg', alt: 'Quarto de Hotel de Luxo' },
  { id: 2, src: '/images/galeria/img2.jpeg', alt: 'Piscina de Borda Infinita' },
  { id: 3, src: '/images/galeria/img3.jpeg', alt: 'Vista Panorâmica da Cidade' },
  { id: 4, src: '/images/galeria/img4.jpeg', alt: 'Restaurante Sofisticado' },
  { id: 5, src: '/images/galeria/img5.jpeg', alt: 'Área de Lazer e SPA' },
  { id: 6, src: '/images/galeria/img6.jpeg', alt: 'Hall de Entrada Moderno' },
];

export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <div className={styles.container}>
        <h2 className={styles.tituloSecao}>Conheça Nossos Espaços</h2>
        <div className={styles.gridGaleria}>
          {imagensGaleria.map(imagem => (
            <div key={imagem.id} className={styles.item}>
              <img 
                src={imagem.src} 
                alt={imagem.alt} 
                className={styles.imagem} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}