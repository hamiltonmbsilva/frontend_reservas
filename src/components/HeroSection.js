import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.badge}>Projeto Full Stack HDS</span>

        <h1>
          Encontre hotéis, quartos e experiências com uma reserva simples.
        </h1>

        <p>
          Um sistema moderno de reservas criado com front-end responsivo,
          integração com API e estrutura preparada para evoluir como produto real.
        </p>

        <div className={styles.actions}>
          <Link href="/hoteis" className={styles.primary}>
            Ver hotéis
          </Link>
          <Link href="/contato" className={styles.secondary}>
            Falar com atendimento
          </Link>
        </div>

        <div className={styles.metrics}>
          <div>
            <strong>100%</strong>
            <span>Responsivo</span>
          </div>
          <div>
            <strong>API</strong>
            <span>Django REST</span>
          </div>
          <div>
            <strong>HDS</strong>
            <span>Projeto Portfólio</span>
          </div>
        </div>
      </div>
    </section>
  );
}