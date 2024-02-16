import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/style.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from './app';

window.addEventListener("load", () => {
  setTimeout(() => {
    if (typeof yotpoWidgetsContainer !== "undefined") {
      yotpoWidgetsContainer.initWidgets();
      console.log("loaded");
    } else {
      console.log("yotpoWidgetsContainer not found, no widgets to initialize");
    }
  }, 1000);
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
