import React, {useEffect, useState} from 'react';
import "./ProductDetail.css";
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
    <div className='prod-detail-wrapper' onClick={(e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLDivElement).classList.contains('prod-detail-wrapper')) {
        navigate("/shop")
      }
      }}>
      <div className='prod-detail-content'>
        <img src={tree?.img} alt={tree?.desc}/>
        <div className='prod-detail-description'>
          <div>
            <p className='tree-title'>{tree?.name}</p>
            <ul>
              <li>{tree?.desc}</li>
              <li>{tree?.leaf}</li>
            </ul>
          </div>
          <div className='prod-detail-desc-price-container'>
            <input type='number' value={quantity} onChange={quantityChangeHandler}/>
            <p>${tree?.price}</p>
          </div>
          <div className='prod-detail-desc-buttons'>
            <button onClick={() => {
              addToCart(quantity);
              setItemAdded(true);
            }}>Add To Cart</button>
            <button onClick={() => {
              addToCart(quantity);
              navigate("/cart");
            }}>Buy Now</button>
          </div>
          {itemAdded && <div>Item was added ti your cart</div>}
        </div>
      </div>
    </div>
  )
}
