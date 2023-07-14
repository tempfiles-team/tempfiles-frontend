import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDeleteCNP } from '../../api/query';
import { Button } from '../../components';
import * as S from './styled';

export const TextDelete: React.FC = () => {
  const { textId } = useParams<{ textId: string }>();
  const navigate = useNavigate();
  console.log(textId, 'asdf');
  const { mutate } = useDeleteCNP({ textId });
  return (
    <S.TextDeletePageContainer>
      <S.TextDeletePagePageLabel>
        업로드된 텍스트를 서버에서 삭제하시겠습니까?
      </S.TextDeletePagePageLabel>
      <S.TextDeletePageButtonSection>
        <Button bgColor="var(--color-button-primary)" label="확인" click={() => mutate({})} />
        <Button bgColor="var(--color-button-primary)" label="취소" click={() => navigate(-1)} />
      </S.TextDeletePageButtonSection>
    </S.TextDeletePageContainer>
  );
};
