import "./MainPage.css";
import { Filter } from "./Filter";
import { Goods } from "../Goods";
import { Good } from "../Goods";
import { useState } from "react";
import { Product } from "./Product";

export function MainPage() {
  const [visibleMugsWithHandle, setVisibleMugsWithHandle] = useState<boolean>();

  function showAllGoods() {
    setVisibleMugsWithHandle(undefined);
  }

  function showGoodsWithHandle() {
    setVisibleMugsWithHandle(true);
  }

  function showGoodsWithoutHandle() {
    setVisibleMugsWithHandle(false);
  }

  function defineVisibleProducts() {
    const visibleGoodsArr = Goods.filter((product) => {
      switch (visibleMugsWithHandle) {
        case undefined:
          return product;
        case true:
          return product.isWithHandle;
        case false:
          return !product.isWithHandle;
      }
    });

    return visibleGoodsArr;
  }

  return (
    <div className="main-page">
      <Filter
        showAll={showAllGoods}
        showWithHandle={showGoodsWithHandle}
        showWithoutHandle={showGoodsWithoutHandle}
      />

      <div className="main-page__products">
        {defineVisibleProducts().map((product: Good) => {
          return <Product productInformation={product} />;
        })}
      </div>
    </div>
  );
}
