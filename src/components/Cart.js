import React from "react";
import CartItems from "./CartItems";
import "../components/cartItems.css";
import { useShoppingCart } from "./contextApi/ShoppingCart";
import Total from "./Total";
import Data from "./data";

const Cart = () => {
  const { cart } = useShoppingCart();
  let totals = cart.reduce((total, cartItem) => {
    const item = Data.find((item) => item.id === cartItem.id);
    return total + (item ? item.price : 0) * cartItem.qty;
  }, 0);
  return (
    <div className="cartItem">
      <div className="container">
        <div className="items">
          {cart.length > 0 ? (
            cart.map((items) => {
              return <CartItems key={items.id} {...items} />;
            })
          ) : (
            <div className="empty">No Items are add in Cart</div>
          )}
        </div>
        <Total total={totals} />
      </div>
    </div>
  );
};

export default Cart;
