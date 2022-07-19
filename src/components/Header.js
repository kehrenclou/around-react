import HeaderLogo from "../images/HeaderLogo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={HeaderLogo}
        alt="Graphic Around the World in the US"
      />
    </header>
  );
}

export default Header;
