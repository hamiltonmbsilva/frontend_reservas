// src/components/SearchBar.js
import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input 
          type="text" 
          placeholder="Buscar por hotel, cidade ou quarto..."
          className={styles.input}
        />
        <button type="submit" className={styles.botao}>
          Buscar
        </button>
      </form>
    </div>
  );
}