import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import css from './Reviews.module.css';

const fetchReviews = async movieid => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=5e58d3162f5aafaf855cf7d900bbc361`
  );
  return response.data.results;
};

export const Reviews = () => {
  const { movieid } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchReviews(movieid);
      // console.log('reviews', fetchReviews(movieid));
      setReviews(fetchedData);
    };
    fetchData();
  }, [movieid]);

  return (
    <div>
      <span>'reviews: '{movieid}</span>
      <ul>
        {reviews &&
          reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
