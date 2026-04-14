import { useEffect, useState } from "react";
import { useApp } from "../hooks/useApp";
import Button from "../ui/Button";
import Select from "../ui/Select";
import type { TransactionType } from "../sharedTypes/transactionTypes";

function CategoryFilter({
  setFilteredTransactions,
}: {
  setFilteredTransactions: React.Dispatch<
    React.SetStateAction<TransactionType[]>
  >;
}) {
  const { state, formatString, sortByDateNewest, sortByDateOldest } = useApp();
  const types = [...new Set(state.transactions.map((tr) => tr.type))].map(
    (type) => ({ name: type }),
  );

  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  function handleReset() {
    setSelectedType("all");
    setSelectedCategory("all");
    setSortOrder("newest");
  }

  useEffect(() => {
    function filterData() {
      let result = [...state.transactions];

      if (selectedType !== "all")
        result = result.filter((res) => res.type === selectedType);

      if (selectedCategory !== "all")
        result = result.filter((res) => res.category === selectedCategory);

      result =
        sortOrder === "newest"
          ? sortByDateNewest(result)
          : sortByDateOldest(result);

      setFilteredTransactions(result);
    }

    filterData();
  }, [
    selectedType,
    selectedCategory,
    sortOrder,
    sortByDateNewest,
    sortByDateOldest,
    state.transactions,
    setFilteredTransactions,
  ]);

  return (
    <div className="w-full mb-10 text-2xl">
      <div className="w-10/12 h-16 bg-brand-bg-light rounded-md shadow-lg mx-auto flex flex-row justify-center items-center px-10">
        <Select
          label="Filter by Type:"
          dataArr={types}
          valueKey="name"
          labelKey="name"
          formatFn={formatString}
          from="categoryFilter"
          value={selectedType}
          onChange={setSelectedType}
        />

        <Select
          label="Filter by Category:"
          dataArr={state.categories}
          valueKey="name"
          labelKey="name"
          formatFn={formatString}
          from="categoryFilter"
          value={selectedCategory}
          onChange={setSelectedCategory}
        />

        <Select
          label="Sort by Date:"
          dataArr={["newest", "oldest"].map((option) => ({ name: option }))}
          valueKey="name"
          labelKey="name"
          formatFn={formatString}
          from="categoryFilter"
          value={sortOrder}
          onChange={setSortOrder}
        />

        <div>
          <Button variant="small" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
