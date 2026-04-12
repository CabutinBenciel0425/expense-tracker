import { formatCurrency } from "../utils/helpers";

function Summary({
  title,
  amount,
  category,
}: {
  title: string;
  amount: number;
  category: string;
}) {
  let color;

  if (category === "balance") color = "text-brand-text";
  if (category === "income") color = "text-brand-income";
  if (category === "expense") color = "text-brand-expense";
  return (
    <div className="w-2xs h-40 shadow-lg flex flex-col items-center justify-evenly rounded-md bg-brand-bg-light">
      <p className="text-3xl font-bold">{title}</p>
      <p className={`${color} text-4xl font-bold`}>{formatCurrency(amount)}</p>
    </div>
  );
}

export default Summary;
