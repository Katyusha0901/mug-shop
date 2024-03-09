import { createContext, ReactNode, useState } from "react";
import { Good } from "../Goods";

export interface ContextType {
  savedGoods: number[];
  setSavedGoods: (array: number[]) => void;
  goodsInBag: number[];
  setGoodsInBag: (array: number[]) => void;
}

export const GoodsContext = createContext<ContextType>({
  savedGoods: [],
  setSavedGoods: () => undefined,
  goodsInBag: [],
  setGoodsInBag: () => undefined,
});

interface Props {
  children: ReactNode;
}

export const GoodsContextProvider: React.FC<Props> = ({ children }) => {
  const [savedGoods, setSavedGoods] = useState<number[]>([]);
  const [goodsInBag, setGoodsInBag] = useState<number[]>([]);
  const goodsContext: ContextType = {
    savedGoods,
    setSavedGoods,
    goodsInBag,
    setGoodsInBag,
  };

  return (
    <GoodsContext.Provider value={goodsContext}>
      {children}
    </GoodsContext.Provider>
  );
};
