import React, { useState, useEffect } from "react";
import "./MovieRow.css";
import axios from "../../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import requests from "../../requests";
const BASE_URL = "https://image.tmdb.org/t/p/original";
function Row({ title, isLarge, isWatching, movies }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const trimList = () => {
    if (isWatching) movies = movies.slice(2, 7);
  };
  trimList();
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const name = movie?.title || movie?.name || movie?.original_name;
      console.log("Here ");
      movieTrailer(name || "ironman")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).searchParams);

          setTrailerUrl(urlParam.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  return (
    <div className='movies-container'>
      <h2>{title}</h2>
      <div className='movies-row'>
        {movies.map((movie) => {
          return (
            <>
              <img
                style={{ cursor: "pointer" }}
                key={movie.id}
                onClick={() => handleClick()}
                className={`movie-poster ${isLarge && "movie-poster-large"}`}
                src={
                  isLarge
                    ? BASE_URL + movie.poster_path
                    : BASE_URL + movie.backdrop_path
                }
                alt={movie.name}
              />
            </>
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
