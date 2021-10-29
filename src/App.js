import "./App.css";
import GlobalStyle from "./globalStyles";
import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import { GlobalContext } from "./context/GlobalContext";
import DetailProduct from "./Pages/DetailProduct";
import { TopBar } from "./components";
import { TopBarData, ProductDetailData } from "./components/Data";
import FooterHome from "./components/Footer";

function App() {
  const { opened } = useContext(GlobalContext);

  return (
    <HashRouter>
      <GlobalStyle opened={opened} />
      <TopBar {...TopBarData} />
      <Switch>
        <Route exact path="/" render={() => <HomePage opened={opened} />} />
        <Route
          exact
          path="/:name"
          render={() => (
            <DetailProduct {...ProductDetailData} opened={opened} />
          )}
        />
      </Switch>
      <FooterHome />
    </HashRouter>
  );
}

export default App;
