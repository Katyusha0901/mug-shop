import { Good } from "../Goods";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RoutesObject } from "../RoutesObject";
import "./Product.css";

interface Props {
  productInformation: Good;
}

export const Product: React.FC<Props> = ({ productInformation }) => {
  const { savedGoods, setSavedGoods, goodsInBag, setGoodsInBag } =
    useContext(GoodsContext);

  return (
    <div className="product">
      <Card style={{ width: "25vw" }}>
        <Link
          key={productInformation.id}
          to={`/mug-shop/product/${productInformation.id}`}
        >
          <Card.Img variant="top" src={productInformation.image} />
        </Link>

        <Card.Body>
          <Link
            key={productInformation.id}
            to={`/mug-shop/product/${productInformation.id}`}
          >
            <Card.Title style={{ fontSize: "1.5vw" }}>
              {productInformation.name}
            </Card.Title>
          </Link>

          <Card.Text className="product__text">
            {productInformation.price} руб.
          </Card.Text>

          <div className="product__buttons">
            <Button
              style={{
                width: "10.5vw",
                height: "5vw",
                padding: "0.5vw",
                lineHeight: "2vw",
                fontSize: "1.2vw",
              }}
              variant="primary"
              className="product__text"
              onClick={() =>
                !savedGoods.includes(productInformation.id)
                  ? setSavedGoods([...savedGoods, productInformation.id])
                  : setSavedGoods([...savedGoods])
              }
            >
              {savedGoods.includes(productInformation.id)
                ? "В избранное  ✓"
                : " В избранное"}
            </Button>

            <Button
              style={{
                width: "10.5vw",
                height: "5vw",
                padding: "0.5vw",
                lineHeight: "0.1vw",
                fontSize: "1.2vw",
              }}
              className="product__text"
              variant="primary"
              onClick={() =>
                !goodsInBag.includes(productInformation.id)
                  ? setGoodsInBag([...goodsInBag, productInformation.id])
                  : setGoodsInBag([...goodsInBag])
              }
            >
              {goodsInBag.includes(productInformation.id)
                ? "В корзину  ✓"
                : " В корзину"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
