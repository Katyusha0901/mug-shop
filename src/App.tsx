import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { MainPage } from "./MainPage/MainPage";
import { ProductPage } from "./MainPage/ProductPage";
import { SavedProducts } from "./SavedGoods/SavedProducts";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mug-shop" element={<MainPage />}></Route>
        <Route path="/saved-products" element={<SavedProducts />}></Route>
        <Route path="/:productId" element={<ProductPage />}></Route>
      </Routes>
    </>
  );
}
