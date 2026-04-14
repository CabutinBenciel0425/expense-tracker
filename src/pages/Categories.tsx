import AppLayout from "../components/AppLayout";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import { useUI } from "../hooks/useUI";
import Button from "../ui/Button";

function Categories() {
  const { openModal } = useUI();
  return (
    <AppLayout>
      <Header />
      <div className="h-40 w-full flex items-center justify-end px-40">
        <Button
          variant="big"
          onClick={() => {
            openModal({ modalType: "addCategory" });
          }}
        >
          Add new Category
        </Button>
      </div>
      <CategoryList />
    </AppLayout>
  );
}

export default Categories;
