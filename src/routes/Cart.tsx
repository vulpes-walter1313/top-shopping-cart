import React from "react";
import "./Cart.css";
import treeData from "../data/trees.json";
import { useCartContext } from "../App";

export default function Cart() {
  const [cartData, cartDispatch] = useCartContext();

  const subtotal: number = cartData.reduce((prevVal: number, item ): number => {
    let tree = treeData.find(tree => tree.id === item.productId)
    const total = tree?.price! * item.quantity;
    return prevVal + total;
  }, 0);
  const taxRate = 1.0825;
  const grandTotal = (subtotal * taxRate)

  return (
    <main className="cart-main">
      <div>
        <h1>Cart Items</h1>
        <div className="cart-items-group">
          {/* First check if there are no items to add a placeholder */}
          {cartData.length === 0 ? "There are no items" : null}
          {cartData.map((item) => {
            const tree = treeData.find(tree => tree.id === item.productId);
            return (
              <div className="cart-item" key={item.productId}>
                <div className="cart-item-img">
                  <img src={tree?.img} alt={tree?.desc}/>
                </div>
                <div className="cart-item-info">
                  <h3>{tree?.name}</h3>
                  <div className="cart-item-quantity-group">
                    <p>Quantity: </p>
                    <input type="number" value={item.quantity} onChange={(e) => {cartDispatch({type: "update", payload: {id: item.productId, quantity: parseInt(e.target.value)}})}} />
                  </div>
                </div>
                <div className="cart-item-numbers">
                  <p>${tree?.price} ea.</p>
                  <p>Total ${(tree?.price! * item.quantity).toFixed(2)}</p>
                  <button onClick={() => cartDispatch({type: "delete", payload: {id: item.productId}})}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cart-order-totals-group">
        <h2>Order Totals</h2>
        <div>
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div>
          <p>Tax</p>
          <p>8.25%</p>
        </div>
        <div>
          <p>Grand Total</p>
          <p>${grandTotal.toFixed(2)}</p>
        </div>
      </div>
    </main>
    );
}
