// src/components/Navbar.js
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  // Estado para garantir que a classe ativa só seja aplicada no cliente
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    // Isso garante que o componente só aplique a lógica que difere
    // entre Server e Client APÓS a montagem do lado do cliente
    setIsMounted(true);
  }, []);

  // Use a variável de pathname apenas se o componente estiver montado
  const activeClass = (path) => 
    isMounted ? (pathname === path || (path === '/hoteis' && pathname.startsWith('/hoteis/')) ? styles.active : '') : '';
    
  // NOTA: Para a rota de Hoteis, precisamos de uma lógica mais robusta
  const isHoteisActive = isMounted && pathname.startsWith('/hoteis');
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.linkLogo}>ReservasMB</span>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/">
            <span className={`${styles.link} ${activeClass('/')}`}>Home</span>
          </Link>
          <Link href="/hoteis">
            <span className={`${styles.link} ${isHoteisActive ? styles.active : ''}`}>Hotéis</span>
          </Link>
          <Link href="/galeria">
            <span className={`${styles.link} ${activeClass('/galeria')}`}>Galeria</span>
          </Link>
          <Link href="/quem-somos">
            <span className={`${styles.link} ${activeClass('/quem-somos')}`}>Quem Somos</span>
          </Link>
          <Link href="/contato">
            <span className={`${styles.link} ${activeClass('/contato')}`}>Contato</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}