import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import photoMissing from './photoMissing.png';
import css from './Cast.module.css';

const fetchCast = async movieid => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=5e58d3162f5aafaf855cf7d900bbc361`
  );
  return response.data.cast;
};

const Cast = () => {
  const { movieid } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMData = await fetchCast(movieid);
      // console.log('cast', fetchCast(movieid));
      setCast(fetchedMData);
    };
    fetchData();
  }, [movieid]);

  return (
    <div className={css.castContainer}>
      {cast.length !== 0 ? (
        <>
          <h4>Cast</h4>
          <ul className={css.castList}>
            {cast.map(person => (
              <li key={person.id}>
                <div className={css.imageContainer}>
                  {person.profile_path ? (
                    <img
                      className={css.image}
                      src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img className={css.image} src={photoMissing} alt="" />
                  )}
                </div>
                <p className={css.castInfo}>{person.original_name}</p>
                <p className={css.castInfo}>as</p>
                <p className={css.castInfo}>{person.character}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h4>Cast</h4>
          <p>
            We are sorry, we do not have information on cast for this movie.
          </p>
        </>
      )}
    </div>
  );
};
export default Cast;
