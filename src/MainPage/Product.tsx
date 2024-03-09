import { Good } from "./Goods";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { useState, useContext } from "react";
import "./Product.css";

interface Props {
  productInformation: Good;
}

export const Product: React.FC<Props> = ({ productInformation }) => {
  const { savedGoods, setSavedGoods, goodsInBag, setGoodsInBag } = useContext<{
    savedGoods: number[];
    setSavedGoods: (array: number[]) => void;
    goodsInBag: number[];
    setGoodsInBag: (array: number[]) => void;
  }>(GoodsContext);

  return (
    <div className="product">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productInformation.image} />
        <Card.Body>
          <Card.Title>{productInformation.name}</Card.Title>
          <Card.Text>{productInformation.price} руб.</Card.Text>
          <div className="product__buttons">
            <Button
              variant="primary"
              onClick={() =>
                !savedGoods.includes(productInformation.id)
                  ? setSavedGoods([...savedGoods, productInformation.id])
                  : setSavedGoods([...savedGoods])
              }
            >
              Сохранить
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                !goodsInBag.includes(productInformation.id)
                  ? setGoodsInBag([...goodsInBag, productInformation.id])
                  : setGoodsInBag([...goodsInBag])
              }
            >
              В корзину
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
