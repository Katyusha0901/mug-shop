import { Good } from "../Goods";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./SavedProduct.css";

interface Props {
  productInformation: Good;
}

export const SavedProduct: React.FC<Props> = ({ productInformation }) => {
  const { savedGoods, setSavedGoods, goodsInBag, setGoodsInBag } =
    useContext(GoodsContext);

  return (
    <div className="saved-product">
      <Card style={{ width: "18rem" }}>
        <div className="saved-product__close-button">
          <Button
            variant="primary"
            onClick={() =>
              setSavedGoods(
                savedGoods.filter((id) => id !== productInformation.id)
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
          <div className="saved-product__card-body">
            <Link
              key={productInformation.id}
              to={`/product/${productInformation.id}`}
            >
              <Card.Title>{productInformation.name}</Card.Title>
            </Link>
            <Card.Text>{productInformation.price} руб.</Card.Text>
            <div className="product__buttons">
              <Button
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
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
