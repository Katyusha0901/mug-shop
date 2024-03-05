import "./Filter.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  showAll: Function;
  showWithHandle: Function;
}

export const Filter: React.FC<Props> = ({ showAll, showWithHandle }) => {
  return (
    <div className="filter">
      <NavDropdown title="Фильтер" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" onClick={() => showAll()}>
          Показать все
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" onClick={() => showWithHandle()}>
          С ручкой
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Без ручки</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
