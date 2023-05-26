import "./Blog.scss";
import { BlogItem } from "./BlogItems";

export const Blog = () => {
  return (
    <>
      <div className="blog">
        <h1 className="blog__name">Blog</h1>
        <BlogItem></BlogItem>
      </div>
    </>
  );
};
