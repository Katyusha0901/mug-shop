import "./Filter.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

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
  const [selectedFilter, setSelectedFilter] = useState("Показать все");

  useEffect(() => {
    switch (selectedFilter) {
      case "0":
        return showAll();
      case "1":
        return showWithHandle();
      case "2":
        return showWithoutHandle();
    }
  }, [selectedFilter]);

  return (
    <div className="filter">
      <Form.Select
        aria-label="Default select example"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="0">Показать все</option>
        <option value="1">С ручкой</option>
        <option value="2">Без ручки</option>
      </Form.Select>
    </div>
  );
};
