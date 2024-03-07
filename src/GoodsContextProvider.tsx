import { useState, createContext, ReactNode } from "react";
import { Good } from "./MainPage/Goods";
import nullMug from "./images/nullMug.jpg";
import { Children } from "react";

export const GoodsContext = createContext([
  {
    id: 0,
    name: "Кружка",
    image: nullMug,
    price: 300,
    isWithHandle: true,
  },
]);

interface Props {
  children: ReactNode;
}

export const GoodsContextProvider: React.FC<Props> = ({ children }) => {
  const savedGoods: Good[] = [
    {
      id: 0,
      name: "Кружка",
      image: nullMug,
      price: 300,
      isWithHandle: true,
    },
  ];
  return (
    <GoodsContext.Provider value={savedGoods}>{children}</GoodsContext.Provider>
  );
};
