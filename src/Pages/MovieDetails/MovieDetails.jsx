import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';

const fetchMovieById = async movieid => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=5e58d3162f5aafaf855cf7d900bbc361&language=en-US`
  );
  return response.data;
};

export const MovieDetails = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);

  console.log(movieid);

  const fetchData = async () => {
    const fetchedMovie = await fetchMovieById(movieid);
    setMovie(fetchedMovie);
  };

  useEffect(() => {
    fetchData();
    // console.log(movieid);
  }, [movieid]);

  return (
    <div>
      {movie ? <span>{movie.original_title}</span> : <span>No such movie</span>}
    </div>
  );
};
