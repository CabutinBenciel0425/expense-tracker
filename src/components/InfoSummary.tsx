import { useApp } from "../hooks/useApp";
import Summary from "../ui/Summary";

function InfoSummary() {
  const { totalBalance, totalExpense, totalIncome } = useApp();

  const infoSummaryData = [
    { title: "Total Balance", amount: totalBalance, category: "balance" },
    { title: "Total Income", amount: totalIncome, category: "income" },
    { title: "Total Expenses", amount: totalExpense, category: "expense" },
  ];

  return (
    <div className="flex flex-row items-center justify-evenly my-10 ">
      {infoSummaryData.map((data) => (
        <Summary
          key={data.title}
          title={data.title}
          amount={data.amount}
          category={data.category}
        />
      ))}
    </div>
  );
}

export default InfoSummary;
