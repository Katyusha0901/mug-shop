import "./ProductPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { Goods } from "../Goods";

export function ProductPage() {
  const { productId } = useParams<string>();
  const id: number = Number(productId);

  return (
    <div className="product-page">
      <div className="product-page__description">
        <Card.Img
          className="product-page__image"
          variant="top"
          src={Goods[id].image}
        />
        <Card.Body>
          <Card.Title>{Goods[id].name}</Card.Title>
          <Card.Text>{Goods[id].description}</Card.Text>
          <div className="product-page__buttons">
            <Button className="product-page__button" variant="primary">
              В избранное
            </Button>
            <Button variant="primary">В корзину</Button>
          </div>
        </Card.Body>
      </div>
    </div>
  );
}
