import { lazy, Suspense } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { Home } from '../Pages/Home/Home';
import { Loader } from './Loader/Loader';

const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<NavigationMenu />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:movieid" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
