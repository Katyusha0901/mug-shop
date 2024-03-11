import nullMug from "./images/nullMug.webp";
import secondMup from "./images/secondMup.jpg";

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
    image: nullMug,
    description: "Чудесная кружка с ручкой для приятных чаепитий",
    price: 300,
    isWithHandle: true,
  },

  {
    id: 1,
    name: "Чашка",
    image: secondMup,
    description: "Чашка с блюдцем для теплых встреч",
    price: 500,
    isWithHandle: true,
  },
];
