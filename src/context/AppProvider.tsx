import type React from "react";
import { useReducer, useState } from "react";
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
  const [currentTab, setCurrentTab] = useState("dashboard");

  return (
    <AppContext.Provider value={{ state, dispatch, currentTab, setCurrentTab }}>
      {children}
    </AppContext.Provider>
  );
}
