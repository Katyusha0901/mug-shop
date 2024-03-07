import React, { Children } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { Header } from "./Header";
import { MainPage } from "./MainPage/MainPage";
import { Good } from "./MainPage/Goods";
import { SavedGoodsContext } from "./SavedGoodsContextProvider";
import { GoodsInBagContext } from "./GoodsInBagContextProvider";

export default function App() {
  const savedGoods: Good[] = useContext(SavedGoodsContext);
  const goodsInBag: Good[] = useContext(GoodsInBagContext);

  return (
    <>
      <Header savedGoods={savedGoods} goodsInBag={goodsInBag} />
      <Routes>
        <Route path="/mug-shop" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}
