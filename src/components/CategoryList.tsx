import { useApp } from "../hooks/useApp";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../ui/Button";

function CategoryList() {
  const { state } = useApp();
  console.log(state.categories);

  return (
    <table className="border-separate text-2xl border-spacing-y-6 w-8/12 text-left m-auto">
      <thead className="text-2xl">
        <tr>
          <th>Category</th>
          <th>Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.categories.map((transaction) => (
          <tr
            key={transaction.id}
            className="even:bg-brand-bg odd:bg-brand-table-even"
          >
            <td>{transaction.name}</td>
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
        ))}
      </tbody>
    </table>
  );
}

export default CategoryList;
