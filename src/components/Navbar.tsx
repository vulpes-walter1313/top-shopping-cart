import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import type { CartData } from "../hooks/useCartLocalStorage";

type NavbarProps = {
  cartItems?: CartData 
}
export default function Navbar({cartItems}: NavbarProps) {
  return (
    <nav className="navbar">
      <p className='navbar-logo'>Tree Shoppe</p>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/"><li>About</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
        <Link to="/cart"><li>Cart{cartItems ? ` ${cartItems?.length}` : null}</li></Link>
      </ul>
    </nav>
  )
}
