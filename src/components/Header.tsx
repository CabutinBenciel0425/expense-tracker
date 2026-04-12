import Logo from "../ui/Logo";
import Navigation from "../ui/Navigation";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between h-20 w-full border border-black px-15 shadow-md">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
