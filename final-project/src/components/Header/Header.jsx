import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.scss";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Header = ({ hideEntryPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();

  const headerRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const navigateHandler = (event, to) => {
  //   event.preventDefault();
  //   navigate(to);
  // };

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <header ref={headerRef} className={`header ${menuOpen ? "open" : ""}`}>
        <div className="header__wrapper">
          <div className="header__subwrapper">
            <button
              ref={burgerButtonRef}
              className="header__burger-button"
              id="burger-button"
              onClick={toggleMenu}
            >
              <span className="header__burger-button-line"></span>
              <span className="header__burger-button-line"></span>
              <span className="header__burger-button-line"></span>
            </button>
            <img className="header__logo" src={logo} alt="logo" />
          </div>
          <div className="header__container">
            <ul className="header__nav">
              <li>
                <Link
                  to="/"
                  className="header__nav--item"
                  onClick={() => setMenuOpen(false)}
                >
                  HomePage
                </Link>
              </li>
              <li>
                <Link
                  to="/movie"
                  className="header__nav--item"
                  onClick={() => setMenuOpen(false)}
                >
                  Movie
                </Link>
              </li>
              <li>
                <Link
                  to="/comic"
                  className="header__nav--item"
                  onClick={() => setMenuOpen(false)}
                >
                  Comic
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="header__nav--item"
                  onClick={() => setMenuOpen(false)}
                >
                  Community
                </Link>
              </li>
            </ul>
            <div className="header__buttons">
              <li>
                <Link
                  to="/login"
                  className="button"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/regist"
                  className="button "
                  onClick={() => setMenuOpen(false)}
                >
                  Regist
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  className="account"
                  onClick={() => setMenuOpen(false)}
                >
                  {<p> Account:{currentUser?.displayName}</p>}
                </Link>
              </li>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};
