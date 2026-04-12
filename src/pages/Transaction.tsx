import AppLayout from "../components/AppLayout";
import CategoryFilter from "../components/CategoryFilter";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";

function Transaction() {
  return (
    <AppLayout>
      <Header />
      <CategoryFilter />
      <TransactionList />
    </AppLayout>
  );
}

export default Transaction;
