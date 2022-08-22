import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import type {CartData} from "../hooks/useCartLocalStorage";

type LayoutProps = {
  children: React.ReactNode;
  cartItems?: CartData;
};

export default function Layout({ children, cartItems }: LayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <div>
        <Navbar cartItems={cartItems}/>
        <div>Items in Cart: {cartItems?.length}</div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
