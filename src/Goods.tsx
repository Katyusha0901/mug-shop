import first from "./images/1.webp";
import second from "./images/2.jpg";
import third from "./images/3.jpg";
import fourth from "./images/4.jpg";
import fifth from "./images/5.jpg";
import sixth from "./images/6.jpg";

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
    id: 2,
    name: "Стакан",
    image: third,
    description: "Стакан, чтобы пить достаточно воды каждый день",
    price: 200,
    isWithHandle: false,
  },
  {
    id: 3,
    name: "Рог для вина",
    image: fourth,
    description: "Отдохни по-грузински",
    price: 600,
    isWithHandle: false,
  },
  {
    id: 4,
    name: "Бокал для вина Бордо",
    image: fifth,
    description: "Отдохни после напряженного дня",
    price: 300,
    isWithHandle: false,
  },
];
