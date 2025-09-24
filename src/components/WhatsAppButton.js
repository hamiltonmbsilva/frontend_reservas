// src/components/WhatsAppButton.js
import React from 'react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const numeroWhatsApp = "5511999999999"; // Substitua pelo seu número
  const mensagemPadrao = "Olá, gostaria de saber mais sobre as reservas.";

  return (
    <a 
      href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemPadrao)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.botaoWhatsApp}
    >
      <img 
        src="/icons/whatsapp-icon.png" 
        alt="WhatsApp" 
        className={styles.icone} 
      />
    </a>
  );
}