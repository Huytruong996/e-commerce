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
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
  };
  const handleToggleBody = () => {
    if (value) setValue(false);
  };
  return (
    <HashRouter>
      <GlobalStyle opened={value} />
      <TopBar {...TopBarData} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              opened={value}
              handleToggle={handleToggle}
              handleToggleBody={handleToggleBody}
            />
          )}
        />
        <Route
          exact
          path="/:name"
          render={() => (
            <DetailProduct
              {...ProductDetailData}
              opened={value}
              handleToggle={handleToggle}
              handleToggleBody={handleToggleBody}
            />
          )}
        />
      </Switch>
      <FooterHome />
    </HashRouter>
  );
}

export default App;
