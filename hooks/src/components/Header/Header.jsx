import React from "react";

import icon from "../../assets/icons/envelope-regular.svg";
import user from "../../assets/images/alja-brun.png";
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__message" src={icon} alt="message" />
        <img className="header__img" src={user} alt="user" />
      </div>
    </header>
  );
};
