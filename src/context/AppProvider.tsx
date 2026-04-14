import type React from "react";
import { useEffect, useReducer, useState } from "react";
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
  const [currentTab, setCurrentTab] = useState("dashboard");

  const initialState: AppContextType["state"] = (() => {
    const storedLists = localStorage.getItem("lists");
    if (storedLists) {
      try {
        return JSON.parse(storedLists) as AppContextType["state"];
      } catch {
        return { transactions, categories };
      }
    }
    return { transactions, categories };
  })();

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch, currentTab, setCurrentTab }}>
      {children}
    </AppContext.Provider>
  );
}
