import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '../../components';
import { useDeletePageNavigator } from '../../hooks';
import { RootState } from '../../state/reducers';
import * as S from './styled';

export const SuccessPage: React.FC = () => {
  const FileProps: any = useSelector((state: RootState) => state.SuccessFileProps);
  const [move] = useDeletePageNavigator(FileProps.name);
  const navigate = useNavigate();
  useEffect(() => {
    if (FileProps.name != null && FileProps.size != null) {
    } else {
      navigate('/');
    }
  });
  return (
    <S.SuccessPageContainer>
      <S.SuccessPageFilePropsSection>
        <S.SuccessPageFilePropsText> Filename : {FileProps.name} </S.SuccessPageFilePropsText>
        <S.SuccessPageFilePropsText> Size : {FileProps.size} </S.SuccessPageFilePropsText>
        <S.SuccessPageFilePropsText>
          URL : {`https://tfb.minpeter.cf/dl/${FileProps.name}`}
        </S.SuccessPageFilePropsText>
        <S.SuccessPageFilePropsText> Expire at : {} </S.SuccessPageFilePropsText>
      </S.SuccessPageFilePropsSection>
      <S.SuccessPageButtonSection>
        <Button
          click={() => {
            navigator.clipboard.writeText(`https://tfb.minpeter.cf/dl/${FileProps.name}`);
            toast.success('복사 완료', {
              autoClose: 1000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }}
          bgColor="var(--color-button-primary)"
          label="링크 복사"
        />
        <Button click={move} bgColor="var(--color-button-primary)" label="파일 삭제" />
      </S.SuccessPageButtonSection>
    </S.SuccessPageContainer>
  );
};
