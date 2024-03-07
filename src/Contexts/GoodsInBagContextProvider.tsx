import { createContext, ReactNode } from "react";
import { Good } from "../MainPage/Goods";
import nullMug from "../images/nullMug.jpg";

export const GoodsInBagContext = createContext([]);

interface Props {
  children: ReactNode;
}

export const GoodsContextProvider: React.FC<Props> = ({ children }) => {
  const goodsInBag: [] = [];
  return (
    <GoodsInBagContext.Provider value={goodsInBag}>
      {children}
    </GoodsInBagContext.Provider>
  );
};
