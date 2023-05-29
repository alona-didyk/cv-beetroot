import React, { useState } from "react";
import FirsImg from "../assets/images/alice.png";
import SecondImg from "../assets/images/alja-brun.png";
import ThirdImg from "../assets/images/dominic.png";
import FirstUser from "../assets/images/user-1.png";
import SecondUser from "../assets/images/user-2.jpeg";
import ThirdUser from "../assets/images/user-3.jpeg";
import ForthUser from "../assets/images/user-4.jpeg";

export const Users = () => {
  const users = [
    FirsImg,
    SecondImg,
    ThirdImg,
    FirstUser,
    SecondUser,
    ThirdUser,
    ForthUser,
  ];
  const NICKNAMES = [
    "Cedric Kirin",
    "Alessandra Simonis",
    "Lemps Gorczany",
    "Loma Quigley",
    "Donell Nienow",
    "Ross Lockman",
  ];

  function NewUser(props) {
    const { image, text } = props;

    return (
      <div className="user__item">
        <img className="user__img" src={image} alt="user" />
        <p className="user__text">{text}</p>
      </div>
    );
  }

  const [text] = useState(NICKNAMES);

  return (
    <div className="user">
      <div className="user__wrapper">
        {text.map((data, index) => (
          <NewUser key={index} image={users[index]} text={data}></NewUser>
        ))}
      </div>
    </div>
  );
};
