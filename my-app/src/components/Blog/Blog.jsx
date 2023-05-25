import "./Blog.scss";

export const Blog = (props) => {
  return (
    <>
      <div className="blog">
        <h1 className="blog__name">Blog</h1>
        <div className="blog__parts">
          <span className="blog__parts-item"></span>
          <span className="blog__parts-item"></span>
          <span className="blog__parts-item"></span>
          <span className="blog__parts-item"></span>
        </div>
      </div>
    </>
  );
};
