import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 32rem;
  min-width: 250px;
  position: absolute;
  left: 50%;
  top: 93%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-text-primary);
  text-decoration: none;
`;
