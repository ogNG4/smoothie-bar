import Link from "next/link";

import { FaCocktail } from "react-icons/fa";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>
          Smoothie<span>Bar</span>
        </h1>
      </div>
      <div className={styles.links}>
        <div className={styles.link} >
          <Link aria-label="all smoothies" href="/">Smoothies🫐</Link>
        </div>
        <div className={styles.link}>
          <Link aria-label="create smoothie" href="/create-smoothie">Create Smoothie🍌</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
