import { useApp } from "../hooks/useApp";
import type { TransactionType } from "../sharedTypes/transactionTypes";
import List from "./List";

function TransactionList({
  transactionListLength,
  filteredTransactions,
}: {
  transactionListLength: number;
  filteredTransactions?: TransactionType[];
}) {
  const { state, sortByDateNewest } = useApp();
  const sortByDateTransactions =
    filteredTransactions && filteredTransactions.length > 0
      ? filteredTransactions
      : sortByDateNewest(state.transactions);
  const headerTitles = [
    "Date",
    "Category",
    "Description",
    "Amount",
    "Type",
    "",
  ];

  return (
    <List
      transactionListLength={transactionListLength}
      headerTitles={headerTitles}
      dataArr={sortByDateTransactions}
      from="transactionList"
    />
  );
}

export default TransactionList;
