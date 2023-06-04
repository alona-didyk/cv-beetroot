import { Outlet, Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./Header.scss";

export const Header = ({ hideEntryPage }) => {
  const navigate = useNavigate();

  const navigateHandler = (event, to) => {
    event.preventDefault();
    navigate(to);
  };
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
            <div className="header__logo">
            <img className="header__logo--img" src={logo} alt="logo" />
            </div>

          <nav className="header__nav">

            <ul className="header__nav--ul">
              {!hideEntryPage && (
                <li className="header__nav--li">
                  <Link onClick={(event) => navigateHandler(event, "/")}>
                    EntryPage
                  </Link>
                </li>
              )}
              <li className="header__nav--li">
                <Link onClick={(event) => navigateHandler(event, "/homepage")}>
                  HomePage
                </Link>
              </li>

              <li className="header__nav--li">
                <Link onClick={(event) => navigateHandler(event, "/movie")}>
                  Movie
                </Link>
              </li>
              <li className="header__nav--li">
                <Link onClick={(event) => navigateHandler(event, "/comic")}>
                  Comic
                </Link>
              </li>
              <li className="header__nav--li">
                <Link onClick={(event) => navigateHandler(event, "/login")}>
                  Login
                </Link>
              </li>
              <li className="header__nav--li">
                <Link onClick={(event) => navigateHandler(event, "/regist")}>
                  Regist
                </Link>
              </li>
              <li className="header__nav--li">
                <Link onClick={(event) => navigateHandler(event, "/chat")}>
                  Chat
                </Link>
              </li>
              <li className="header__nav--li">
                <Link onClick={(event) => navigateHandler(event, "/user")}>
                  User
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
};
