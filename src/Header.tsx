import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { GoodsContext } from "./Context/GoodsContextProvider";
import { RoutesObject } from "./RoutesObject";

export function Header() {
  const { savedGoods, goodsInBag } = useContext(GoodsContext);

  return (
    <div className="header">
      <div className="header__title">
        <Link to={RoutesObject.mainPage} className="header__text">
          Магазин Кружек
        </Link>
      </div>

      <div className="header__buttons">
        <Link to={RoutesObject.savedProducts} className="header__saved">
          Избранное ({savedGoods.length})
        </Link>

        <Link to={RoutesObject.bag} className="header__bag">
          Корзина({goodsInBag.length})
        </Link>
      </div>
    </div>
  );
}
