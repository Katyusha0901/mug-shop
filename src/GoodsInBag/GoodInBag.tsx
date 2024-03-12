import { Good } from "../Goods";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
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

  function isInSaved() {
    if (savedGoods.includes(productInformation.id)) {
      return "✓";
    }
  }

  return (
    <div className="in-bag-product">
      <Card style={{ width: "18rem" }}>
        <div className="in-bag-product__close-button">
          <Button
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
              <Card.Title>{productInformation.name}</Card.Title>
            </Link>

            <Card.Text>{productInformation.price} руб.</Card.Text>

            <div className="in-bag-product__buttons">
              <Button
                variant="primary"
                onClick={() =>
                  !savedGoods.includes(productInformation.id)
                    ? setSavedGoods([...savedGoods, productInformation.id])
                    : setSavedGoods([...savedGoods])
                }
              >
                В избранное {isInSaved()}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
