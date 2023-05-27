import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Blog.scss";
import { BlogItem } from "./BlogItems";

export const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => setBlogData(data));

    axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
      setBlogData(res.data)
    );
  }, []);

  return (
    <>
      <div className="blog">
        <h1 className="blog__name">Blog</h1>
        {blogData.map((item) => (
          <BlogItem key={item.id} {...item}></BlogItem>
        ))}
      </div>
    </>
  );
};
