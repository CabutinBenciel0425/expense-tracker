import type { CategoryType } from "./categoryTypes";
import type { TransactionType } from "./transactionTypes";

export type uiState = {
  modal: {
    isOpen: boolean;
    type:
      | "updateTransaction"
      | "updateCategory"
      | "delete"
      | "addTransaction"
      | "addCategory"
      | null;
    payload: TransactionType | CategoryType | null;
  };
};

export type uiAction =
  | {
      type: "OPEN_MODAL";
      modalType:
        | "updateTransaction"
        | "updateCategory"
        | "delete"
        | "addTransaction"
        | "addCategory";
      payload?: TransactionType | CategoryType;
    }
  | { type: "CLOSE_MODAL" };
