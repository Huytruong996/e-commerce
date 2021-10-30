import "./App.css";
import GlobalStyle from "./globalStyles";
import React, { useContext, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import { GlobalContext } from "./context/GlobalContext";
import DetailProduct from "./Pages/DetailProduct";
import { TopBar } from "./components";
import { TopBarData, ProductDetailData } from "./components/Data";
import FooterHome from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <TopBar {...TopBarData} />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/:name"
          render={() => <DetailProduct {...ProductDetailData} />}
        />
      </Switch>
      <FooterHome />
    </HashRouter>
  );
}

export default App;
