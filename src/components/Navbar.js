import { Link } from "react-router-dom";
import logo from "../logo_cockaildb.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">home</Link>
          <Link to="/fav">favoris</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
