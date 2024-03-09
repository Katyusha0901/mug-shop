import React, { Children } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { MainPage } from "./MainPage/MainPage";
import { ProductPage } from "./MainPage/ProductPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mug-shop" element={<MainPage />}></Route>
        <Route path="/product-page" element={<ProductPage />}></Route>
      </Routes>
    </>
  );
}
