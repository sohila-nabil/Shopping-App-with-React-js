import React from 'react'
import Data from './data'
import './favItem.css'
import { FaHeart } from "react-icons/fa";
import { useShoppingCart } from './contextApi/ShoppingCart';

const FavItem = ({id}) => {
    const items = Data.find(item => item.id === id)
    const { addToFav } = useShoppingCart();
    if (items == null) return null;
  return (
    <div className="favItem">
      <FaHeart className="h" onClick={() => addToFav(id)} />
      <img src={items.imag} alt={items.name} />
      <div className="info">
        <h3>{items.name}</h3>
        <p>{items.describe}</p>
        <p className="p">{items.price}</p>
      </div>
    </div>
  );
}

export default FavItem
