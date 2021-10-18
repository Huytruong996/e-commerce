import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import "./Grid.scss";
import App from "./App";
import GlobalContextProvider from "./context/GlobalContext";

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.getElementById("root")
);
