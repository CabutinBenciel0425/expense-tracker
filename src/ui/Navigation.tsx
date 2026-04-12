import { useApp } from "../hooks/useApp";

function Navigation() {
  const { setCurrentTab, currentTab } = useApp();

  const navLinks = ["dashboard", "transactions", "categories"];
  return (
    <div>
      <ul className="flex flex-row items-center justify-center gap-8 text-2xl">
        {navLinks.map((nav) => (
          <li
            className={`cursor-pointer border-b-4  ${nav === currentTab ? "border-brand-text" : "border-transparent"} py-2`}
            key={nav}
          >
            <div onClick={() => setCurrentTab(nav)}>
              {nav.split("").at(0)?.toUpperCase() + nav.slice(1)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
