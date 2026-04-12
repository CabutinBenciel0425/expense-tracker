function Navigation() {
  return (
    <div>
      <ul className="flex flex-row items-center justify-center gap-8 text-2xl">
        <li className="cursor-pointer">
          <div>Dashboard</div>
        </li>
        <li className="cursor-pointer">
          <div>Transactions</div>
        </li>
        <li className="cursor-pointer">
          <div>Categories</div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
