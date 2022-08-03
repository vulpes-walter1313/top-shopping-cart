import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left-links">
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
        <div className="footer-right-links">
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
        <div className="footer-bottom-center">
          <p>Tree Shoppe, LLC 2022</p>
        </div>
      </div>
    </footer>
  );
}
