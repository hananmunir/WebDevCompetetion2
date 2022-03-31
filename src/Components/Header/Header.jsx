import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "../../axios";
import requests from "../../requests";

function Header() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      const rndMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];

      setMovie(rndMovie);
      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className='header'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className='header-contents'>
        <h1 className='header-title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className='header-description'>{truncate(movie?.overview, 200)}</h1>
        <div className='header-buttons'>
          <button className='header-button'>Play</button>
          <button className='header-button'>More Info</button>
        </div>
      </div>
      <div className='bottom-fade'></div>
    </header>
  );
}

export default Header;
