import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.brand}>
          <div className={styles.logo}>
            <span>HDS</span>
            <strong>ReservaMB</strong>
          </div>

          <p>
            Sistema de reservas moderno, responsivo e conectado com API.
            Projeto criado para demonstrar evolução prática em front-end,
            backend e experiência do usuário.
          </p>
        </section>

        <section className={styles.column}>
          <h4>Navegação</h4>
          <Link href="/">Home</Link>
          <Link href="/hoteis">Hotéis</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/contato">Contato</Link>
        </section>

        <section className={styles.column}>
          <h4>Projeto</h4>
          <span>Next.js</span>
          <span>Django REST API</span>
          <span>Design Responsivo</span>
          <span>HDS Portfolio</span>
        </section>
      </div>

      <div className={styles.bottom}>
        <p>© {anoAtual} ReservaMB HDS. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}