import type React from "react";
import type { TransactionAction, TransactionType } from "./transactionTypes";
import type { CategoryAction, CategoryType } from "./categoryTypes";

export type AppContextType = {
  state: { transactions: TransactionType[]; categories: CategoryType[] };
  dispatch: React.Dispatch<TransactionAction | CategoryAction>;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};
