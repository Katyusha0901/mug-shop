import "./ProductPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { Goods } from "../Goods";

export function ProductPage() {
  const { productId } = useParams<string>();
  const id: number = Number(productId);
  const { savedGoods, setSavedGoods, goodsInBag, setGoodsInBag } = useContext<{
    savedGoods: number[];
    setSavedGoods: (array: number[]) => void;
    goodsInBag: number[];
    setGoodsInBag: (array: number[]) => void;
  }>(GoodsContext);

  return (
    <div className="product-page">
      <div className="product-page__description">
        <div className="product-page__image">
          <Card.Img variant="top" src={Goods[id].image} />
        </div>
        <div className="product-page__card-body">
          <Card.Body>
            <div className="product-page__card-title">
              <Card.Title>{Goods[id].name}</Card.Title>
            </div>
            <div className="product-page__card-text">
              <Card.Text>{Goods[id].description}</Card.Text>
            </div>
            <div className="product-page__buttons">
              <Button
                className="product-page__button"
                variant="primary"
                onClick={() =>
                  !savedGoods.includes(id)
                    ? setSavedGoods([...savedGoods, id])
                    : setSavedGoods([...savedGoods])
                }
              >
                В избранное
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  !goodsInBag.includes(id)
                    ? setGoodsInBag([...goodsInBag, id])
                    : setGoodsInBag([...goodsInBag])
                }
              >
                В корзину
              </Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}
