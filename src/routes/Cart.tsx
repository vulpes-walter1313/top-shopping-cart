import React from "react";
import "./Cart.css";
import treeData from "../data/trees.json";
import { useCartContext } from "../App";
import { parseJsonConfigFileContent } from "typescript";

export default function Cart() {
  const [cartData, cartDispatch] = useCartContext();

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
                <div>
                  <h3>{tree?.name}</h3>
                  <div>
                    <p>Quantity: </p>
                    <input type="number" value={item.quantity} onChange={(e) => {cartDispatch({type: "update", payload: {id: item.productId, quantity: parseInt(e.target.value)}})}} />
                  </div>
                </div>
                <div>
                  <p>${tree?.price} ea.</p>
                  <p>${tree?.price! * item.quantity}</p>
                  <button onClick={() => cartDispatch({type: "delete", payload: {id: item.productId}})}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Order Totals</h2>
      </div>
    </main>
    );
}
