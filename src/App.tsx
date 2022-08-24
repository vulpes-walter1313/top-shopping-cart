import "./App.css";
import Layout from "./components/Layout";
import { Outlet, useOutletContext } from "react-router-dom";
import useCartLocalStorage from "./hooks/useCartLocalStorage";
import type { AddToCartAction, CartData } from "./hooks/useCartLocalStorage";

type ContextType = [cartData: CartData, cartDispatch: React.Dispatch<AddToCartAction>]

function App() {
  const [cartData, cartDispatch] = useCartLocalStorage();
  return (
    <Layout cartItems={cartData}>
      <Outlet context={[cartData, cartDispatch]}/>
    </Layout>
  );
}

export function useCartContext() {
  return useOutletContext<ContextType>();
}

export default App;
