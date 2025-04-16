"use client";
import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToBag = (product, quantity) => {
    setItems((prevItems) => {
      if (prevItems.find((item) => item.id === product.id))
        return prevItems;
  
      return [...prevItems, { ...product, quantity }];
    });
  };
  
  const updateQuantity = (product, quantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };
  const removeFromBag = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };
  
  const clearBag = () => {
    setItems([]);
  };

  return (
    <BasketContext.Provider value={{ items, addToBag, updateQuantity, removeFromBag, clearBag }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}