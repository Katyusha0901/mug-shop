import { Good } from "../Goods";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

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

  function isInSaved() {
    if (savedGoods.includes(productInformation.id)) {
      return "✓";
    }
  }

  function isInBag() {
    if (goodsInBag.includes(productInformation.id)) {
      return "✓";
    }
  }

  return (
    <div className="product">
      <Card style={{ width: "18rem" }}>
        <Link key={productInformation.id} to={`/${productInformation.id}`}>
          <Card.Img variant="top" src={productInformation.image} />
        </Link>

        <Card.Body>
          <Link key={productInformation.id} to={`/${productInformation.id}`}>
            <Card.Title>{productInformation.name}</Card.Title>
          </Link>

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
              Сохранить {isInSaved()}
            </Button>

            <Button
              variant="primary"
              onClick={() =>
                !goodsInBag.includes(productInformation.id)
                  ? setGoodsInBag([...goodsInBag, productInformation.id])
                  : setGoodsInBag([...goodsInBag])
              }
            >
              В корзину {isInBag()}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
