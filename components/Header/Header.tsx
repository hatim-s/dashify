import Logo from "./components/Logo";
import UserInfo from "./components/UserInfo";

export default function Header() {
  return (
    <header className="w-full h-16 bg-secondary-foreground px-5 flex flex-row justify-between items-center">
      <Logo />
      <UserInfo />
    </header>
  );
}
