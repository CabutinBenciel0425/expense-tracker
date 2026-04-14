import { useReducer } from "react";
import { uiReducer } from "../reducers/uiReducer";
import type { uiState } from "../sharedTypes/uiTypes";
import { UIContext } from "./UIContext";

export function UIProvider({ children }: { children: React.ReactNode }) {
  const initialState: uiState = {
    modal: {
      isOpen: false,
      type: null,
      payload: null,
    },
  };

  const [state, dispatch] = useReducer(uiReducer, initialState);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
}
