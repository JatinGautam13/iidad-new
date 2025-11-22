import styles from "./homeSection5.module.css";

function PillArrow({ size = 120 }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 100 60"
      fill="none"
      className={styles.pillArrow}
    >
      {/* Blue pill shape */}
      <rect x="10" y="5" width="90" height="50" rx="25" fill="#6278ed" />
      {/* Black circle + glowing + rotated arrow */}
      <g className={styles.circleGroup}>
        <circle
          cx="38"
          cy="30"
          r="22"
          fill="#111"
          className={styles.circleGlow}
        />
        <path
          d="M32 36 L38 30 L44 36 M38 30 V43"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.arrowPath}
        />
      </g>
    </svg>
  );
}

const cards = [
  {
    title: "Autonomous",
    desc: "A simple, easy-to-use backrest to maintain your independence.",
  },
  {
    title: "Fast",
    desc: "When we commit to deadlines, we meet them.",
  },
  {
    title: "Scalable",
    desc: "Your business is bound to evolve, our solution is designed to evolve with it.",
  },
  {
    title: "Stable",
    desc: "Say goodbye to monthly maintenance and plugin incompatibility issues with every update. Here, everything is under control.",
  },
  {
    title: "Reference",
    desc: "Webflow is natively optimized to boost the SEO of the sites it hosts.",
  },
  {
    title: "Own",
    desc: "Optimized production standards to ensure a low carbon footprint and optimal accessibility.",
  },
];

export default function HomeSection5() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Powered online via <span className={styles.webflow}>Webflow</span>
      </h2>
      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div className={styles.card} key={card.title + i}>
            <div className={styles.pillArrowWrapper}>
              <PillArrow size={120} />
            </div>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardDesc}>{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
