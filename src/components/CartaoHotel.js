import Link from "next/link";
import styles from "./CartaoHotel.module.css";

export default function CartaoHotel({ hotel }) {
  const imagem = hotel.imagem_principal_url || hotel.imagem_principal || "/images/hotel-placeholder.jpeg";

  return (
    <Link href={`/hoteis/${hotel.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={imagem} alt={hotel.nome} className={styles.image} />
        <span className={styles.badge}>HDS Stay</span>
      </div>

      <div className={styles.content}>
        <h3>{hotel.nome}</h3>
        <p>{hotel.cidade} - {hotel.estado}</p>

        <div className={styles.footer}>
          <span>Ver detalhes</span>
          <strong>→</strong>
        </div>
      </div>
    </Link>
  );
}