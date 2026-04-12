import { useApp } from "./hooks/useApp";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import "./styles.css";

export default function App() {
  const { currentTab } = useApp();

  return (
    <div>
      {currentTab === "dashboard" && <Dashboard />}
      {currentTab === "transactions" && <Transaction />}
      {currentTab === "categories" && <Categories />}
    </div>
  );
}
