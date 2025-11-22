import styles from "./homeSection3.module.css";

export default function HomeSection3() {
  return (
    <section className={styles.page5}>
      <div className={styles.elem}>
        <h1>
          <span>Sport</span> - technology - fashion - 
          <span>Sport</span> - technology - fashion - 
        </h1>
        <h1>
          Sport - technology - <span>fashion</span> - 
          Sport - technology - <span>fashion</span> -
        </h1>
      </div>
      <div className={styles.elem2}>
        <h1>
          real estate - <span>agriculture</span> - beauty -
          real estate - <span>agriculture</span> - beauty -
        </h1>
        <h1>
          <span>real estate</span> - agriculture - beauty -
          <span>real estate</span> - agriculture - beauty -
        </h1>
      </div>
      <div className={styles.elem}>
        <h1>
          hotels - <span>music</span> - automotive -
          hotels - <span>music</span> - automotive -
        </h1>
        <h1>
          hotels - music - <span>automotive</span> -
          hotels - music - <span>automotive</span> -
        </h1>
      </div>
      <div className={styles.elem2}>
        <h1>
          Science - partner - <span>travel</span> -
          Science - partner - <span>travel</span> -
        </h1>
        <h1>
          Science - partner - <span>travel</span> -
          Science - partner - <span>travel</span> -
        </h1>
      </div>
    </section>
  );
}
