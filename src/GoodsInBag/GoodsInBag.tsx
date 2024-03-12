import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./GoodsInBag.css";
import { useContext } from "react";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { Goods } from "../Goods";
import { GoodInBag } from "./GoodInBag";
import { Order } from "./Order";
import { RoutesObject } from "../RoutesObject";

export function GoodsInBag() {
  const { goodsInBag } = useContext(GoodsContext);

  return (
    <div className="in-bag-products">
      <div className="in-bag-products__text saved-products__title ">
        Корзина
      </div>

      <div className="in-bag-products__header">
        <Link to={RoutesObject.mainPage}>
          <Button variant="primary">Главная страница</Button>
        </Link>
      </div>

      <div className="in-bag-products__content">
        {!goodsInBag.length ? (
          <div className="in-bag-products__text">Нет товаров</div>
        ) : (
          <div className="in-bag-products__goods">
            {goodsInBag.map((id: number) => {
              return (
                <div className="">
                  <GoodInBag productInformation={Goods[id]} />
                </div>
              );
            })}

            <Order />
          </div>
        )}
      </div>
    </div>
  );
}
