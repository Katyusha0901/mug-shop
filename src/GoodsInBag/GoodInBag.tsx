import { Good } from "../Goods";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./GoodInBag.css";

interface Props {
  productInformation: Good;
}

export const GoodInBag: React.FC<Props> = ({ productInformation }) => {
  const { savedGoods, setSavedGoods, goodsInBag, setGoodsInBag } = useContext<{
    savedGoods: number[];
    setSavedGoods: (array: number[]) => void;
    goodsInBag: number[];
    setGoodsInBag: (array: number[]) => void;
  }>(GoodsContext);

  return (
    <div className="in-bag-product">
      <Card style={{ width: "25vw" }}>
        <div className="in-bag-product__close-button">
          <Button
            style={{
              width: "3vw",
              height: "3vw",
              padding: "0.5vw",
              fontSize: "2vw",
              paddingTop: "0vw",
            }}
            variant="primary"
            onClick={() =>
              setGoodsInBag(
                goodsInBag.filter((id) => id !== productInformation.id)
              )
            }
          >
            ×
          </Button>
        </div>

        <Link
          key={productInformation.id}
          to={`/product/${productInformation.id}`}
        >
          <Card.Img variant="top" src={productInformation.image} />
        </Link>

        <Card.Body>
          <div className="in-bag-product__card-body">
            <Link
              key={productInformation.id}
              to={`/product/${productInformation.id}`}
            >
              <Card.Title className="in-bag-product__title">
                {productInformation.name}
              </Card.Title>
            </Link>

            <Card.Text className="in-bag-product__text">
              {productInformation.price} руб.
            </Card.Text>

            <div className="in-bag-product__buttons">
              <Button
                style={{
                  width: "10.5vw",
                  height: "5vw",
                  padding: "0.5vw",
                  lineHeight: "1.5vw",
                  fontSize: "1.5vw",
                }}
                className="in-bag-product__text"
                variant="primary"
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
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
