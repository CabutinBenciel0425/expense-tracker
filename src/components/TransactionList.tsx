import { useApp } from "../hooks/useApp";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../ui/Button";

function TransactionList({
  transactionListLength,
}: {
  transactionListLength: number;
}) {
  const { state } = useApp();
  const sortByDateTransactions = state.transactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <div className="w-10/12 m-auto max-h-125 overflow-y-auto border border-brand-bg-light">
      <table className="border-separate text-xl border-spacing-y-3 w-full text-left">
        <thead className="text-2xl sticky top-0 bg-brand-text text-brand-bg">
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortByDateTransactions.map((transaction, index) =>
            index < transactionListLength ? (
              <tr
                key={transaction.id}
                className="even:bg-brand-bg odd:bg-brand-table-even"
              >
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td
                  className={`${transaction.type === "Income" ? "bg-brand-income" : "bg-brand-expense"} rounded-md px py-0.5 text-center`}
                >
                  {transaction.type}
                </td>
                <td className="text-3xl">
                  <div className="flex justify-center gap-2.5">
                    <Button variant="small">
                      <LuPencil />
                    </Button>
                    <Button variant="small">
                      <HiOutlineTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            ) : (
              ""
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
