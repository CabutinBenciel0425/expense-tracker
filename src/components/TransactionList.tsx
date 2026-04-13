import { useApp } from "../hooks/useApp";
import List from "./List";

function TransactionList({
  transactionListLength,
}: {
  transactionListLength: number;
}) {
  const { state, sortByDate } = useApp();
  const sortByDateTransactions = sortByDate(state.transactions);
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
