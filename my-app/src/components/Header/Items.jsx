import "./Header.scss";

export const Items = () => {
  return (
    <>
      <ul class="header__nav">
        <li>
          <a href="#header" class="header__nav--item">
            Logo
          </a>
        </li>
        <li>
          <a href="#image" class="header__nav--item">
            Image
          </a>
        </li>
        <li>
          <a href="#blog" class="header__nav--item">
            Blog
          </a>
        </li>
        <li>
          <a href="#news" class="header__nav--item">
            News
          </a>
        </li>
        <li>
          <a href="#contact" class="header__nav--item">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};
