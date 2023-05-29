import React from "react";
import CeoImg from "../assets/images/seo.jpeg";

export const News = () => {
  return (
    <div className="news">
      <img className="news__img" src={CeoImg} alt="ceo" />
      <div className="news__text-wrapper">
        <h2 className="news__title">Welcome to react-admin demo</h2>
        <p className="news__text">
          {" "}
          This is admin of an imaginary poster shop. Feel free to explore and
          modify the data - it's local to your computer, and will reset each
          time you reload.
        </p>
      </div>
    </div>
  );
};
