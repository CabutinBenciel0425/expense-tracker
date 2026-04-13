import AppLayout from "../components/AppLayout";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import Button from "../ui/Button";

function Categories() {
  return (
    <AppLayout>
      <Header />
      <div className="h-40 w-full flex items-center justify-end px-20">
        <Button variant="big">Add new Category</Button>
      </div>
      <CategoryList />
    </AppLayout>
  );
}

export default Categories;
