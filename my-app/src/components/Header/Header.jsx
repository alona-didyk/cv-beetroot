import React from "react";
import "./Header.scss";
import { Items } from "./Items";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__wrapper-logo">Logo</h1>
        <h1 className="header__wrapper-name">Blog</h1>
        <Items></Items>
      </div>
    </header>
  );
};
