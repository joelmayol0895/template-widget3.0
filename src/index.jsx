import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { yotpoWidgetsContainer } from "react";
import "./css/style.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from './App';

const initYotpoWidgets = () => {
  setTimeout(() => {
    if (typeof yotpoWidgetsContainer !== "undefined") {
      yotpoWidgetsContainer.initWidgets();
      console.log("loaded");
    } else {
      console.log("yotpoWidgetsContainer not found, no widgets to initialize");
    }
    window.removeEventListener("load", initYotpoWidgets);
  }, 1000);
};

window.addEventListener("load", initYotpoWidgets);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
