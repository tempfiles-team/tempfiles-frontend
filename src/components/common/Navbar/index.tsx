import React from 'react';

import * as S from './styled';

export const Navbar: React.FC = () => (
  <S.NavbarContainer>
    <S.Nav to={'/'}>Upload</S.Nav>
    <S.Nav to={'/api'}>API</S.Nav>
    <S.Nav to={'/filelist'}>File list</S.Nav>
    <S.Nav to={'/cnplist'}>CNP list</S.Nav>
  </S.NavbarContainer>
);
