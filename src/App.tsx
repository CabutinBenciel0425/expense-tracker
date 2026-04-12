import { useApp } from "./hooks/useApp";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import "./styles.css";

export default function App() {
  const { state, currentTab } = useApp();

  console.log(state);
  return (
    <div>
      {currentTab === "dashboard" && <Dashboard />}
      {currentTab === "transactions" && <Transaction />}
      {currentTab === "categories" && <Categories />}
    </div>
  );
}
