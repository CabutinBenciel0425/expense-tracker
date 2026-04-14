import type { TransactionType } from "./../sharedTypes/transactionTypes";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { generateNewId } from "../utils/helpers";
import type { CategoryType } from "../sharedTypes/categoryTypes";

type NewTransactionData = {
  date: string;
  category: string;
  description: string;
  amount: number;
  type: string;
};

type UpdateTransactionData = NewTransactionData & {
  id: string;
};

type CategoryData = {
  name: string;
  type: string;
};

export function useApp() {
  const context = useContext(AppContext);
  const { dispatch, state, currentTab, setCurrentTab } = context;
  const todayDate = new Date().toISOString().split("T")[0];

  const totalIncome = state.transactions.reduce(
    (acc, cur) => (cur.type === "Income" ? cur.amount + acc : acc),
    0,
  );
  const totalExpense = state.transactions.reduce(
    (acc, cur) => (cur.type === "Expense" ? cur.amount + acc : acc),
    0,
  );
  const totalBalance = totalIncome - totalExpense;

  const types = [...new Set(state.transactions.map((tr) => tr.type))].map(
    (type) => ({ name: type }),
  );

  function addTransaction(data: NewTransactionData) {
    const { date, category, description, amount, type } = data;
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        id: generateNewId(),
        date,
        category,
        description: description.trim(),
        amount,
        type,
      },
    });
  }

  function addCategory(data: CategoryData) {
    const { name, type } = data;
    dispatch({
      type: "ADD_CATEGORY",
      payload: {
        id: generateNewId(),
        name: name.trim(),
        type,
      },
    });
  }

  function updateTransaction(data: UpdateTransactionData) {
    const { id, date, category, description, amount, type } = data;
    dispatch({
      type: "UPDATE_TRANSACTION",
      payload: {
        id,
        date,
        category,
        description,
        amount,
        type,
      },
    });
  }

  function formatString(str: string) {
    return str.split("").at(0)?.toUpperCase() + str.slice(1);
  }

  function sortByDateNewest(arr: TransactionType[]) {
    return [...arr].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  function sortByDateOldest(arr: TransactionType[]) {
    return [...arr].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  }

  function deleteTransaction(dataRow: TransactionType) {
    dispatch({
      type: "DELETE_TRANSACTION",
      id: dataRow.id,
    });
  }

  function deleteCategory(dataRow: CategoryType) {
    dispatch({
      type: "DELETE_CATEGORY",
      id: dataRow.id,
    });
  }

  function formatDate(value: string) {
    const parts = value.split("-");

    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const day = Number(parts[2]);

    const date = new Date(Date.UTC(year, month - 1, day));

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
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
    sortByDateNewest,
    sortByDateOldest,
    deleteTransaction,
    deleteCategory,
    todayDate,
    formatDate,
    addTransaction,
    addCategory,
    updateTransaction,
    types,
  };
}
