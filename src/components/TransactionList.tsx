import { useApp } from "../hooks/useApp";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";

function TransactionList({
  transactionListLength,
}: {
  transactionListLength: number;
}) {
  const { state } = useApp();
  const sortByDateTransactions = state.transactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  console.log(state);
  return (
    <table className="border-separate text-xl border-spacing-y-3 w-10/12 text-left m-auto">
      <thead className="text-2xl">
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
                  <button className="text-brand-cta-small cursor-pointer hover:text-brand-cta-small-hover transition-all duration-300 ease">
                    <LuPencil />
                  </button>
                  <button className="text-brand-cta-small cursor-pointer hover:text-brand-cta-small-hover transition-all duration-300 ease">
                    <HiOutlineTrash />
                  </button>
                </div>
              </td>
            </tr>
          ) : (
            ""
          ),
        )}
      </tbody>
    </table>
  );
}

export default TransactionList;
