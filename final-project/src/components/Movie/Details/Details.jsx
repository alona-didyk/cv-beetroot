// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export const MoviesDetails = () => {
//     const publicKey = "c3f632bec30eb93b2dd9e59bf1f57195";
//     const privateKey = "3cf625245a2565f7a938cb534b8b791db6a31ba8";
//   const { id } = useParams();
//   const [series, setSeries] = useState(null);

//   useEffect(() => {
//     const fetchSeriesDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://gateway.marvel.com/v1/public/series/${id}?apikey=${publicKey}`
//         );
//         setSeries(response.data.data.results[0]);
//       } catch (error) {
//         console.error('Error fetching series details:', error);
//       }
//     };

//     fetchSeriesDetails();
//   }, [id]);

//   if (!series) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>{series.title}</h2>
//       <p>Start Year: {series.startYear}</p>
//       <p>Description: {series.description}</p>
//       {/* Add more details and components as needed */}
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from "md5";
import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const publicKey = 'c3f632bec30eb93b2dd9e59bf1f57195';
  const privateKey = '3cf625245a2565f7a938cb534b8b791db6a31ba8';
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeriesDetails = async () => {
      try {
        const timestamp = Date.now().toString();
        const hash = md5(timestamp + privateKey + publicKey);

        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/series/${id}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
        );
        setSeries(response.data.data.results[0]);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSeriesDetails();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!series) {
    return <p>Loading...</p>;
  }

  return (
    <div className="SeriesDetails">
      <h2>{series.title}</h2>
      <p>Description: {series.description}</p>
      {/* Add more details and components as needed */}
    </div>
  );
};








