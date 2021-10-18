import "./App.css";
import GlobalStyle from "./globalStyles";
import React, { useContext } from "react";
import { HashRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { opened } = useContext(GlobalContext);

  return (
    <HashRouter>
      <GlobalStyle opened={opened} />
      <HomePage opened={opened} />
    </HashRouter>
  );
}

export default App;
