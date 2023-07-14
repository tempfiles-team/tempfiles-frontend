import React, { useState, useEffect } from 'react';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [typingCount, setTypingCount] = useState(0);
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingCount(typingCount + 1);
      if (typingCount >= 2) {
        setTypingCount(0);
      }
    }, 500);
    return () => {
      clearInterval(typingInterval);
    };
  }, [typingCount]);
  return (
    <S.MainPageContainer>
      <h1>sadf</h1>
    </S.MainPageContainer>
  );
};
