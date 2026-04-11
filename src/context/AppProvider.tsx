import type React from "react";
import { useReducer } from "react";
import type { AppContextType } from "../sharedTypes/contextType";
import { AppContext } from "./AppContext";
import { appReducer } from "../reducers/appReducer";
import { transactions, categories } from "../data/fakeData";

const initialState: AppContextType["state"] = {
  //   transactions: [],
  //   categories: [],
  transactions,
  categories,
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
