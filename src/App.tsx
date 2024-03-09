import React, { Children } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { Header } from "./Header";
import { MainPage } from "./MainPage/MainPage";
import { Good } from "./MainPage/Goods";
import { GoodsContext } from "./Context/GoodsContextProvider";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mug-shop" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}
