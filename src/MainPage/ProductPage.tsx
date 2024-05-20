import "./ProductPage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { Goods } from "../Goods";
import { Link } from "react-router-dom";
import { RoutesObject } from "../RoutesObject";

export function ProductPage() {
  const { productId } = useParams<string>();
  const id: number = Number(productId);
  const { savedGoods, setSavedGoods, goodsInBag, setGoodsInBag } =
    useContext(GoodsContext);

  return (
    <div className="product-page">
      <div className="product-page__header">
        <Link to={RoutesObject.mainPage}>
          <Button
            style={{ fontSize: "1.5vw", lineHeight: "2vw" }}
            className="product-page__header-button"
            variant="primary"
          >
            Главная страница
          </Button>
        </Link>
      </div>

      <div className="product-page__description">
        <Card.Img
          style={{ width: "50vw" }}
          className="product-page__image"
          variant="top"
          src={Goods[id].image}
        />

        <div className="product-page__card-body">
          <Card.Body>
            <Card.Title>
              <div className="product-page__card-title">{Goods[id].name}</div>
            </Card.Title>

            <div className="product-page__card-text">
              <Card.Text>{Goods[id].description}</Card.Text>
            </div>

            <div className="product-page__buttons">
              <Button
                style={{ fontSize: "1.5vw", lineHeight: "2vw" }}
                className="product-page__button"
                variant="primary"
                onClick={() =>
                  !savedGoods.includes(id)
                    ? setSavedGoods([...savedGoods, id])
                    : setSavedGoods([...savedGoods])
                }
              >
                {savedGoods.includes(id) ? "В избранное  ✓" : " В избранное"}
              </Button>

              <Button
                style={{ fontSize: "1.5vw", lineHeight: "2vw" }}
                variant="primary"
                className="product-page__button"
                onClick={() =>
                  !goodsInBag.includes(id)
                    ? setGoodsInBag([...goodsInBag, id])
                    : setGoodsInBag([...goodsInBag])
                }
              >
                {goodsInBag.includes(id) ? "В корзину ✓" : "В корзину"}
              </Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}
