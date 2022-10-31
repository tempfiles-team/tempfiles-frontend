import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { SkeletonUIApiBox } from '../../components';
import * as S from './styled';

export const ApiPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [apiInfo, setApiInfo] = useState<any[]>();
  const SkeletonUIRandomWidth = ['40', '50', '55', '45'];
  const getApiInfo = async () => {
    await axios({
      method: 'GET',
      url: 'https://tfb.minpeter.cf/info',
    }).then((res) => {
      setApiInfo(res.data);
      setTimeout(() => {
        setLoading(true); //loading 확인하고싶으면 false로 바꿔주세요.
      }, 1200);
    });
  };

  useEffect(() => {
    getApiInfo();
  }, []);

  return (
    <S.ApiPageContainer>
      <S.ApiPageText>API handlers</S.ApiPageText>
      <S.ApiListSection>
        {loading ? (
          <>
            {apiInfo?.map((item, index) => (
              <S.ApiListBox key={index}>https://tfb.minpeter.cf{item.apiName}</S.ApiListBox>
            ))}
          </>
        ) : (
          <>
            <SkeletonUIApiBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]} />
            <SkeletonUIApiBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]} />
            <SkeletonUIApiBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]} />
            <SkeletonUIApiBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]} />
          </>
        )}
      </S.ApiListSection>
      <S.ApiListSectionShadow />
    </S.ApiPageContainer>
  );
};
