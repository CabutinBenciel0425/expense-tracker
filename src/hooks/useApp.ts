import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import type { TransactionType } from "../sharedTypes/transactionTypes";

export function useApp() {
  const context = useContext(AppContext);
  const { dispatch, state, currentTab, setCurrentTab } = context;
  const totalIncome = state.transactions.reduce(
    (acc, cur) => (cur.type === "Income" ? cur.amount + acc : acc),
    0,
  );
  const totalExpense = state.transactions.reduce(
    (acc, cur) => (cur.type === "Expense" ? cur.amount + acc : acc),
    0,
  );
  const totalBalance = totalIncome - totalExpense;

  function formatString(str: string) {
    return str.split("").at(0)?.toUpperCase() + str.slice(1);
  }

  function sortByDate(arr: TransactionType[]) {
    return [...arr].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  if (!context) throw new Error("App Context was used outside the provider");

  return {
    dispatch,
    state,
    totalIncome,
    totalExpense,
    totalBalance,
    currentTab,
    setCurrentTab,
    formatString,
    sortByDate,
  };
}
