import React from "react";
import "./Main.scss";
import { Aside } from "../Aside/Aside";
import { Statistic } from "../Statistic/Statistic";
import { News } from "../News/News";
import { Comments } from "../Comments/Comments";
import { Users } from "../Users/Users";

// import { Feedback, News, Users } from "../Users/Users";

const items = ["Dashboard", "Sales", "Catalog", "Customers", "Review"];

export const Main = () => {
  return (
    <main className="main">
      <div className="main__wrapper">
        <Aside items={items} />
        <section className="new__info">
          <Statistic></Statistic>
          <div className="users">
            <News></News>
            <Comments></Comments>
            <Users></Users>
          </div>
        </section>
      </div>
    </main>
  );
};
