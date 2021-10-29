import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import "./Grid.scss";
import App from "./App";
import "lazysizes";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import GlobalContextProvider from "./context/GlobalContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fed700",
    },
  },
});

ReactDOM.render(
  <GlobalContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </GlobalContextProvider>,
  document.getElementById("root")
);
