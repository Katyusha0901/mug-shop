import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";

export default function App() {
  const [saveGoodsLength, setSaveGoodsLength] = useState<number>(0);
  const [goodsInBag, setGoodsInBag] = useState<number>(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Header />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
