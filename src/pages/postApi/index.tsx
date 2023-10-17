import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button, SkeletonUI } from '../../components';
import * as S from './styled';

export const ApiPostPage: React.FC = () => {
  const [apiInfo, setApiInfo] = useState<{
    apiName: string;
    apiUrl: string;
    apiHandler: string;
    method: string;
    desc: string;
    command: string;
  }>();
  const [loading, setLoading] = useState(false);
  const { urlApi } = useParams<{ urlApi: string }>();
  const navigate = useNavigate();
  useEffect(() => {
    const getUrlApiInfo = async () => {
      await axios({
        method: 'get',
        url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/info?api=${urlApi}`,
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
          toast.error(`API 정보를 불러오는데 실패했습니다. ${err.response.status}`, {
            duration: 3000,
            icon: '❌',
          });
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
            click={async () => {
              try {
                await navigator.clipboard.writeText(apiInfo?.command);
                toast.success('복사 완료', {
                  duration: 3000,
                  icon: '🎉',
                });
              } catch (err) {
                toast.error('복사 실패', {
                  duration: 3000,
                  icon: '❌',
                });
              }
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
