import styles from "./Navbar.module.css";
import { Link } from "react-router";
export default function Navbar() {
  return (
    <nav className={styles.floatingNav}>
      <div className={styles.navLeft}>
        <div className={styles.profilePic}>
          <Link to="/">
            <img src="/portfolio.jpeg" alt="Mansur Iman" />
          </Link>
        </div>
        <span className={styles.brandName}>Mansur Iman</span>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/notes">Notes</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
