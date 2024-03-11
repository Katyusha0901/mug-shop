import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SavedProducts.css";
import { useContext, useState, useEffect } from "react";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { Goods } from "../Goods";
import { SavedProduct } from "./SavedProduct";

export function SavedProducts() {
  const { savedGoods, setSavedGoods } = useContext<{
    savedGoods: number[];
    setSavedGoods: (array: number[]) => void;
    goodsInBag: number[];
    setGoodsInBag: (array: number[]) => void;
  }>(GoodsContext);

  const [isSavedGoods, setIsSavedGoods] = useState<boolean>(false);

  useEffect(() => {
    if (savedGoods.length > 0) {
      setIsSavedGoods(true);
    } else {
      setIsSavedGoods(false);
    }
  }, [savedGoods]);

  return (
    <div className="saved-products">
      <div className="saved-products__text saved-products__title ">
        Избранное
      </div>
      <div className="saved-products__header">
        <Link to="/mug-shop">
          <Button variant="primary">Главная страница</Button>
        </Link>
      </div>
      <div className="saved-products__content">
        {!isSavedGoods ? (
          <div className="saved-products__text">Нет сохраненных</div>
        ) : (
          <div className="saved-products__goods">
            {savedGoods.map((id: number) => {
              return (
                <div className="">
                  <SavedProduct productInformation={Goods[id]} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
