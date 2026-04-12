import { createContext } from "react";
import type { AppContextType } from "../sharedTypes/contextType";

export const AppContext = createContext<AppContextType>({
  state: { transactions: [], categories: [] },
  dispatch: () => null,
  currentTab: "dashboard",
  setCurrentTab: () => {},
});
