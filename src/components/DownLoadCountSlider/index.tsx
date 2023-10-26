import React from 'react';

import { RangeSlider } from '../RangeSlider';
import * as S from './styled';

type DownloadCountSliderProps = {
  downloadCount: number;
  setDownloadCount: React.Dispatch<React.SetStateAction<number>>;
};

export function DownloadCountSlider({ downloadCount, setDownloadCount }: DownloadCountSliderProps) {
  return (
    <S.DownloadCountContainer>
      <S.SectionText>- 다운로드 횟수 : {downloadCount}번 -</S.SectionText>
      <RangeSlider
        min={1}
        max={100}
        defaultValue={50}
        onChange={(event) => setDownloadCount(Number(event.target.value))}
        step={1}
      />
    </S.DownloadCountContainer>
  );
}
