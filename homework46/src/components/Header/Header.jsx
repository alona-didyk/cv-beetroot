import React from "react";
import "./Header.scss";
import threeLines from "../assets/icons/header__icon.svg";
import refresh from "../assets/icons/refresh.svg";
import user from "../assets/icons/user.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__icon" src={threeLines} alt="icon" />
        <h1 className="header__title">~Posters Galore~</h1>
        <div className="header__icon-wrapper">
          <img className="header__icon" src={refresh} alt="refreshIcon" />
          <img className="header__icon" src={user} alt="userIcon" />
        </div>
      </div>
    </header>
  );
};
