import { Link } from "react-router-dom";

import logo from "../../image/pokedex-logo.png";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <nav className="nav_container">
        <Link to={"/"}>
          <img src={logo} alt="Pokedex" />
        </Link>

        <div className="nav_link">
          <Link to="/">Home</Link>
          <Link to="/homepage">Pokémon</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
