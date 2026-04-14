import React, { createContext } from "react";
import type { uiAction, uiState } from "../sharedTypes/uiTypes";

export const UIContext = createContext<{
  state: uiState;
  dispatch: React.Dispatch<uiAction>;
}>({
  state: {
    modal: {
      isOpen: false,
      type: null,
      payload: null,
    },
  },
  dispatch: () => {},
});
