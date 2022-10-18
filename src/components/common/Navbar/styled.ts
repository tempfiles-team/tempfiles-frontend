import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 32rem;
  min-width: 250px;
  margin: 30px auto 30px auto;
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-text-primary);
  text-decoration: none;
`;
