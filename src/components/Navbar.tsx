import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <p className='navbar-logo'>Tree Shoppe</p>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/"><li>About</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
      </ul>
    </nav>
  )
}
