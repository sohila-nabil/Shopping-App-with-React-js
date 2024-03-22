import React from 'react'
import { useShoppingCart } from './contextApi/ShoppingCart';
import FavItem from './FavItem';

const Fav = () => {
    const { fav } = useShoppingCart();
   console.log(fav)
  return (
    <div className="fav">
      <h3>Favourites</h3>
      <div className="container">
        {fav.length > 0 ? (
          fav.map((items) => {
            return <FavItem key={items.id} {...items} />;
          })
        ) : (
          <div className="empty">No Items are add in Cart</div>
        )}
      </div>
    </div>
  );
}

export default Fav
