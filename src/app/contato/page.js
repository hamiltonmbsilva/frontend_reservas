"use client";

import { useState } from "react";
import styles from "./Contato.module.css";

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setEnviado(true);

    event.target.reset();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>Contato HDS</span>

        <h1>Vamos conversar sobre reservas modernas?</h1>

        <p>
          Entre em contato para conhecer mais sobre o projeto ReservaMB
          e futuras evoluções da plataforma.
        </p>
      </section>

      <section className={styles.container}>
        <div className={styles.info}>
          <h2>Fale conosco</h2>

          <div className={styles.infoItem}>
            <strong>Email</strong>
            <span>contato@reservamb.com</span>
          </div>

          <div className={styles.infoItem}>
            <strong>WhatsApp</strong>
            <span>(32) 99999-9999</span>
          </div>

          <div className={styles.infoItem}>
            <strong>Projeto</strong>
            <span>ReservaMB HDS</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nome
            <input type="text" required placeholder="Seu nome" />
          </label>

          <label>
            E-mail
            <input type="email" required placeholder="Seu e-mail" />
          </label>

          <label>
            Mensagem
            <textarea
              required
              placeholder="Digite sua mensagem"
              rows={6}
            />
          </label>

          {enviado && (
            <p className={styles.success}>
              Mensagem enviada com sucesso HDS.
            </p>
          )}

          <button type="submit">
            Enviar mensagem
          </button>
        </form>
      </section>
    </main>
  );
}