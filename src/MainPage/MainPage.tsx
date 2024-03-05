import "./MainPage.css";
import { Filter } from "./Filter";
import { Goods } from "./Goods";
import { Product } from "./Goods";
import { useEffect, useState } from "react";

export function MainPage() {
  //   const [visibleGoods, setVisibleGoods] = useState<Product[]>();

  const [visibleMugsWithHandle, setVisibleMugsWithHandle] = useState<boolean>();

  const [visibleMugsWithoutHandle, setVisibleMugsWithoutHandle] =
    useState<boolean>();

  function showAllGoods() {
    setVisibleMugsWithHandle(false);
  }

  function showGoodsWithHandle() {
    setVisibleMugsWithHandle(true);
  }

  function showGoodsWithoutHandle() {
    setVisibleMugsWithoutHandle(true);
  }

  function defineVisibleProducts() {
    const visibleGoodsArr = Goods.filter((product) => {
      if (visibleMugsWithHandle && visibleMugsWithoutHandle) {
        return product;
      } else if (visibleMugsWithHandle) {
        return product.isWithHandle;
      } else if (visibleMugsWithoutHandle) {
        return !product.isWithHandle;
      }
    });
    console.log(visibleGoodsArr);
    return visibleGoodsArr;
  }

  return (
    <div className="main-page">
      <Filter
        showAll={showAllGoods}
        showWithHandle={showGoodsWithHandle}
        showWithoutHandle={showGoodsWithoutHandle}
      />

      <div className="main-page__products"></div>
    </div>
  );
}
