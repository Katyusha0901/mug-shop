import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useContext } from "react";
import { GoodsContext } from "./Context/GoodsContextProvider";

export function Header() {
  const { savedGoods, setSavedGoods, goodsInBag, setGoodsInBag } = useContext<{
    savedGoods: number[];
    setSavedGoods: (array: number[]) => void;
    goodsInBag: number[];
    setGoodsInBag: (array: number[]) => void;
  }>(GoodsContext);
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="header__title">
            Магазин Кружек
          </Link>
        </Navbar.Brand>

        <ButtonGroup className="me-2" aria-label="First group">
          <Link to="/saved" className="header__saved">
            <Button variant="secondary">Избранное ({savedGoods.length})</Button>
          </Link>
          <Link to="/bag" className="header__bag">
            <Button variant="secondary">Корзина({goodsInBag.length})</Button>
          </Link>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
}
