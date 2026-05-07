import styles from "./QuemSomos.module.css";

export default function QuemSomosPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>Sobre a HDS</span>

        <h1>
          Transformando reservas online em experiências modernas e intuitivas
        </h1>

        <p>
          O projeto ReservaMB nasceu para unir tecnologia moderna,
          experiência do usuário e performance em um sistema completo
          de reservas online.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.card}>
          <h2>Missão</h2>

          <p>
            Criar uma plataforma moderna, escalável e responsiva que permita
            hotéis e clientes terem uma experiência simples, rápida e elegante.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Tecnologias</h2>

          <ul>
            <li>Next.js 15</li>
            <li>Django REST API</li>
            <li>Design Responsivo</li>
            <li>Arquitetura moderna HDS</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Objetivo</h2>

          <p>
            Evoluir este projeto para um produto real preparado para hospedagem,
            autenticação, pagamentos e gestão completa de reservas.
          </p>
        </div>
      </section>

      <section className={styles.highlight}>
        <div className={styles.highlightContent}>
          <span>Projeto Portfólio HDS</span>

          <h2>
            Desenvolvido pensando em UX moderna, performance e escalabilidade
          </h2>

          <p>
            Toda a estrutura foi criada para demonstrar domínio em front-end,
            back-end, API REST, responsividade e experiência visual moderna.
          </p>
        </div>
      </section>
    </main>
  );
}