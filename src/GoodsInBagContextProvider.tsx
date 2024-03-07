import { createContext, ReactNode } from "react";
import { Good } from "./MainPage/Goods";
import nullMug from "./images/nullMug.jpg";

export const GoodsInBagContext = createContext([
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
  const goodsInBag: Good[] = [
    {
      id: 0,
      name: "Кружка",
      image: nullMug,
      price: 300,
      isWithHandle: true,
    },
  ];
  return (
    <GoodsInBagContext.Provider value={goodsInBag}>
      {children}
    </GoodsInBagContext.Provider>
  );
};
