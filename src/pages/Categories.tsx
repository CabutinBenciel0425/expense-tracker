import AppLayout from "../components/AppLayout";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";

function Categories() {
  return (
    <AppLayout>
      <Header />
      <div className="h-40 w-full flex items-center justify-end px-20">
        <button className="border border-black bg-brand-cta px-14 py-2 text-2xl tracking-wider font-bold cursor-pointer active:scale-97 transition-all duration-300 ease shadow-lg rounded-md hover:bg-brand-cta-hover">
          Add new Category
        </button>
      </div>
      <CategoryList />
    </AppLayout>
  );
}

export default Categories;
