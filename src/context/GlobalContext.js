import React, { createContext, useReducer } from "react";

const ToggleMenuMbReducer = (state, action) => {
  return {
    ...action.payload,
  };
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [ToggleMenuMb, ToggleMenuMbDispatch] = useReducer(ToggleMenuMbReducer, {
    opened: false,
  });
  return (
    <GlobalContext.Provider value={{ ...ToggleMenuMb, ToggleMenuMbDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
