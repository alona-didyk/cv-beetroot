import "./News.scss";
import { NewsItem } from "./NewsItem";

export const News = () => {
  return (
    <div className="news">
      <h1 className="news__name">News</h1>
      <NewsItem></NewsItem>
    </div>
  );
};
