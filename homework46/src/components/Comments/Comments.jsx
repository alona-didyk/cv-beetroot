import React, { useState } from "react";
import FirsImg from "../assets/images/alice.png";
import SecondImg from "../assets/images/alja-brun.png";
import ThirdImg from "../assets/images/dominic.png";

export const Comments = () => {
  const img = [FirsImg, SecondImg, ThirdImg];
  const TEXT = [
    "* Lorem ipsum dolor sit amet, consectetur adipiscing ...",
    "* Duis aute irure dolor in reprehenderit in voluptate...",
    "* Excepteur sint occaecat cupidatat non proident, sunt...",
  ];

  function NewComment(props) {
    const { text, image } = props;
    return (
      <div className="comments__part">
        <img className="comments__image" src={image} alt="user" />
        <p className="comments__text">{text}</p>
      </div>
    );
  }
  const [text] = useState(TEXT);
  return (
    <div className="comments">
      <div className="comments__wrapper">
        {text.map((data, index) => (
          <NewComment key={index} image={img[index]} text={data}></NewComment>
        ))}
      </div>
    </div>
  );
};
