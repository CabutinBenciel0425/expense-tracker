import { useApp } from "./hooks/useApp";
import Dashboard from "./pages/Dashboard";
import "./styles.css";

export default function App() {
  const { state } = useApp();
  console.log(state);
  return (
    <div>
      <Dashboard />
    </div>
  );
}
