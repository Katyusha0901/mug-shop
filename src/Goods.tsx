import nullMug from "./images/nullMug.webp";

export interface Good {
  id: number;
  name: string;
  image: string;
  price: number;
  isWithHandle: boolean;
}

export const Goods: Good[] = [
  {
    id: 0,
    name: "Кружка",
    image: nullMug,
    price: 300,
    isWithHandle: true,
  },
];
