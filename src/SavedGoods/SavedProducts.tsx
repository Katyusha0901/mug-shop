import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./SavedProducts.css";
import { useContext } from "react";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { Goods } from "../Goods";
import { SavedProduct } from "./SavedProduct";
import { RoutesObject } from "../RoutesObject";

export function SavedProducts() {
  const { savedGoods } = useContext(GoodsContext);

  return (
    <div className="saved-products">
      <div className="saved-products__text saved-products__title ">
        Избранное
      </div>
      <div className="saved-products__header">
        <Link to={RoutesObject.mainPage}>
          <Button
            style={{
              width: "13vw",
              height: "4vw",
              padding: "0.5vw",
              fontSize: "1.5vw",
              lineHeight: "1.3vw",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
            variant="primary"
          >
            Главная страница
          </Button>
        </Link>
      </div>
      <div className="saved-products__content">
        {!savedGoods.length ? (
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
