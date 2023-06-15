import React, { useEffect, useState } from "react";


export const ApiPosts = () => {
  const [localPosts, setLocalPosts] = useState([]);
  const [apiPosts, setApiPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    fetchApiPosts();
    loadLocalPosts();
  }, []);

  const fetchApiPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      setApiPosts(data.posts);
    } catch (error) {
      console.error("Error fetching API posts:", error);
    }
  };

  const loadLocalPosts = () => {
    const savedPosts = localStorage.getItem("localPosts");
    if (savedPosts) {
      setLocalPosts(JSON.parse(savedPosts));
    }
  };
  return (
    <div className="discuss__post--wrapper">
    <ul>
      {apiPosts.map((post) => (
        <li className="discuss__post" key={post.id}>
          <div className="discuss__post--info">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}
