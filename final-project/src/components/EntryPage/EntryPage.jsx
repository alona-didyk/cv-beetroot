import { Link } from "react-router-dom";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./EntryPage.scss";
import { Banner } from "./Banner/Banner";
import { About } from "./About/About";
import { Information } from "./Information/Information";
import { Work } from "./Work/Work";

export const EntryPage = () => {
  return (
    <>
    <div className="black">
      <Banner></Banner>
      <About></About>
      <Information></Information>


      {/* <section className="description">
        <div className="description__wrapper">
          <div className="description__intro">
            <h2 className="description__title">
            About Us
            </h2>
            <h3>WHAT IS Marvelverse Community?</h3>
            <p>Whether you're a die-hard fan or
            just discovering the Marvel Universe, our platform offers a unique
            and immersive experience that will captivate and entertain you. Join
            us as we celebrate the iconic characters, epic stories, and rich
            history of Marvel through movies, TV shows, comic books, and
            interactive features. Get ready to unleash your inner superhero!</p>
          </div>
          <div className="background">
            <SectionSeries />
            <SectionComic />
          </div> */}

      {/* <div className="description__comic">
              <h3 className="description__title">Comic books</h3>
              <p className="description__subtitle">
                Immerse yourself in thrilling comic book adventures and discover
                new storylines.
              </p>
            </div> */}
      {/* <div className="description__chat">
            <h3 className="description__title">chat feature</h3>
            <p className="description__subtitle">
              Engage with a vibrant community of fans through our interactive
              chat feature.
            </p>
          </div>
        </div>
      </section> */}

<Work></Work>
    </div>
          
          {/* <section className="entry-page__buttons">
        <div className="buttons__wrapper">
          <button className="buttons">
            <Link to="/signup" className="button">
              Sign Up
            </Link>
          </button>
          <button>
            <Link to="/login" className="button">
              Log In
            </Link>
          </button>
        </div>
      </section> */}

      
          </>
  );
};
