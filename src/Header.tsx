import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useContext } from "react";
import { Good } from "./MainPage/Goods";

interface Props {
  savedCount: Good[];
  bagCount: number;
}

export const Header: React.FC<Props> = ({ savedCount, bagCount }) => (
  <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">
        <Link to="/" className="header__title">
          Магазин Кружек
        </Link>
      </Navbar.Brand>

      <ButtonGroup className="me-2" aria-label="First group">
        <Link to="/saved" className="header__saved">
          <Button variant="secondary">Избранное ({savedCount.length})</Button>
        </Link>
        <Link to="/bag" className="header__bag">
          <Button variant="secondary">Корзина({bagCount})</Button>
        </Link>
      </ButtonGroup>
    </Container>
  </Navbar>
);
