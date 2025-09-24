// src/components/Navbar.js
"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.linkLogo}>MyHotel</span>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/">
            <span className={styles.link}>Home</span>
          </Link>
          <Link href="/hoteis">
            <span className={styles.link}>Hotéis</span>
          </Link>
          <Link href="/galeria">
            <span className={styles.link}>Galeria</span>
          </Link>
          <Link href="/quem-somos">
            <span className={styles.link}>Quem Somos</span>
          </Link>
          <Link href="/contato">
            <span className={styles.link}>Contato</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}