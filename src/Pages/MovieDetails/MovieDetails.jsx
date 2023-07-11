import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import React from 'react';
import css from './MovieDetails.module.css';
import { convertGenres } from '../../services/convertGenres.js';

const fetchMovieById = async movieid => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=5e58d3162f5aafaf855cf7d900bbc361&language=en-US`
  );
  return response.data;
};

export const MovieDetails = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovie = await fetchMovieById(movieid);
      console.log('MovieDetails', fetchMovieById(movieid));
      setMovie(fetchedMovie);
    };
    fetchData();
  }, [movieid]);

  return (
    <>
      {movie ? (
        <div>
          <div className={css.posterAndInfoContainer}>
            <div className={css.posterContainer}>
              <img
                className={css.poster}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                srcSet={`https://image.tmdb.org/t/p/w500${movie.poster_path} 1x, https://image.tmdb.org/t/p/w780${movie.poster_path} 2x`}
                alt="Movie poster"
              />
            </div>
            <div className={css.infoContainer}>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {movie.vote_average}</p>
              <div>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h4>Genres</h4>
                <p>{convertGenres(movie.genres)}</p>
              </div>
            </div>
          </div>
          <div className={css.additionalInfoContainer}>
            <p>Additional information:</p>
            <Link className={css.link} to="cast">
              Cast
            </Link>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </div>
        </div>
      ) : (
        <span>No such movie</span>
      )}
      <Outlet />
    </>
  );
};
