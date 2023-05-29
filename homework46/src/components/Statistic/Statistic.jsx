import React, { useState } from "react";
import DollarIcon from "../assets/icons/dollar.svg";
import ShoppingCartIcon from "../assets/icons/shopping-cart.svg";
import NewCustomerIcon from "../assets/icons/newcustomer.svg";
import ReviewIcon from "../assets/icons/review.svg";

const icons = [DollarIcon, ShoppingCartIcon, ReviewIcon, NewCustomerIcon];

const INFO = [
  {
    title: "Monthly Revenue",
    subtitle: "1 385 USD",
  },
  {
    title: "New Orders",
    subtitle: 12,
  },
  {
    title: "Pending Reviews",
    subtitle: 3,
  },
  {
    title: "New Customers",
    subtitle: 9,
  },
];

function NewStatistic(props) {
  const { title, subtitle, icon } = props;
  return (
    <div className="statistic__item">
      <div className="statistic__logo">
        <img className="statistic__icon" src={icon} alt="icon" />
      </div>
      <div className="statistic__info">
        <h3 className="statistic__title" title={title}>
          {title}
        </h3>
        <h4 className="statistic__subtitle">{subtitle}</h4>
      </div>
    </div>
  );
}

export const Statistic = () => {
  const [info] = useState(INFO);
  return (
    <div className="statistic">
      <div className="statistic__items">
        {info.map((data, index) => (
          <NewStatistic
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            icon={icons[index]}
          ></NewStatistic>
        ))}
      </div>
    </div>
  );
};
