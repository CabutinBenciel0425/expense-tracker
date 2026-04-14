import type { uiAction, uiState } from "../sharedTypes/uiTypes";

export function uiReducer(state: uiState, action: uiAction) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          isOpen: true,
          type: action.modalType,
          payload: action.payload ?? null,
        },
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: {
          isOpen: false,
          type: null,
          payload: null,
        },
      };

    default:
      return state;
  }
}
