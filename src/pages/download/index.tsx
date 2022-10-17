import React from 'react';

import { Button } from '../../components';
import * as S from './styled';

export const DownloadPage: React.FC = () => (
  <S.DownloadPageContainer>
    <S.DownloadPageButtonSection>
      <Button click={() => {}} bgColor="var(--color-button-secondary)" label="다운로드" />
      <Button click={() => {}} bgColor="var(--color-button-secondary)" label="신고" />
    </S.DownloadPageButtonSection>
  </S.DownloadPageContainer>
);
