import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieid } = useParams();

  useEffect(() => {
    console.log(movieid);
  }, [movieid]);
  return (
    <div>
      <span>'cast: '{movieid}</span>
    </div>
  );
};
