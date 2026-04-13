import { useApp } from "../hooks/useApp";
import Button from "../ui/Button";
import Select from "../ui/Select";

function CategoryFilter() {
  const { state, formatString } = useApp();
  const types = [...new Set(state.transactions.map((tr) => tr.type))].map(
    (type) => ({ name: type }),
  );

  return (
    <div className="w-full mb-10 text-2xl">
      <div className="w-10/12 h-16 bg-brand-bg-light rounded-md shadow-lg mx-auto flex flex-row justify-center items-center gap-35">
        <Select
          label="Filter by Type:"
          dataArr={types}
          valueKey="name"
          labelKey="name"
          formatFn={formatString}
        />

        <Select
          label="Filter by Category:"
          dataArr={state.categories}
          valueKey="name"
          labelKey="name"
          formatFn={formatString}
        />

        <Select
          label="Sort by Date:"
          dataArr={["Newest", "Oldest"].map((option) => ({ name: option }))}
          valueKey="name"
          labelKey="name"
          formatFn={formatString}
        />

        <div>
          <Button variant="small">Reset</Button>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
