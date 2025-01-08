import React, { useState } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbarTop}>
      {/* Hamburger Menu Icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Navigation List - Conditionally rendered based on menuOpen state */}
      <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}>
        <div className={styles.languageSelector}>
          <span>Select Language</span>
          <span>▼</span>
        </div>

        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/organize-initiative">Organize Initiative</a>
        </li>

        <div className={styles.loginButtonContainer}>
          <button className={styles.loginButton}>Login/Register</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
