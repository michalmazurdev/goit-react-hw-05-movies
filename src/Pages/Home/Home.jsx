import { useEffect, useState } from 'react';
import css from './Home.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// const API_KEY = '5e58d3162f5aafaf855cf7d900bbc361';

// export const URL = 'https://api.themoviedb.org/3/';
// export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// export const LANGUAGE = 'en-US';

// const createSearchParams = query =>
//   new URLSearchParams({
//     query: query,
//     api_key: KEY,
//     language: LANGUAGE,
//     include_adult: false,
//   });

const fetchTrendingToday = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=5e58d3162f5aafaf855cf7d900bbc361&include_adult=false&language=en-US&page=1'
  );
  return response.data.results;
};

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchData = async () => {
    const fetchedMovies = await fetchTrendingToday();
    setTrendingMovies(fetchedMovies);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Movies trending today:</h1>
      {trendingMovies.map(movie => (
        <Link
          className={css.listItem}
          key={movie.id}
          to={`/movies/${movie.id}`}
        >
          {movie.title}
        </Link>
      ))}
    </div>
  );
};
