import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./GoodsInBag.css";
import { useContext, useState, useEffect } from "react";
import { GoodsContext } from "../Context/GoodsContextProvider";
import { Goods } from "../Goods";
import validator from "email-validator";
import "./Order.css";

export function Order() {
  const { goodsInBag, setGoodsInBag } = useContext<{
    savedGoods: number[];
    setSavedGoods: (array: number[]) => void;
    goodsInBag: number[];
    setGoodsInBag: (array: number[]) => void;
  }>(GoodsContext);
  const [email, setEmail] = useState<string>("");

  function sumOfPrice() {
    let sum = 0;

    goodsInBag.forEach((id) => {
      sum += Goods[id].price;
    });
    return sum;
  }

  function createOrder(): void {
    if (!validator.validate(email)) {
      showOrderMessage("Неверный Email!", "red");
      return;
    }
    setEmail("");
    showOrderMessage("Успешно!", "green");
    setTimeout(() => setGoodsInBag([]), 3000);
  }

  function showOrderMessage(messsage: string, color: string) {
    const messageContainer: Element = document.querySelector(
      ".order__message_color"
    )!;
    messageContainer.className = " order__message_color_" + color;
    messageContainer.textContent = messsage;

    setTimeout(() => (messageContainer.textContent = null), 3000);
  }

  const [isGoodsInBag, setIsGoodsInBag] = useState<boolean>(false);

  useEffect(() => {
    if (goodsInBag.length > 0) {
      setIsGoodsInBag(true);
    } else {
      setIsGoodsInBag(false);
    }
  }, [goodsInBag]);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog style={{ width: "70vw" }}>
        <div className="order">
          <div className="order__title">
            <Modal.Title style={{ fontSize: "3vw" }}>
              Оплатите покупки
            </Modal.Title>
          </div>

          <Modal.Body style={{ width: "30vw" }}>
            <div className="order__check">
              <p>{sumOfPrice()} руб.</p>
              <p>{goodsInBag.length} шт.</p>
            </div>
          </Modal.Body>

          <Modal.Body style={{ width: "30vw" }}>
            <input
              className="order__input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              name="email"
              placeholder="Email"
            ></input>
            <div className="order__message_color"></div>
          </Modal.Body>

          <Modal.Footer style={{ width: "30vw" }}>
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20vw",
                height: "5vw",
                padding: "0.5vw",
                fontSize: "1.5vw",
                lineHeight: "3vw",
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
              variant="primary"
              href="#email"
              onClick={createOrder}
            >
              Получить информацию
            </Button>
          </Modal.Footer>
        </div>
      </Modal.Dialog>
    </div>
  );
}
