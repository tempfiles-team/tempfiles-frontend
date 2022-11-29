import React from 'react';

import { RangeSlider } from '../RangeSlider';
import * as S from './styled';

export const DownLoadCountSlider: React.FC = () => (
  <S.DownloadCountContainer>
    <RangeSlider
      min={1}
      max={100}
      defaultValue={1}
      onChange={(event) => console.log(event.target.value)}
      step={1}
    />
  </S.DownloadCountContainer>
);
