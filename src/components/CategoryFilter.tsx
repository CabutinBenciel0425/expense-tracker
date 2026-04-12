import { useApp } from "../hooks/useApp";

function CategoryFilter() {
  const { state, formatString } = useApp();
  const types = [...new Set(state.transactions.map((tr) => tr.type))];

  return (
    <div className="w-full py-10 text-2xl">
      <div className="w-8/12 h-16 bg-brand-bg-light rounded-md shadow-lg mx-auto flex flex-row justify-center items-center gap-35">
        <div className="flex gap-10">
          <label>Filter by Type: </label>
          <select className="bg-brand-bg">
            <option value="all">All</option>
            {types.map((tr) => (
              <option key={tr} value={tr}>
                {formatString(tr)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-10">
          <label>Filter by Type: </label>
          <select className="bg-brand-bg">
            <option value="all">All</option>
            {state.categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {formatString(cat.name)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-10">
          <label>Sort by Date: </label>
          <select className="bg-brand-bg">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
