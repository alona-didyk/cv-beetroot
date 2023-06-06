import { Link } from "react-router-dom";

import firstimg from "../../../assets/images/firstimg.jpeg";
import toroid from "../../../assets/icons/toroid.svg";
import toroid2 from "../../../assets/icons/toroid2.svg";

export const Banner = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__text-wrapper">
          <h1 className="hero__title">Marvelverse Community</h1>
          <p className="hero__subtitle">
            Entering into Marvelverse Community. Dive
            into the extraordinary world of Marvel superheroes and immerse
            yourself in thrilling adventures..
          </p>
          <Link className="button" to="/regist">Join Us Now</Link>
       
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
      {/* <div className="hero-banner__wrapper">
        <img className="hero-banner__img" src={hero} alt="hero-banner" />
        <div className="hero-banner__desc">
          <h1 className="hero-banner__title">Marvelverse Community</h1>
          <p className="hero-banner__subtitle">
            Welcome to our Marvel-themed platform, <br /> where you can dive
            into the extraordinary world of Marvel superheroes and immerse
            yourself in thrilling adventures. Whether you're a die-hard fan or
            just discovering the Marvel Universe, our platform offers a unique
            and immersive experience that will captivate and entertain you. Join
            us as we celebrate the iconic characters, epic stories, and rich
            history of Marvel through movies, TV shows, comic books, and
            interactive features. Get ready to unleash your inner superhero!
          </p>
        </div>
      </div> */}
    </section>
  );
};
