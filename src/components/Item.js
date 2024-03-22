import React from "react";
import "./item.css";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useShoppingCart } from "./contextApi/ShoppingCart";

const Item = ({ id, imag, name, describe, price }) => {
  const { addToCart, addToFav } = useShoppingCart();
  return (
    <div className="product-item" key={id}>
      <img src={imag} alt="d"></img>
      <p className="off">40% off</p>
      <div className="info">
        <h3>{name}</h3>
        <p>{describe}</p>
        <div className="stars">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>
        <p>EGP{price}</p>
      </div>
      <div className="add">
        <FaRegHeart className="heart" onClick={() => addToFav(id)}  />
        <button className="plus" onClick={() => addToCart(id)} >Add</button>
      </div>
    </div>
  );
};

export default Item;
