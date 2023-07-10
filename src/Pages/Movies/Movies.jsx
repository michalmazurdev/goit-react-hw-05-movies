import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchMoviesByKeyword = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=5e58d3162f5aafaf855cf7d900bbc361&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data.results;
};
export const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedPhrase, setSearchedPhrase] = useState('');
  const navigate = useNavigate();

  const fetchData = async query => {
    const fetchedMovies = await fetchMoviesByKeyword(query);
    setSearchedMovies(fetchedMovies);
  };

  useEffect(() => {
    fetchData(searchedPhrase);
  }, [searchedPhrase]);

  const searchPhrase = event => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    setSearchedPhrase(inputValue);
    navigate(`?${inputValue}`, { replace: false });
  };

  return (
    <div>
      <form onSubmit={searchPhrase}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search for a movie..."
        ></input>
        <button type="submit">Search</button>
      </form>
      {/* below div should be moved to spearate function component */}
      <div>
        {searchedMovies.length !== 0 && (
          <ul>
            {searchedMovies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};