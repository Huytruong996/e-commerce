import "./App.css";
import "babel-polyfill";
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/Home";
import DetailProduct from "./Pages/DetailProduct";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailData } from "./components/Data";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
import ScrollToTop from "./hooks/ScrollToTop";
import WithAuth from "./hoc/withAuth";
import { checkUserSession } from "./redux/User/user.actions";
import Loading from "./components/Loading";
const App = () => {
  const { currentUser, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  if (loading) {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Loading />
      </div>
    );
  }
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/Account">
          {currentUser ? <Redirect to="/" /> : <Account />}
        </Route>
        <Route path="/Cart">
          <WithAuth>
            <Cart />
          </WithAuth>
        </Route>
        <Route
          path="/:name"
          render={() => <DetailProduct {...ProductDetailData} />}
        />
      </Switch>
    </ScrollToTop>
  );
};

export default App;
