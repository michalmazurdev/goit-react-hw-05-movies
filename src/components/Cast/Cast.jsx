import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const fetchCast = async movieid => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=5e58d3162f5aafaf855cf7d900bbc361`
  );
  return response.data.cast;
};

export const Cast = () => {
  const { movieid } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovie = await fetchCast(movieid);
      // console.log(fetchCast(movieid));
      setCast(fetchedMovie);
    };
    fetchData();
  }, [movieid]);
  return (
    <div>
      <span>'cast: '{movieid}</span>
      <ul>
        {cast &&
          cast.map(person => <li key={person.id}>{person.original_name}</li>)}
      </ul>
    </div>
  );
};
