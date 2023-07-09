import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { NotFound } from '../Pages/NotFound/NotFound';
import styled from 'styled-components';
import { Movies } from 'Pages/Movies/Movies';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        {' '}
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">About</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        {/* <Route path="" element={<></>}></Route>
        <Route path="" element={<></>}></Route>
        <Route path="" element={<></>}></Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
