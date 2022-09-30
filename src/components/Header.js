import logoPath from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logoPath} alt="Логотип Mesto" className="header__logo" />
    </header>
  );
}
