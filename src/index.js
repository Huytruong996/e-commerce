import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import "./index.css";
import "./Grid.scss";
import App from "./App";
import "lazysizes";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import GlobalContextProvider from "./context/GlobalContext";
import ScrollToTop from "./hooks/ScrollToTop";
import { HashRouter } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fed700",
    },
  },
});
ReactDOM.render(
  <HashRouter>
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GlobalContextProvider>
  </HashRouter>,
  document.getElementById("root")
);
