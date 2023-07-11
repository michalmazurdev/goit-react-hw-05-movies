import { useEffect, useState } from 'react';
import css from './Home.module.css';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const fetchTrendingToday = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=5e58d3162f5aafaf855cf7d900bbc361&include_adult=false&language=en-US&page=1'
  );
  return response.data.results;
};

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  const fetchData = async () => {
    const fetchedMovies = await fetchTrendingToday();
    setTrendingMovies(fetchedMovies);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1>Movies trending today:</h1>
      <ul className={css.list}>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link
              className={css.listItem}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
