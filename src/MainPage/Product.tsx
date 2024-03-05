import { Good } from "./Goods";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  productInformation: Good;
}

export const Product: React.FC<Props> = ({ productInformation }) => {
  return (
    <div className="product">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productInformation.image} />
        <Card.Body>
          <Card.Title>{productInformation.name}</Card.Title>
          <Card.Text>{productInformation.price} руб.</Card.Text>
          <div className="product__buttons">
            {" "}
            <Button variant="primary">В избранное</Button>
            <Button variant="primary">В корзину</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
