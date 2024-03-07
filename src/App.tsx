import React, { Children } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { Header } from "./Header";
import { MainPage } from "./MainPage/MainPage";
import { Good } from "./MainPage/Goods";
import { GoodsContext } from "./GoodsContextProvider";

export default function App() {
  const [saveGoodsLength, setSaveGoodsLength] = useState<number>(0);
  const [goodsInBag, setGoodsInBag] = useState<number>(0);

  const savedGoods: Good[] = useContext(GoodsContext);

  return (
    <>
      <Header savedCount={savedGoods} bagCount={goodsInBag} />
      <Routes>
        <Route path="/mug-shop" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}
