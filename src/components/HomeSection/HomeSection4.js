import styles from "./homeSection4.module.css";

const cardData = [
  {
    video: "/image-vid/flying secoya_1 (1).mp4",
    label: "Stratégie de contenu & Copywriting",
    source: "from Secoya",
  },
  {
    video: "/image-vid/Weem_1.mp4",
    label: "Ergonomie (UX)",
    source: "from Weem",
  },
  {
    video: "/image-vid/Lemlist_1.mp4",
    label: "Stratégie de contenu & Copywriting",
    source: "from Secoya",
  },
  {
    video: "/image-vid/LGM_1.mp4",
    label: "Ergonomie (UX)",
    source: "from Weem",
  },
];

export default function HomeSection4() {
  return (
    <section className={styles.section4}>
      <h2 className={styles.heading}>
        Une équipe complète<br />
        pour une marque digitale clé en main
      </h2>
      <div className={styles.cardsGrid}>
        {cardData.map((card, idx) => (
          <div key={card.label + idx} className={styles.cardItem}>
            <div className={styles.cardImgBox}>
              <video
                src={card.video}
                className={styles.cardImg}
                loop
                muted
                autoPlay
                playsInline
              />
            </div>
            <div className={styles.cardLabelSourceRow}>
              <span className={styles.cardLabel}>{card.label}</span>
              <span className={styles.cardSource}>{card.source}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
