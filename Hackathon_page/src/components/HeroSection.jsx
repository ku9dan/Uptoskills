import React from "react";
import styles from "./hero.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gradientBackground}>
        <div className={styles.heroContent}>
          <div className={styles.heroLogo}>
            <img
              src="/SBI_Logo.svg"
              alt="SBI Life Logo"
            />
          </div>
          <p>
            <i>PRESENTS</i>
          </p>
          <h1>HACK-AI-THON</h1>
          <h2>2024</h2>
          <div className={styles.heroPoweredBy}>
            <p>POWERED BY</p>{" "}
            <img src="\H2S_Logo.png" alt="112S Logo" />{" "}
          </div>
          <p className={styles.heroPrize}>
            Prizes Worth <span>₹3,25,000/-</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
