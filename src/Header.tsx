import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { GoodsContext } from "./Context/GoodsContextProvider";
import { RoutesObject } from "./RoutesObject";

export function Header() {
  const { savedGoods, goodsInBag } = useContext<{
    savedGoods: number[];
    setSavedGoods: (array: number[]) => void;
    goodsInBag: number[];
    setGoodsInBag: (array: number[]) => void;
  }>(GoodsContext);

  return (
    <div className="header">
      <div className="header__title">
        <Link to={RoutesObject.mainPage} className="header__text">
          Магазин Кружек
        </Link>
      </div>

      <div className="buttons">
        <Link to={RoutesObject.savedProducts} className="buttons__saved">
          Избранное ({savedGoods.length})
        </Link>

        <Link to={RoutesObject.bag} className="buttons__bag">
          Корзина({goodsInBag.length})
        </Link>
      </div>
    </div>
  );
}
