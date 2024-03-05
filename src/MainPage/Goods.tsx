import nullMug from "../images/nullMug.webp";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  isWithHandle: boolean;
}

export const Goods: Product[] = [
  {
    id: 0,
    name: "Кружка",
    image: nullMug,
    price: 300,
    isWithHandle: true,
  },
];
