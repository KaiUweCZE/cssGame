import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/index.css";

const root = document.getElementById("result");
const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
