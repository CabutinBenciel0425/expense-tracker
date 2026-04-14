import { useApp } from "../hooks/useApp";
import type { CategoryType } from "../sharedTypes/categoryTypes";
import type { TransactionType } from "../sharedTypes/transactionTypes";
import EditDeleteButton from "../ui/EditDeleteButton";

type ListPropTypes = {
  transactionListLength: number;
  headerTitles: string[];
  dataArr: TransactionType[] | CategoryType[];
  from: "transactionList" | "categoryList";
};

function List({
  transactionListLength,
  headerTitles,
  dataArr,
  from,
}: ListPropTypes) {
  const { formatDate } = useApp();
  return (
    <div className="w-10/12 m-auto max-h-125 overflow-y-auto border border-brand-bg-light">
      <table className="border-separate text-xl border-spacing-y-3 w-full text-left">
        <thead className="text-2xl sticky top-0 bg-brand-text text-brand-bg">
          <tr>
            {headerTitles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataArr.map((data, index) =>
            index < transactionListLength ? (
              <tr
                key={data.id}
                className="even:bg-brand-bg odd:bg-brand-table-even"
              >
                {from === "transactionList" ? (
                  <>
                    <td>{formatDate((data as TransactionType).date)}</td>
                    <td>{(data as TransactionType).category}</td>
                    <td>{(data as TransactionType).description}</td>
                    <td>{(data as TransactionType).amount}</td>
                  </>
                ) : (
                  <td>{(data as CategoryType).name}</td>
                )}
                <td
                  className={`${data.type === "Income" ? "bg-brand-income" : "bg-brand-expense"} rounded-md px py-0.5 text-center`}
                >
                  {data.type}
                </td>
                <td className="text-3xl">
                  <EditDeleteButton data={data} from={from} />
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

export default List;
