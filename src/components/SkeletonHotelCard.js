import styles from "./SkeletonHotelCard.module.css";

export default function SkeletonHotelCard() {
  return (
    <article className={styles.card}>
      <div className={styles.image}></div>

      <div className={styles.content}>
        <div className={styles.lineBig}></div>
        <div className={styles.line}></div>
        <div className={styles.lineSmall}></div>
      </div>
    </article>
  );
}