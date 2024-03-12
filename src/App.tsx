import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { MainPage } from "./MainPage/MainPage";
import { ProductPage } from "./MainPage/ProductPage";
import { SavedProducts } from "./SavedGoods/SavedProducts";
import { GoodsInBag } from "./GoodsInBag/GoodsInBag";
import { RoutesObject } from "./RoutesObject";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={RoutesObject.mainPage} element={<MainPage />}></Route>
        <Route
          path={RoutesObject.savedProducts}
          element={<SavedProducts />}
        ></Route>
        <Route path={RoutesObject.bag} element={<GoodsInBag />}></Route>
        <Route
          path={RoutesObject.productPage}
          element={<ProductPage />}
        ></Route>
      </Routes>
    </>
  );
}
