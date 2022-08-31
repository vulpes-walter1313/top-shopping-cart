import React from "react";
import treeData from "../data/trees.json";
import { useCartContext } from "../App";
import styles from "./Cart.module.css";

export default function Cart() {
  const [cartData, cartDispatch] = useCartContext();

  const subtotal: number = cartData.reduce((prevVal: number, item ): number => {
    let tree = treeData.find(tree => tree.id === item.productId)
    const total = tree?.price! * item.quantity;
    return prevVal + total;
  }, 0);
  const taxRate = 1.0825;
  const grandTotal = (subtotal * taxRate)
  console.log(styles);
  return (
    <main className={styles.cartMain}>
      <div>
        <h1>Cart Items</h1>
        <div className={styles.cartItemsGroup}>
          {/* First check if there are no items to add a placeholder */}
          {cartData.length === 0 ? "There are no items" : null}
          {cartData.map((item) => {
            const tree = treeData.find(tree => tree.id === item.productId);
            return (
              <div className={styles.cartItem} key={item.productId}>
                <div className={styles.cartItemImg}>
                  <img src={tree?.img} alt={tree?.desc}/>
                </div>
                <div className={styles.cartItemInfo}>
                  <h3>{tree?.name}</h3>
                  <div className={styles.ItemQuantityGroup}>
                    <p>Quantity: </p>
                    <input type="number" value={item.quantity} onChange={(e) => {cartDispatch({type: "update", payload: {id: item.productId, quantity: parseInt(e.target.value)}})}} />
                  </div>
                </div>
                <div className={styles.cartItemNumbers}>
                  <p>${tree?.price} ea.</p>
                  <p>Total ${(tree?.price! * item.quantity).toFixed(2)}</p>
                  <button onClick={() => cartDispatch({type: "delete", payload: {id: item.productId}})}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.orderTotalGroup}>
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
