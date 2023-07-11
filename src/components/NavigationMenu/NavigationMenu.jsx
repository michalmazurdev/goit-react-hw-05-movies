import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './NavigationMenu.module.css';
const StyledLink = styled(NavLink)`
  color: black;
  padding: 20px;
  font-size: 1.5rem;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;

export const NavigationMenu = () => {
  return (
    <div>
      <nav className={css.navigationContainer}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Outlet />
    </div>
  );
};
