import styles from './aboutSection2.module.css';

const mainImg = "https://4kwallpapers.com/images/wallpapers/zenitsu-agatsuma-2048x2048-22696.png";

export default function AboutSection2() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.topGrid}>
        {/* LEFT SIDE: Supporting Details */}
        <div className={styles.left}>
          <div className={styles.leftDesc}>
            <div className={styles.detail}>
              Modern Perspective & Visual Storytelling
            </div>
            <div className={styles.subdesc}>
              Our creative approach features immersive visuals, fresh angles, and high-quality digital narrativesOur creative approach features immersive visuals, fresh angles, and high-quality digital narratives.Our creative approach features immersive visuals, fresh angles, and high-quality digital narratives.Our creative approach features immersive visuals, fresh angles, and high-quality digital narratives.Our creative approach features immersive visuals, fresh angles, and high-quality digital narratives.Our creative approach features immersive visuals, fresh angles, and high-quality digital narratives..
            </div>
          </div>
        </div>

        {/* CENTER: Main Image */}
        <div className={styles.middle}>
          <img src={mainImg} alt="Main Visual" className={styles.mainImg} />
        </div>

        {/* RIGHT SIDE: Section Heading */}
        <div className={styles.right}>
          <h2 className={styles.heading}>
            OUR<br />STORY
          </h2>
        </div>
      </div>
    </section>
  );
}
