import AppLayout from "../components/AppLayout";
import CategoryFilter from "../components/CategoryFilter";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import { useApp } from "../hooks/useApp";
import { useUI } from "../hooks/useUI";
import Button from "../ui/Button";

function Transaction() {
  const { state } = useApp();
  const { openModal } = useUI();

  return (
    <AppLayout>
      <Header />
      <div className="h-fit">
        <div className="w-full flex items-center justify-end px-40 py-10">
          <Button
            variant="big"
            onClick={() => {
              openModal({ modalType: "addTransaction" });
            }}
          >
            Add new Transaction
          </Button>
        </div>
        <CategoryFilter />

        <TransactionList transactionListLength={state.transactions.length} />
      </div>
    </AppLayout>
  );
}

export default Transaction;
