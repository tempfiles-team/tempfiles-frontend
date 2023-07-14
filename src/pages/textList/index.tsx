import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useGetCnpList } from '../../api/query';
import { LoadingState } from '../../atom/loading';
import { SkeletonUIBox } from '../../components';
import { getDate, getShortName } from '../../utils';
import * as S from './styled';

export const TextList: React.FC = () => {
  const { data } = useGetCnpList();
  const isLoading = useRecoilValue(LoadingState);
  const SkeletonUIRandomWidth = ['50', '55', '60', '65', '70', '75', '80'];
  const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <>
          <S.TextileListPageContainer>
            <SkeletonUIBox randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
          </S.TextileListPageContainer>
          <S.TextListPageBoxShadow />
        </>
      ) : (
        <>
          <S.TextileListPageContainer>
            {data.numberOfList !== 0 ? (
              <>
                {data.list.map(({ data, textId, uploadDate }, index) => {
                  const date = getDate(uploadDate);
                  const shortName = getShortName(data);
                  return (
                    <S.TextListBoxContainer
                      key={index}
                      onClick={() => navigate(`/cnp-download/${textId}`)}
                    >
                      ID: {textId} / 데이터: {shortName} / 업로드 날짜: 업로드날짜:{date.year}-
                      {date.month}-{date.day}
                    </S.TextListBoxContainer>
                  );
                })}
              </>
            ) : (
              <S.TextListZero>업로드된 텍스트가 없습니다.</S.TextListZero>
            )}
          </S.TextileListPageContainer>
          <S.TextListPageBoxShadow />
        </>
      )}
    </>
  );
};
