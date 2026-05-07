import styles from "./GaleriaPage.module.css";

const imagens = [
  {
    id: 1,
    src: "/images/galeria/img1.jpeg",
    title: "Suíte Premium HDS",
  },
  {
    id: 2,
    src: "/images/galeria/img2.jpeg",
    title: "Piscina Exclusiva",
  },
  {
    id: 3,
    src: "/images/galeria/img3.jpeg",
    title: "Vista Panorâmica",
  },
  {
    id: 4,
    src: "/images/galeria/img4.jpeg",
    title: "Restaurante Sofisticado",
  },
  {
    id: 5,
    src: "/images/galeria/img5.jpeg",
    title: "Área Relax HDS",
  },
  {
    id: 6,
    src: "/images/galeria/img6.jpeg",
    title: "Experiência Premium",
  },
];

export default function GaleriaPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>Galeria HDS</span>

        <h1>Conheça nossos espaços exclusivos</h1>

        <p>
          Explore ambientes modernos, sofisticados e preparados para entregar
          uma experiência visual premium em qualquer dispositivo.
        </p>
      </section>

      <section className={styles.grid}>
        {imagens.map((imagem) => (
          <article key={imagem.id} className={styles.card}>
            <img src={imagem.src} alt={imagem.title} />

            <div className={styles.overlay}>
              <span>ReservaMB</span>
              <h3>{imagem.title}</h3>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}