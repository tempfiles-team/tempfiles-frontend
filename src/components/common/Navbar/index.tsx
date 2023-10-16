import React from 'react';

import * as S from './styled';

export const Navbar: React.FC = () => (
  <S.NavbarContainer>
    <S.Nav to={'/'}>Upload</S.Nav>
    <S.Nav to={'/api'}>API</S.Nav>
    <S.Nav to={'/list'}>File list</S.Nav>
  </S.NavbarContainer>
);
