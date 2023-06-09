// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import md5 from "md5";
// import { Carousel } from "react-responsive-carousel";
// import { Link } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Poster1 from "../../../assets/images/poster1.jpeg";
// import Poster2 from "../../../assets/images/poster2.jpeg";
// import Poster3 from "../../../assets/images/poster3.jpeg";

// const POSTER = [Poster1, Poster2, Poster3];

// export const SectionSeries = () => {
  //   const [series, setSeries] = useState([]);

  //   useEffect(() => {
  //     const fetchSeries = async () => {
  //       try {
  //         const publicKey = "c3f632bec30eb93b2dd9e59bf1f57195";
  //         const privateKey = "3cf625245a2565f7a938cb534b8b791db6a31ba8";
  //         const timestamp = Date.now();
  //         const hash = md5(`${timestamp}${privateKey}${publicKey}`);

  //         const response = await axios.get(
  //           `https://gateway.marvel.com/v1/public/series?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  //         );
  //         setSeries(response.data.data.results);
  //       } catch (error) {
  //         console.log("Error retrieving series:", error);
  //       }
  //     };

  //     fetchSeries();
  //   }, []);

//   return (
// <div className="description__movies">
//   <div className="description__content">
//     <div className="description__title-wrapper">
//       <div className="description__square"></div>
//       <h3 className="description__title">Movies and TV shows</h3>
//     </div>
//     <div className="description__inline">
//     <div className="description__bt">
//       <p className="description__subtitle">
//         Explore an extensive collection of movies and TV shows featuring your favorite Marvel superheroes and villains.
//       </p>
//       <div className="description__button">
//       <button className="button">
//         <Link className="button" to="/movies">Explore More</Link>
//       </button>
//     </div>
//       </div>
//       <div className="description__poster-wrapper">
//         {POSTER.map((poster, index) => (
//           <img
//             key={index}
//             className={`description__poster ${index === 1 ? "middle-poster" : ""}`}
//             src={poster}
//             alt={`Poster ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// </div>

    // <div className="description">
    //   <div className="description__wrapper">
    //     <div className="description__movies">
    //       <div className="description__left">
    //         <h3 className="description__title">Marvel Series</h3>
    //         <p className="description__subtitle">
    //           Explore the exciting Marvel series collection
    //         </p>
    //       </div>
    //       <div className="description__right">
    //         <img src={Poster1} alt="poster" />
    //       </div>
    //     </div>
    //     <div className="description__movies">
    //       <Carousel
    //         showThumbs={false}
    //         showStatus={false}
    //         infiniteLoop
    //         autoPlay
    //         interval={3000}
    //         className="description__content"
    //         centerMode
    //         centerSlidePercentage={33.33}
    //       >
    //         {series.map((serie) => (
    //           <div key={serie.id} className="description__text">
    //             <div className="description__poster-wrapper">
    //               <img
    //                 src={`${serie.thumbnail.path}/portrait_uncanny.${serie.thumbnail.extension}`}
    //                 alt={serie.title}
    //                 className="description__poster middle-poster"
    //               />
    //             </div>
    //             <div className="description__info">
    //               <h4 className="description__serie-title">{serie.title}</h4>
    //             </div>
    //           </div>
    //         ))}
    //       </Carousel>
    //     </div>
    //   </div>
    // </div>
//   );
// };
