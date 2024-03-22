import React, { createContext, useContext, useState, useEffect } from 'react'

const cartContext = createContext({})

const initialCartItems = localStorage.getItem("CartItems")
  ? JSON.parse(localStorage.getItem("CartItems"))
  : [];

const initialFavItems = localStorage.getItem("favoriteProducts")
  ? JSON.parse(localStorage.getItem("favoriteProducts"))
  : [];

  const user = JSON.parse(localStorage.getItem("username"));

const ShoppingCart = ({children}) => {
  const [cart, setCart] = useState(initialCartItems);
  const [fav, setFav] = useState(initialFavItems);
  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cart))
  }, [cart])
  
  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(fav));
  }, [fav]);

    const numberOfProducts = (id) => {
        return cart.find((item) => item.id === id )?.qty || 0;
    }
    const addToCart = (id) => {
      if (user) {
          setCart((dataItem) => {
            if (dataItem.find((item) => item.id === id) == null) {
              return [...dataItem, { id, qty: 1 }];
            } else {
              return dataItem.map((item) =>
                item.id !== id ? item : { ...item, qty: item.qty + 1 }
              );
            }
          });
      } else {
        setTimeout(() => {
          window.location = "signup";
       }, 1000)
        }
    }

    const decreaseItemCart = (id) => {
      if (user) {
        setCart((dataItem) => {
          if (dataItem.find((item) => item.id === id) === 1) {
            return dataItem.filter((item) => item.id !== id);
          } else {
            return dataItem.map((item) =>
              item.id !== id ? item : { ...item, qty: item.qty - 1 }
            );
          }
        });
      }
      else {
        setTimeout(() => {
          window.location = "signup";
       }, 1000)
        }
    };
  
    const cartQty = cart.reduce(
      (qty, currentValue) => currentValue.qty + qty,
      0
    );

    const removeFromCart = (id) => {
      if (user) {
        setCart((dataItem) => dataItem.filter((item) => item.id !== id));
      } else {
        setTimeout(() => {
          window.location = "signup";
        }, 1000);
      }
  }
  
  const addToFav = (id) => {
    if (user) {
      setFav((favItem) => {
        if (favItem.find((item) => item.id === id) == null) {
              return [...favItem, { id }];
            } else {
              return favItem.filter((item) =>
                item.id !== id
              );
            }
          });

    } else {
      setTimeout(() => {
        window.location = "signup";
      }, 1000);
    }
  }
    return (
      <cartContext.Provider
        value={{
          cart,
          fav,
          addToCart,
          numberOfProducts,
          decreaseItemCart,
          removeFromCart,
          cartQty,
          addToFav,
        }}
      >
        {children}
      </cartContext.Provider>
    );
}

export default ShoppingCart


export const useShoppingCart = () => { 
    return useContext(cartContext);
}
