import { useState } from "react";

export default function MainPage() {
  const [saveGoodsLength, setSaveGoodsLength] = useState<number>(0);
  const [goodsInBag, setGoodsInBag] = useState<number>(0);
  return <div className="mainPage"></div>;
}
