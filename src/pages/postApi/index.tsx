import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, SkeletonUI } from '../../components';
import * as S from './styled';

export const ApiPostPage: React.FC = () => {
  const [apiInfo, setApiInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { urlApi } = useParams<{ urlApi: string }>();
  const navigate = useNavigate();
  useEffect(() => {
    const getUrlApiInfo = async () => {
      await axios({
        method: 'get',
        url: `https://tfb.minpeter.cf/info?api=${urlApi}`,
      })
        .then((res) => {
          if (res.data?.message === 'invalid api name') {
            navigate('/404'); //나중에 404페이지로 이동하게
          } else {
            setApiInfo(res.data);
            setTimeout(() => {
              setLoading(true); //loading 확인하고싶으면 false로 바꿔주세요.
            }, 1200);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUrlApiInfo();
  }, [navigate, urlApi]);
  return (
    <>
      {loading ? (
        <>
          <S.ApiBox>
            {apiInfo?.apiName} / method: {apiInfo?.method}
          </S.ApiBox>
          <S.ApiDescText>{apiInfo?.desc}</S.ApiDescText>
          <S.ApiCommandBox>{apiInfo?.command}</S.ApiCommandBox>
          <Button
            click={() => {
              navigator.clipboard.writeText(apiInfo?.command);
              toast.success('복사 완료', {
                autoClose: 1000,
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            }}
            bgColor="var(--color-button-primary)"
            label="명령어 복사"
          />
        </>
      ) : (
        <>
          <SkeletonUI width="30.8rem" height="6.2rem" margin="1rem" />
          <SkeletonUI width="38rem" height="2.6rem" margin="1.5rem 1rem 2rem 1rem" />
          <SkeletonUI width="74rem" height="12rem" margin="1rem 1rem 3rem 1rem" />
          <SkeletonUI width="14rem" height="6rem" margin="0px" />
        </>
      )}
    </>
  );
};
