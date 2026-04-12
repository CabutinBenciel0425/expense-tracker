import { TfiWallet } from "react-icons/tfi";

function Logo() {
  return (
    <div className="text-3xl font-extrabold flex flex-row gap-3">
      <TfiWallet className="text-5xl" />
      <span className="mt-3">Expense Tracker</span>
    </div>
  );
}

export default Logo;
