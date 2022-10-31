import axios from 'axios';
import React, { useState, useEffect } from 'react';

import * as S from './styled';

export const ApiPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [apiInfo, setApiInfo] = useState<any[]>();
  const getApiInfo = async () => {
    await axios({
      method: 'get',
      url: 'https://tfb.minpeter.cf/info',
    }).then((res) => {
      setApiInfo(res.data);
      setLoading(true);
    });
  };
  useEffect(() => {
    getApiInfo();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <S.ApiPageContainer>
            <S.ApiPageText>API handlers</S.ApiPageText>
            <S.ApiListSection>
              {apiInfo?.map((item, index) => (
                <S.ApiListBox key={index}>https://tfb.minpeter.cf{item.apiName}</S.ApiListBox>
              ))}
            </S.ApiListSection>
            <S.ApiListSectionShadow />
          </S.ApiPageContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
