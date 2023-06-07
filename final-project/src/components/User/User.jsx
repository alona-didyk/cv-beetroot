import React from "react";
import { Update }from "../Update/Update";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./User.scss";
import { Sidebar } from "../SideBar/SideBar";

export const User = () => {
  return (
    <div className="user">
      <div className="userContainer">
        <Sidebar />
        <Update />
      </div>
    </div>
  );
};
