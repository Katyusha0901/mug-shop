import "./MainPage.css";
import { Filter } from "./Filter";
import { Goods } from "../Goods";
import { Good } from "../Goods";
import { useState } from "react";
import { Product } from "./Product";

export function MainPage() {
  const [visibleMugsWithHandle, setVisibleMugsWithHandle] = useState<boolean>();
  const [visibleMugsWithoutHandle, setVisibleMugsWithoutHandle] =
    useState<boolean>();

  function showAllGoods() {
    setVisibleMugsWithHandle(false);
    setVisibleMugsWithoutHandle(false);
  }

  function showGoodsWithHandle() {
    setVisibleMugsWithHandle(true);
    setVisibleMugsWithoutHandle(false);
  }

  function showGoodsWithoutHandle() {
    setVisibleMugsWithoutHandle(true);
    setVisibleMugsWithHandle(false);
  }

  function defineVisibleProducts() {
    const visibleGoodsArr = Goods.filter((product) => {
      if (visibleMugsWithHandle && visibleMugsWithoutHandle) {
        return product;
      } else if (visibleMugsWithHandle) {
        return product.isWithHandle;
      } else if (visibleMugsWithoutHandle) {
        return !product.isWithHandle;
      } else if (!visibleMugsWithHandle && !visibleMugsWithoutHandle) {
        return product;
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
