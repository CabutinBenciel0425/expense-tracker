import Header from "../components/Header";
import InfoSummary from "../components/InfoSummary";
import TransactionList from "../components/TransactionList";
import AppLayout from "../components/AppLayout";
import Button from "../ui/Button";

function Dashboard() {
  return (
    <AppLayout>
      <Header />
      <div className="flex-1 px-20">
        <InfoSummary />
        <div className="w-full h-32 flex flex-row items-center justify-center gap-20">
          <Button variant="big">Add New Transaction</Button>
          <Button variant="big">Add New Category</Button>
        </div>
        <div className="border-b border-black w-full"></div>
        <div className="py-5">
          <p className="text-3xl mb-15">Recent Transactions</p>
          <TransactionList transactionListLength={5} />
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
