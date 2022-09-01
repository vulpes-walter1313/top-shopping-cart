import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>About</li>
            </Link>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
          </ul>
        </div>
        <div className={styles.rightLinks}>
          <ul>
            <Link to="/">
              <li>Faq</li>
            </Link>
            <Link to="/">
              <li>Privacy</li>
            </Link>
            <Link to="/">
              <li>Green Pledge</li>
            </Link>
          </ul>
        </div>
        <div className={styles.bottomCenter}>
          <p>Tree Shoppe, LLC 2022</p>
        </div>
      </div>
    </footer>
  );
}
