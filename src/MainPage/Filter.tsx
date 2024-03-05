import "./Filter.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  showAll: () => void;
  showWithHandle: () => void;
  showWithoutHandle: () => void;
}

export const Filter: React.FC<Props> = ({
  showAll,
  showWithHandle,
  showWithoutHandle,
}) => {
  return (
    <div className="filter">
      <NavDropdown title="Фильтр" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" onClick={() => showAll()}>
          Показать все
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" onClick={() => showWithHandle()}>
          С ручкой
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.3"
          onClick={() => showWithoutHandle()}
        >
          Без ручки
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
