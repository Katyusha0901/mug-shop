import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, createContext } from "react";
import { Good } from "./MainPage/Goods";
import { GoodsContextProvider } from "./GoodsContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <GoodsContextProvider>
        <App />
      </GoodsContextProvider>
    </Router>
  </React.StrictMode>
);
