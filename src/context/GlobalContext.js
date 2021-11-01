import React, { createContext, useReducer } from "react";

const initialLoading = {
  loading: true,
};

const LoadingReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_START":
      return {
        loading: true,
      };
    case "LOADING_END":
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useReducer(LoadingReducer, initialLoading);
  return (
    <GlobalContext.Provider
      value={{
        ...loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
