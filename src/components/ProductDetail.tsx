import React, {useEffect, useState} from 'react';
import styles from "./ProductDetail.module.css";
import { useParams, useNavigate } from 'react-router-dom';
import data from "../data/trees.json";
import { useOutletContext } from 'react-router-dom';
import type { ContextType } from "../App";


export default function ProductDetail() {
  let navigate = useNavigate();
  let params = useParams();
  let tree = data.find(tree => tree.id === parseInt(params.productId as string));
  const [quantity, setQuantity] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);
  // eslint-disable-next-line
  const [cartData, cartDispatch] = useOutletContext<ContextType>();
  function addToCart(quantity: number) {
    cartDispatch({type: "add", payload: { id: tree!.id, quantity}});
  }

  const quantityChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (parseInt(e.target.value) < 1) {
      setQuantity(1);
    } else if (parseInt(e.target.value) > 10) {
      setQuantity(10);
    } else {
      setQuantity(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    const itemAddedReseter = setTimeout(() => {
      setItemAdded(false);
    }, 3000);
    return () => clearTimeout(itemAddedReseter);
  }, [itemAdded]);

  return (
    <div className={styles.detailWrapper} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLDivElement).classList.contains(styles.detailWrapper)) {
        navigate("/shop")
      }
      }}>
      <div className={styles.detailContent}>
        <img src={tree?.img} alt={tree?.desc}/>
        <div className={styles.detailDescription}>
          <div>
            <p className={styles.treeTitle}>{tree?.name}</p>
            <ul>
              <li>{tree?.desc}</li>
              <li>{tree?.leaf}</li>
            </ul>
          </div>
          <div className={styles.detailDescPriceContainer}>
            <input type='number' value={quantity} onChange={quantityChangeHandler}/>
            <p>${tree?.price}</p>
          </div>
          <div className={styles.detailDescButtons}>
            <button onClick={() => {
              addToCart(quantity);
              setItemAdded(true);
            }}>Add To Cart</button>
            <button onClick={() => {
              addToCart(quantity);
              navigate("/cart");
            }}>Buy Now</button>
          </div>
          {itemAdded && <div className={styles.detailAddedWarning}><p>Item was added to your cart</p></div>}
        </div>
      </div>
    </div>
  )
}
