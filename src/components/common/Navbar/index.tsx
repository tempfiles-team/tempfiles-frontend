import React from 'react';
import { toast } from 'react-toastify';

import * as S from './styled';

export const Navbar: React.FC = () => (
  <S.NavbarContainer>
    <S.Nav to={'/'}>Upload</S.Nav>
    <S.Nav
      to={'/'}
      onClick={() => {
        toast.success('제작중!', {
          autoClose: 1000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }}
    >
      API
    </S.Nav>
    <S.Nav to={'/filelist'}>File list</S.Nav>
  </S.NavbarContainer>
);
