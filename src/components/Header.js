// import "../blocks/header.css";//do we need to import css here or just in app.js
import HeaderLogo from '../images/HeaderLogo.svg'

function Header(){
    return(
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