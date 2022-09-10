import React from "react";

const addItemToCart = (item) => {};

const removeItemFromCart = (id) => {};

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: addItemToCart,
  removeItem: removeItemFromCart,
});

const CartContext = (props) => {
  return (
    <cartContext.Provider value={cartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContext;
