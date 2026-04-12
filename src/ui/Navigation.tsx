import { useApp } from "../hooks/useApp";

function Navigation() {
  const { setCurrentTab } = useApp();
  return (
    <div>
      <ul className="flex flex-row items-center justify-center gap-8 text-2xl">
        <li className="cursor-pointer">
          <div onClick={() => setCurrentTab("dashboard")}>Dashboard</div>
        </li>
        <li className="cursor-pointer">
          <div onClick={() => setCurrentTab("transactions")}>Transactions</div>
        </li>
        <li className="cursor-pointer">
          <div onClick={() => setCurrentTab("categories")}>Categories</div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
