import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';

import { useGetCNP } from '../../api/query';
import { Button, SkeletonUI } from '../../components';
import { getDate, getExpireTime } from '../../utils';
import * as S from './styled';

export const Text: React.FC = () => {
  const { textId } = useParams<{ textId: string }>();
  const { data, isLoading } = useGetCNP(textId);
  const upLoadDate = !isLoading && getDate(data.uploadDate);
  const expireDate = !isLoading && getExpireTime(data.expireTime);
  const navigation = useNavigate();
  return (
    <S.TextPageContainer>
      {isLoading ? (
        <>
          <SkeletonUI width="80rem" height="4.6rem" margin="0" />
          <SkeletonUI width="64rem" height="6rem" margin="3rem 0px 0px 0px" />
        </>
      ) : (
        <>
          <S.TextFileStatusText>
            업로드날짜:{upLoadDate.year}-{upLoadDate.month}-{upLoadDate.day}
          </S.TextFileStatusText>
          <S.TextBox>데이터: {data.textData}</S.TextBox>
          <S.TextFileStatusText>
            만료까지 {expireDate.day}일 {expireDate.hour}시간 {expireDate.minute}분 /{' '}
            {data.downloadCount}번 조회 했습니다.
          </S.TextFileStatusText>
          <S.TextPageButtonSection>
            <Button
              click={() => {
                navigator.clipboard.writeText(data.textData.replace(/"/g, ''));
                toast.success('복사 완료', {
                  autoClose: 1000,
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }}
              bgColor="var(--color-button-primary)"
              label="데이터 복사"
            />
            <Button
              click={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.success('복사 완료', {
                  autoClose: 1000,
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }}
              bgColor="var(--color-button-primary)"
              label="링크 복사"
            />
            <Button
              click={() => {
                navigation('delete');
              }}
              bgColor="var(--color-button-secondary)"
              label="데이터 삭제"
            />
          </S.TextPageButtonSection>
        </>
      )}
    </S.TextPageContainer>
  );
};
