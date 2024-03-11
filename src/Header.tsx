import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { GoodsContext } from "./Context/GoodsContextProvider";

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
        <Link to="/mug-shop" className="header__text">
          Магазин Кружек
        </Link>
      </div>

      <div className="buttons">
        <Link to="/saved-products" className="buttons__saved">
          Избранное ({savedGoods.length})
        </Link>

        <Link to="/bag" className="buttons__bag">
          Корзина({goodsInBag.length})
        </Link>
      </div>
    </div>
  );
}
