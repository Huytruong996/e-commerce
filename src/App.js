import "./App.css";
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import DetailProduct from "./Pages/DetailProduct";

import { ProductDetailData } from "./components/Data";
import Account from "./Pages/Account";
import ScrollToTop from "./hooks/ScrollToTop";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/Login" render={() => <Account />} />
        <Route path="/Register" render={() => <Account />} />
        <Route
          path="/:name"
          render={() => <DetailProduct {...ProductDetailData} />}
        />
      </Switch>
    </ScrollToTop>
  );
};

export default App;
