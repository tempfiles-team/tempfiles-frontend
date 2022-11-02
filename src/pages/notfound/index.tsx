import React from 'react';

import * as S from './styled';

export const NotFoundPage: React.FC = () => (
  <S.NotFoundPageContainer>
    <S.NotFoundText>404</S.NotFoundText>
    <S.NotFoundSubText>Error 404 Not Found</S.NotFoundSubText>
  </S.NotFoundPageContainer>
);
