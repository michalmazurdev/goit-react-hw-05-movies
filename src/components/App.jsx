import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { NotFound } from '../Pages/NotFound/NotFound';
import { Movies } from 'Pages/Movies/Movies';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { NavigationMenu } from '../components/NavigationMenu/NavigationMenu';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationMenu />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieid" element={<MovieDetails />}></Route>
          MovieDetails
          {/* <Route path="" element={<></>}></Route>
        <Route path="" element={<></>}></Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
