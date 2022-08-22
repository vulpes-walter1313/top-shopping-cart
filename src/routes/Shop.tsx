import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import data from "../data/trees.json";
import "./Shop.css";
import useCartLocalStorage from "../hooks/useCartLocalStorage";

export default function Shop() {
  let navigate = useNavigate();
  let [cartData, cartDispatch] = useCartLocalStorage();
  function addItemToCart(id: number, quantity: number) {
    cartDispatch({type: "add", payload: {id, quantity }})
  }
  return (
    <Layout cartItems={cartData}>
      <header className="shop-header">
        <h1>Tree Products</h1>
      </header>
      <div className="shop-products-container">
        <div className="shop-product-categories-container">
          <p>Categories</p>
          <ul>
            <Link to="/shop">
              <li>Shade Trees</li>
            </Link>
            <Link to="/shop">
              <li>Tall Trees</li>
            </Link>
            <Link to="/shop">
              <li>Dry-Climate Trees</li>
            </Link>
            <Link to="/shop">
              <li>Wet-Climate Trees</li>
            </Link>
            <Link to="/shop">
              <li>Cold-Hardy Trees</li>
            </Link>
          </ul>
        </div>
        <main className="shop-products-list-container">
          {data.map(tree => {
            return (
              <div className="shop-product-card" key={tree.id}>
                <div>
                  <img src={tree.img} alt={tree.name}/>
                  <div className="shop-product-details">
                    <p className="product-name">{tree.name}</p>
                    <ul className="product-details">
                      <li>{tree.desc}</li>
                      <li>{tree.leaf}</li>
                    </ul>
                  </div>
                </div>
                <div className="product-buttons">
                  <button onClick={() => {navigate("/shop/" + tree.id)}} className="product-button">View Details</button>
                  <button className="product-button" onClick={() => {
                    addItemToCart(tree.id, 1);
                  }}>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
      <Outlet />
    </Layout>
  );
}
