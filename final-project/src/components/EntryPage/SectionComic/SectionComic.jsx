import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Comic1 from "../../../assets/images/comic1.jpeg";
import Comic2 from "../../../assets/images/comic2.jpeg";
import Comic3 from "../../../assets/images/comic3.jpeg";

const POSTER = [Comic1, Comic2, Comic3];

export const SectionComic = () => {
  return (
    <div className="description__movies">
      <div className="description__content">
        <div className="description__title-wrapper left">
          <div className="description__square"></div>
          <h3 className="description__title">Comic books</h3>
        </div>

        <div className="description__inline">
          <div className="description__bt">
            <p className="description__subtitle">
              Immerse yourself in thrilling comic book adventures and discover
              new storylines.
            </p>
            <div className="description__button">
              <button className="button">
                <Link to="/comic">Explore More</Link>
              </button>
            </div>
          </div>

          <div className="description__poster-wrapper">
            {POSTER.map((poster, index) => (
              <img
                key={index}
                className={`description__poster ${
                  index === 1 ? "middle-poster" : ""
                }`}
                src={poster}
                alt={`Poster ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
