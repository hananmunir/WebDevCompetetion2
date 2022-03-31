import React, { useState, useEffect } from "react";
import MovieRow from "../MovieRow/MovieRow";
import axios from "../../axios";
import requests from "../../requests";
import "./Row.css";
export default function Row() {
  const [trending, setTrending] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romantic, setRomantic] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestTrending = await axios.get(requests.fetchTrending);
      setTrending(requestTrending.data.results);

      const requestComedy = await axios.get(requests.fetchComedyMovies);
      setComedy(requestComedy.data.results);

      const requestHorror = await axios.get(requests.fetchHorrorMovies);
      setHorror(requestHorror.data.results);

      const requestAction = await axios.get(requests.fetchActionMovies);
      setAction(requestAction.data.results);

      const requestDocumentary = await axios.get(requests.fetchDocumentaries);
      setDocumentaries(requestDocumentary.data.results);

      const requestNetflixOriginals = await axios.get(
        requests.fetchNetflixOriginals
      );
      setNetflixOriginals(requestNetflixOriginals.data.results);

      const requestRomantic = await axios.get(requests.fetchRomanceMovies);
      setRomantic(requestRomantic.data.results);

      const requestTopRated = await axios.get(requests.fetchTopRated);
      setTopRated(requestTopRated.data.results);

      return null;
    }

    fetchData();
  }, []);
  return (
    <div className='row-container'>
      <MovieRow title='Trending' isLarge key={trending.id} movies={trending} />
      <MovieRow
        title='Continue Watching'
        isLarge
        isWatching
        key={netflixOriginals.id}
        movies={netflixOriginals}
      />
      <MovieRow title='Top Rated' key={topRated.id} movies={topRated} />
      <MovieRow
        title='Netflix Original'
        isLarge
        key={netflixOriginals.id}
        movies={netflixOriginals}
      />
      <MovieRow title='Horror' key={horror.id} movies={horror} />
      <MovieRow title='Romantic' key={romantic.id} movies={romantic} />
      <MovieRow title='Comedy' key={comedy.id} movies={comedy} />
      <MovieRow title='Action' key={action.id} movies={action} />
      <MovieRow
        title='Documentaries'
        key={documentaries.id}
        movies={documentaries}
      />
    </div>
  );
}
