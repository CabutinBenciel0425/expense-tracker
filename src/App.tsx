import { useApp } from "./hooks/useApp";
import "./styles.css";

export default function App() {
  const { state } = useApp();
  console.log(state);
  return (
    <div>
      <h1>Simple Expense tracker built with React-Typescript</h1>
    </div>
  );
}
