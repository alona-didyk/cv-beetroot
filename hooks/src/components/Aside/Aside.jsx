import React, { useState } from "react";
import "./Aside.scss";
import Home from "../../assets/icons/house.svg";
import Deposits from "../../assets/icons/deposits.svg";
import Offers from "../../assets/icons/offers.svg";
import Payments from "../../assets/icons/payment.svg";
import Settings from "../../assets/icons/settings.svg";
import user from "../../assets/images/alja-brun.png";
import off from "../../assets/icons/off.svg";
import on from "../../assets/icons/on.svg";

const icons = [Home, Deposits, Offers, Payments, Settings];

function ListItem(props) {
  return (
    <li className="section__item">
      <img className="section__icon" src={props.icon} alt="icon" />
      {props.value}
    </li>
  );
}

export const Aside = (props) => {
  const items = props.items;
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const listItems = items.map((sectionListItem, index) => (
    <ListItem
      key={sectionListItem}
      value={sectionListItem}
      icon={icons[index]}
    />
  ));

  return (
    <section className={`section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="section__wrapper">
        <div className="section__users">
          <img src={user} alt="user" className="section__image" />
          <h1 className="section__title">Scott Grant</h1>
        </div>
        <ul className="section__nav">{listItems}</ul>
        <button className="section__button" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <img className="section__button--off" src={off} alt="off" />
          ) : (
            <img className="section__button--on" src={on} alt="on" />
          )}
        </button>
      </div>
    </section>
  );
};
