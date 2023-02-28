import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;

        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price * action.payload.quantity,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price * action.payload.quantity,
        };
      }
    case "REMOVE_ITEM":
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        items: updatedItems,
        total: state.total - itemToRemove.price * itemToRemove.quantity,
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        total: 0,
      };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function removeItem(itemId) {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const value = {
    cart: state,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
