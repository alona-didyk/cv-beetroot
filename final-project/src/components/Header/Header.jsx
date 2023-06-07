import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./Header.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Header = ({ hideEntryPage }) => {
  const navigate = useNavigate();

  const navigateHandler = (event, to) => {
    event.preventDefault();
    navigate(to);
  };

  const {currentUser} = useContext(AuthContext);
  const AuthRoute = ({children}) => {
    return currentUser ? children : <Navigate to="/login"/>
  }
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
            <div className="header__logo">
            <img className="header__logo--img" src={logo} alt="logo" />
            </div>

          <nav className="header__nav">

            <ul className="header__nav--ul">
              {(
                <li className="header__nav--li">
                  <Link onClick={(event) => navigateHandler(event, "/")}>
                    HomePage
                  </Link>
                </li>
              )}
              {/* <li className="header__nav--li">
                <Link onClick={(event) => navigateHandler(event, "/homepage")}>
                  HomePage
                </Link>
              </li> */}

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
                  {currentUser?.displayName}
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
