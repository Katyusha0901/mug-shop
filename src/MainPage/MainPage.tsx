import "./MainPage.css";
import { Filter } from "./Filter";
import { Goods } from "./Goods";
import { useState } from "react";

export function MainPage() {
  const [visibleMugsWithHandle, setVisibleMugsWithHandle] =
    useState<boolean>(false);

  function showAllGoods() {
    setVisibleMugsWithHandle(false);
  }

  function showGoodsWithHandle() {
    setVisibleMugsWithHandle(true);
  }

  return (
    <div className="main-page">
      <Filter showAll={showAllGoods} showWithHandle={showGoodsWithHandle} />
    </div>
  );
}
