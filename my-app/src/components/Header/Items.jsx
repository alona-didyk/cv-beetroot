import "./Header.scss";

export const Items = () => {
  return (
    <>
      <ul className="header__nav">
        <li>
          <a href="#header" className="header__nav--item">
            Logo
          </a>
        </li>
        <li>
          <a href="#image" className="header__nav--item">
            Image
          </a>
        </li>
        <li>
          <a href="#blog" className="header__nav--item">
            Blog
          </a>
        </li>
        <li>
          <a href="#news" className="header__nav--item">
            News
          </a>
        </li>
        <li>
          <a href="#contact" className="header__nav--item">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};
