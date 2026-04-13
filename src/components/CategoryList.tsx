import { useApp } from "../hooks/useApp";
import List from "./List";

function CategoryList() {
  const { state } = useApp();
  console.log(state.categories);
  const headerTitles = ["Category", "Type", ""];

  return (
    <List
      transactionListLength={state.categories.length}
      headerTitles={headerTitles}
      dataArr={state.categories}
      from="categoryList"
    />
  );
}

export default CategoryList;
