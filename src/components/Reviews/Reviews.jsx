import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const fetchReviews = async movieid => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=5e58d3162f5aafaf855cf7d900bbc361`
  );
  return response.data.results;
};

const Reviews = () => {
  const { movieid } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchReviews(movieid);
      setReviews(fetchedData);
    };
    fetchData();
  }, [movieid]);

  return (
    <div className={css.reviewsConteiner}>
      {reviews.length !== 0 ? (
        <>
          <h4>Reviews</h4>
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
        </>
      ) : (
        <>
          <h4>Reviews</h4>
          <p>We are sorry, there are no reviews for this movie yet.</p>
        </>
      )}
    </div>
  );
};
export default Reviews;
