// HomeSection1.js
"use client";
import { useEffect, useRef } from 'react';
import styles from './home.module.css';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';

export default function HomeSection1() {
  const heroRowRef = useRef(null);
  const ctaBoxRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRowRef.current, { y: 100, opacity: 0, duration: 2.1, ease: 'power3.out' });
    gsap.from(ctaBoxRef.current, { y: 40, opacity: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
  }, []);

  return (
    <section className={styles.heroBg}>
      <h2 className={styles.Logo}>iidad.com</h2>
        
      <div className={styles.heroRow} ref={heroRowRef}>
        
        <div className={styles.heroContent}>
          <span className={styles.webOffer}>
            Our web offer: Catch me online!
          </span>
          <h1 className={styles.heroTitle}>
            For a digital experience that will <br/>leave a lasting impression.
          </h1>
          <p className={styles.heroDesc}>
            We design turnkey websites and web apps that convert and reinforce brand messaging.
          </p>
          <div className={styles.ctaBox} ref={ctaBoxRef}>
            <span className={styles.ctaText}>Let's talk about it, make an appointment.</span>
            <button className={styles.ctaBtn}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
