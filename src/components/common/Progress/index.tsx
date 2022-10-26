import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

import animationData from '../../../animation/124534-tricube-spinner-1.json';
import * as S from './styled';

type ProgressBarProps = {
  value: number;
  fileName: string;
  typing: string;
};

export const Progress: React.FC<ProgressBarProps> = ({ value, fileName, typing }) => {
  const likecontainer = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: likecontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  });
  return (
    <S.ProgressContainer>
      <S.ProgressAnimationBox ref={likecontainer} />
      <S.ProgressBar width={value} />
      <S.ProgressText>
        {fileName} uploading{typing}
      </S.ProgressText>
    </S.ProgressContainer>
  );
};
