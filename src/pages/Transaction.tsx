import AppLayout from "../components/AppLayout";
import CategoryFilter from "../components/CategoryFilter";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import { useApp } from "../hooks/useApp";

function Transaction() {
  const { state } = useApp();

  return (
    <AppLayout>
      <Header />
      <CategoryFilter />
      <div className="h-40 w-full flex items-center justify-end px-40">
        <button className="border border-black bg-brand-cta px-14 py-2 text-2xl tracking-wider font-bold cursor-pointer active:scale-97 transition-all duration-300 ease shadow-lg rounded-md hover:bg-brand-cta-hover">
          Add new Transaction
        </button>
      </div>
      <TransactionList transactionListLength={state.transactions.length} />
    </AppLayout>
  );
}

export default Transaction;
