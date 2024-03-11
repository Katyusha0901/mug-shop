import first from "./images/1.webp";
import second from "./images/2.jpg";
import third from "./images/3.jpg";

export interface Good {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  isWithHandle: boolean;
}

export const Goods: Good[] = [
  {
    id: 0,
    name: "Кружка",
    image: first,
    description: "Чудесная кружка с ручкой для приятных чаепитий",
    price: 300,
    isWithHandle: true,
  },
  {
    id: 1,
    name: "Чашка",
    image: second,
    description: "Чашка с блюдцем для теплых встреч",
    price: 500,
    isWithHandle: true,
  },
  {
    id: 1,
    name: "Стакан",
    image: third,
    description: "Стакан, чтобы пить достаточно воды каждый день",
    price: 200,
    isWithHandle: false,
  },
];
