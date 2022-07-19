import headerlogo from "../images/headerlogo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerlogo}
        alt="Graphic Around the World in the US"
      />
    </header>
  );
}

export default Header;
