import hero from "../../assets/images/hero-banner.png";
import Poster1 from "../../assets/images/poster1.jpeg";
import Poster2 from "../../assets/images/poster2.jpeg";
import Poster3 from "../../assets/images/poster3.jpeg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import "./EntryPage.scss";

const POSTER = [Poster1, Poster2, Poster3];

export const EntryPage = () => {
  return (
    <div>
      <section className="hero-banner">
        <div className="hero-banner__wrapper">
          <img className="hero-banner__img" src={hero} alt="hero-banner" />
          <h1 className="hero-banner__title">Marvelverse Community</h1>
        </div>
      </section>
      <div className="background">
        <section className="introduction">
          <div className="introduction__wrapper">
            <h2 className="introduction__title">Welcome to the Platform</h2>
            <p className="introduction__subtitle">
              Welcome to our Marvel-themed platform, <br /> where you can dive
              into the extraordinary world of Marvel superheroes and immerse
              yourself in thrilling adventures. Whether you're a die-hard fan or
              just discovering the Marvel Universe, our platform offers a unique
              and immersive experience that will captivate and entertain you.
              Join us as we celebrate the iconic characters, epic stories, and
              rich history of Marvel through movies, TV shows, comic books, and
              interactive features. Get ready to unleash your inner superhero!
            </p>
          </div>
        </section>
        <section className="description">
          <div className="description__wrapper">
            <div className="description__intro">
              <h2 className="description__title">
                What You Can Find on the Platform
              </h2>
            </div>
            <div className="description__movies">
      <div className="description__content">
        <div className="description__text">
          <h3 className="description__title">Movies and TV shows</h3>
          <p className="description__subtitle">
            Explore an extensive collection of movies and TV shows featuring your favorite Marvel superheroes and villains.
          </p>
          <button>
            <Link to="/movie">Explore More</Link>
          </button>
        </div>
        <div className="description__poster-wrapper">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            effect="fade"
            loop
            autoplay={{ delay: 3000 }}
          >
            {POSTER.map((poster, index) => (
              <SwiperSlide key={index}>
                <img
                  className={`description__poster ${index === 1 ? "middle-poster" : ""}`}
                  src={poster}
                  alt={`Poster ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>

            <div className="description__comic">
              <h3 className="description__title">Comic books</h3>
              <p className="description__subtitle">
                Immerse yourself in thrilling comic book adventures and discover
                new storylines.
              </p>
            </div>
            <div className="description__chat">
              <h3 className="description__title">chat feature</h3>
              <p className="description__subtitle">
                Engage with a vibrant community of fans through our interactive
                chat feature.
              </p>
            </div>
          </div>
        </section>

        <section className="entry-page__buttons">
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
        </section>
      </div>
    </div>
  );
};
