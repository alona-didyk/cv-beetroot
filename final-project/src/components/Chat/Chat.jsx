import React, { useEffect, useState } from "react";
import "./Chat.scss";
import firstimg from "../../assets/images/discuss-img.jpeg";
import toroid from "../../assets/icons/toroid.svg";
import toroid2 from "../../assets/icons/toroid2.svg";
import user from "../../assets/images/user.jpg";

export const Chat = () => {
  const [apiPosts, setApiPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [visiblePosts, setVisiblePosts] = useState(5);
  const [localPosts, setLocalPosts] = useState([]);

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

  const saveLocalPosts = (posts) => {
    localStorage.setItem("localPosts", JSON.stringify(posts));
  };

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    const createdPost = { ...newPost, id: Date.now() };
    const updatedPosts = [createdPost, ...localPosts];
    setLocalPosts(updatedPosts);
    saveLocalPosts(updatedPosts);
    setNewPost({ title: "", body: "" });
  };
  const handleShowMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  const handleShowLessPosts = () => {
    setVisiblePosts((prevVisiblePosts) => Math.max(prevVisiblePosts - 5, 5));
  };

  return (
    <div className="discuss">
      <div className="discuss__wrapper">
        <section className="hero">
          <div className="hero__wrapper">
            <div className="hero__text-wrapper">
              <h1 className="hero__title">Marvelverse Community Blog</h1>
              <p className="hero__subtitle">
                Join the conversation and share your thoughts!
              </p>
            </div>
            <div className="hero__img-wrapper">
              <div className="toroid">
                <img className="toroid1" src={toroid} alt="toroid" />
                <img className="toroid2" src={toroid2} alt="toroid" />
              </div>
              <div className="hero__img">
                <img src={firstimg} alt="img" />
              </div>
            </div>
          </div>
        </section>

        {/* Add Post Form */}
        <div className="form">
          <div className="form__wrapper">
            <form onSubmit={handleAddPost}>
              <h2 className="form__title">Add Post</h2>

              <p className="form__subtitle">
                Enter the title and body of your post
              </p>

              <div className="discuss__inputs">
                <div>
                  <input
                    className="discuss__input"
                    placeholder="Add title"
                    type="text"
                    name="title"
                    id="title"
                    value={newPost.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <textarea
                    className="discuss__input"
                    placeholder="Share your thoughts"
                    name="body"
                    id="body"
                    value={newPost.body}
                    onChange={handleInputChange}
                  />
                </div>
                <button className="button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="posts">
          <div className="posts__wrapper">
            <h2 className="posts__title">Latest Posts</h2>
            <ul>
              {localPosts.map((post) => (
                <li className="discuss__post" key={post.id}>
                  <div className="discuss__post--info">
                    <div className="posts__inline">
                      <img className="posts__inline--img" src={user} alt="user" />
                      <span className="posts__inline--user">Juliusomo</span>
                      <span className="posts__inline--you">you</span>
                    </div>

                    <h3 className="posts__title-small">{post.title}</h3>
                    <p className="posts__subtitle">{post.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Display API Posts */}

            <ul>
              {apiPosts.slice(0, visiblePosts).map((post) => (
                <li className="discuss__post" key={post.id}>
                  <div className="discuss__post--info">
                  <div className="posts__inline">
                    <img className="posts__inline--img" src={user} alt="user" />
                    <span className="posts__inline--user">UserName</span>
                  
                    </div>
                    <h3 className="posts__title-small">{post.title}</h3>
                    <p className="posts__subtitle">{post.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            {visiblePosts < apiPosts.length ? (
              <div className="discuss__button">
                <button className="button" onClick={handleShowMorePosts}>
                  Show More
                </button>
                {visiblePosts > 5 && (
                  <button className="button" onClick={handleShowLessPosts}>
                    Show Less
                  </button>
                )}
              </div>
            ) : (
              visiblePosts > 5 && (
                <button className="button" onClick={handleShowLessPosts}>
                  Show Less
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
