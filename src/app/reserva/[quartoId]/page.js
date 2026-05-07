"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiFetch } from "../../../services/api";
import styles from "./ReservaPage.module.css";

const estadoInicial = {
  nome: "",
  email: "",
  telefone: "",
  data_check_in: "",
  data_check_out: "",
};

export default function ReservaPage() {
  const { quartoId } = useParams();

  const [quarto, setQuarto] = useState(null);
  const [form, setForm] = useState(estadoInicial);
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(null);

  useEffect(() => {
    async function carregarQuarto() {
      try {
        const data = await apiFetch(`/quartos/${quartoId}/`);
        setQuarto(data);
      } catch (error) {
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (quartoId) carregarQuarto();
  }, [quartoId]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErro(null);
    setSucesso(null);
    setEnviando(true);

    try {
      const cliente = await apiFetch("/clientes/", {
        method: "POST",
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
        }),
      });

      await apiFetch("/reservas/", {
        method: "POST",
        body: JSON.stringify({
          cliente: cliente.id,
          quarto: Number(quartoId),
          data_check_in: form.data_check_in,
          data_check_out: form.data_check_out,
          status: "pendente",
        }),
      });

      setSucesso("Reserva criada com sucesso! Status inicial: pendente.");
      setForm(estadoInicial);
    } catch (error) {
      setErro(error.message);
    } finally {
      setEnviando(false);
    }
  }

  if (loading) {
    return <main className={styles.page}>Carregando quarto...</main>;
  }

  if (!quarto) {
    return <main className={styles.page}>Quarto não encontrado.</main>;
  }

  const imagem = quarto.imagem_url || quarto.imagem || "/images/quarto-placeholder.jpeg";

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.imageBox}>
          <img src={imagem} alt={`Quarto ${quarto.numero}`} />
        </div>

        <div className={styles.content}>
          <span className={styles.badge}>Reserva HDS</span>
          <h1>Finalizar reserva</h1>

          <div className={styles.roomInfo}>
            <p><strong>Quarto:</strong> {quarto.numero}</p>
            <p><strong>Tipo:</strong> {quarto.tipo}</p>
            <p><strong>Capacidade:</strong> {quarto.capacidade} pessoa(s)</p>
            <p><strong>Diária:</strong> R$ {Number(quarto.preco_por_noite || 0).toFixed(2)}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Nome completo
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                placeholder="Ex: Hamilton da Silva"
              />
            </label>

            <label>
              E-mail
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="seuemail@email.com"
              />
            </label>

            <label>
              Telefone
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                required
                placeholder="(32) 99999-9999"
              />
            </label>

            <div className={styles.row}>
              <label>
                Check-in
                <input
                  name="data_check_in"
                  type="date"
                  value={form.data_check_in}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Check-out
                <input
                  name="data_check_out"
                  type="date"
                  value={form.data_check_out}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {erro && <p className={styles.error}>{erro}</p>}
            {sucesso && <p className={styles.success}>{sucesso}</p>}

            <button type="submit" disabled={enviando}>
              {enviando ? "Enviando reserva..." : "Confirmar reserva"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}