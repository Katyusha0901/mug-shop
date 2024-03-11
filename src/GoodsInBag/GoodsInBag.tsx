import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GoodsInBag.css";
import { useContext, useState, useEffect } from "react";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { Goods } from "../Goods";
import { GoodInBag } from "./GoodInBag";
import Modal from "react-bootstrap/Modal";

export function GoodsInBag() {
  const { goodsInBag, setGoodsInBag } = useContext<{
    savedGoods: number[];
    setSavedGoods: (array: number[]) => void;
    goodsInBag: number[];
    setGoodsInBag: (array: number[]) => void;
  }>(GoodsContext);

  const [isGoodsInBag, setIsGoodsInBag] = useState<boolean>(false);

  useEffect(() => {
    if (goodsInBag.length > 0) {
      setIsGoodsInBag(true);
    } else {
      setIsGoodsInBag(false);
    }
  }, [goodsInBag]);

  function sumOfPrice() {
    const prices = goodsInBag.map((id) => Goods[id].price);
    return prices.reduce((sum, price) => sum + price);
  }

  return (
    <div className="in-bag-products">
      <div className="in-bag-products__text saved-products__title ">
        Корзина
      </div>
      <div className="in-bag-products__header">
        <Link to="/mug-shop">
          <Button variant="primary">Главная страница</Button>
        </Link>
      </div>
      <div className="in-bag-products__content">
        {!isGoodsInBag ? (
          <div className="in-bag-products__text">Нет товаров</div>
        ) : (
          <div className="in-bag-products__goods">
            {goodsInBag.map((id: number) => {
              return (
                <div className="">
                  <GoodInBag productInformation={Goods[id]} />
                  <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                  >
                    <Modal.Dialog>
                      <div className="in-bag-products__total">
                        <div className="in-bag-products__total-title">
                          <Modal.Title>Оплатите покупки</Modal.Title>
                        </div>
                        <Modal.Body>
                          <div className="in-bag-products__total-chek">
                            <p>{sumOfPrice()} руб.</p>
                            <p>{goodsInBag.length} шт.</p>
                          </div>
                        </Modal.Body>
                        <Modal.Body>
                          <p>Modal body text goes here.</p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary">Close</Button>
                          <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                      </div>
                    </Modal.Dialog>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
