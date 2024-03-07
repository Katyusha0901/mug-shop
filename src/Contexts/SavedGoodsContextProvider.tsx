import { createContext, ReactNode } from "react";
import { Good } from "../MainPage/Goods";
import nullMug from "../images/nullMug.jpg";

export const SavedGoodsContext = createContext([
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
    <SavedGoodsContext.Provider value={savedGoods}>
      {children}
    </SavedGoodsContext.Provider>
  );
};
