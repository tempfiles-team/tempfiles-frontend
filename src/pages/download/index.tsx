import React from 'react';

import { Button } from '../../components';
import * as S from './styled';

export const DownloadPage: React.FC = () => (
  <S.DownloadPageContainer>
    <S.DownloadPageButtonSection>
      <Button bgColor="var(--color-button-primary)" label="다운로드" />
      <Button bgColor="var(--color-button-secondary)" label="신고" />
    </S.DownloadPageButtonSection>
  </S.DownloadPageContainer>
);
