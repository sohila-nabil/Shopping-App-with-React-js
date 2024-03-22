import React from "react";
import Data from "./data";
import "../components/cartItems.css";
import { useShoppingCart } from "./contextApi/ShoppingCart";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const CartItems = ({ id, qty }) => {
  const { removeFromCart, addToCart, decreaseItemCart } = useShoppingCart();
  const item = Data.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <div className="item">
      <img src={item.imag} alt={item.name} />
      <span className="del" onClick={() => removeFromCart(id)}>
        Remove
      </span>
      <div className="info">
        <span className="item-title">{item.describe}</span>
        <span className="price">
          {item.price} * {qty}
        </span>
        <span className="sum">${item.price * qty}</span>
      </div>
      <div className="calc">
        <FaPlus className="plus p" onClick={() => addToCart(id)} />
        <FaMinus
          className="minus p"
          onClick={() => {
            decreaseItemCart(id);
          }}
        />
      </div>
    </div>
  );
};

export default CartItems;
