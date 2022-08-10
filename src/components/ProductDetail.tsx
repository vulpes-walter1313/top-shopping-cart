import React from 'react';
import "./ProductDetail.css";
import { useParams, useNavigate } from 'react-router-dom';
import data from "../data/trees.json";


export default function ProductDetail() {
  let navigate = useNavigate();
  let params = useParams();
  let tree = data.find(tree => tree.id === parseInt(params.productId as string));

  return (
    <div className='prod-detail-wrapper' onClick={(e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLDivElement).classList.contains('prod-detail-wrapper')) {
        navigate("/shop")
      }
      }}>
      <div className='prod-detail-content'>
        <img src={tree?.img} alt={tree?.desc}/>
        <div className='prod-detail-description'>
          <p className='tree-title'>{tree?.name}</p>
          <ul>
            <li>{tree?.desc}</li>
            <li>{tree?.leaf}</li>
          </ul>
          <p>Price: {tree?.price}</p>
        </div>
      </div>
    </div>
  )
}
