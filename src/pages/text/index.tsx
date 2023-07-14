import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useGetCNP } from '../../api/query';
import { LoadingState } from '../../atom';
import { FileBox, SkeletonUI } from '../../components';
import { getDate, getExpireTime } from '../../utils';
import * as S from './styled';

export const Text: React.FC = () => {
  const { textId } = useParams<{ textId: string }>();
  const { data, isLoading } = useGetCNP(textId);
  const upLoadDate = !isLoading && getDate(data.uploadDate);
  const expireDate = !isLoading && getExpireTime(data.expireTime);
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
        </>
      )}
    </S.TextPageContainer>
  );
};
