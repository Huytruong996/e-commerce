import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import "./Grid.scss";
import App from "./App";
import "lazysizes";
import { Provider } from "react-redux";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";

import { HashRouter } from "react-router-dom";
import store from "./redux/createStore";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fed700",
    },
  },
});

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
