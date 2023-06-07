import React, { useContext } from "react";
import "./MenuLink.scss";
import { AuthContext } from "./../../context/AuthContext";

export const MenuLink = ({ icon, text }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {" "}
        {text === "Logout" && `( ${currentUser.displayName} )`}
      </span>
    </div>
  );
};

