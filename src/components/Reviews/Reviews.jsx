import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieid } = useParams();

  useEffect(() => {
    console.log(movieid);
  }, [movieid]);
  return (
    <div>
      <span>'reviews: '{movieid}</span>
    </div>
  );
};
