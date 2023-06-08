import React, { useState } from "react";
import axios from "axios";
import md5 from "md5";


export const Comic = () => {
  const publicKey = 'c3f632bec30eb93b2dd9e59bf1f57195';
  const privateKey = '3cf625245a2565f7a938cb534b8b791db6a31ba8';
  const timestamp = Date.now().toString();
  const hash = md5(timestamp + privateKey + publicKey);

  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      alert("Please write the name of a movie");
      return;
    }
    searchMarvelMovies(inputValue.trim());
  };

  const searchMarvelMovies = (input) => {
    axios
      .get(`https://gateway.marvel.com/v1/public/comics?title=${encodeURIComponent(input)}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`)
      .then((response) => {
        const data = response.data;
        if (data && data.data && data.data.results && data.data.results.length > 0) {
          setMovies(data.data.results);
          setError(null);
        } else {
          setMovies([]);
          setError('No Marvel movies found.');
        }
      })
      .catch((error) => {
        console.error('Error', error);
        setMovies([]);
        setError('An error occurred while fetching Marvel movies.');
      });
  };

  return (
    <main>
      <form className="type-form" onSubmit={handleSubmit}>
        <label htmlFor="type-input">Movie Title</label>
        <input
          type="text"
          className="type-input"
          name="type-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="type-button">
          Search
        </button>
      </form>
      <div className="type-results">
        {error ? (
          <p>{error}</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie movieDetails">
              <img src={`${movie.thumbnail.path}.${movie.thumbnail.extension}`} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.startYear}</p>
                {/* Display other movie details as needed */}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};