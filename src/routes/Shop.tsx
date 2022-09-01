import { Link, Outlet, useNavigate } from "react-router-dom";
import data from "../data/trees.json";
import styles from "./Shop.module.css";
import { useCartContext } from "../App";

export default function Shop() {
  let navigate = useNavigate();
  let [cartData, cartDispatch] = useCartContext();
  function addItemToCart(id: number, quantity: number) {
    cartDispatch({ type: "add", payload: { id, quantity } });
  }
  console.log(styles);
  return (
    <>
      <header className={styles.header}>
        <h1>Tree Products</h1>
      </header>
      <div className={styles.productsContainer}>
        <div className={styles.productCategoriesContainer}>
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
        <main className={styles.productsListContainer}>
          {data.map((tree) => {
            return (
              <div className={styles.productCard} key={tree.id}>
                <div>
                  <img src={tree.img} alt={tree.name} />
                  <div className={styles.productDetails}>
                    <p className={styles.productName}>{tree.name}</p>
                    <ul className={styles.productDetails}>
                      <li>{tree.desc}</li>
                      <li>{tree.leaf}</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.productButtons}>
                  <button
                    onClick={() => {
                      navigate("/shop/" + tree.id);
                    }}
                    className={styles.productButton}
                  >
                    View Details
                  </button>
                  <button
                    className={styles.productButton}
                    onClick={() => {
                      addItemToCart(tree.id, 1);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
      <Outlet context={[cartData, cartDispatch]}/>
    </>
  );
}
