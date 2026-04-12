import Header from "../components/Header";
import InfoSummary from "../components/InfoSummary";
import TransactionList from "../components/TransactionList";
import AppLayout from "../components/AppLayout";

function Dashboard() {
  return (
    <AppLayout>
      <Header />
      <div className="flex-1 px-20">
        <InfoSummary />
        <div className="w-full h-32 flex flex-row items-center justify-center gap-20">
          <button className="border border-black bg-brand-cta px-8 py-2 text-2xl tracking-wider font-bold cursor-pointer active:scale-97 transition-all duration-300 ease shadow-lg rounded-md hover:bg-brand-cta-hover">
            Add Income
          </button>
          <button className="border border-black bg-brand-cta px-8 py-2 text-2xl tracking-wider font-bold cursor-pointer active:scale-97 transition-all duration-300 ease shadow-lg rounded-md hover:bg-brand-cta-hover">
            Add Expense
          </button>
        </div>
        <div className="border-b border-black w-full"></div>
        <div className="py-5">
          <p className="text-3xl mb-5">Recent Transactions</p>
          <TransactionList />
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
