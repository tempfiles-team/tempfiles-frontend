import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { SkeletonUIApiBox } from '../../components';
import { ApiPostPage } from '../postApi';
import * as S from './styled';

export const ApiPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [apiInfo, setApiInfo] = useState<any[]>();
  const SkeletonUIRandomWidth = ['40', '50', '55', '45'];
  const getApiInfo = async () => {
    await axios({
      method: 'get',
      url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/info`,
    })
      .then((res) => {
        setApiInfo(res.data);
        setTimeout(() => {
          setLoading(true); //loading 확인하고싶으면 false로 바꿔주세요.
        }, 1200);
      })
      .catch((err) => {
        toast.error(`API 정보를 불러오는데 실패했습니다. ${err.response.status}`, {
          duration: 3000,
          icon: '❌',
        });
      });
  };

  useEffect(() => {
    getApiInfo();
  }, []);

  return (
    <S.ApiPageContainer>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <S.ApiListSection>
                {loading ? (
                  <>
                    {apiInfo?.map((item, index) => (
                      <Link key={index} to={item.apiHandler} style={{ textDecoration: 'none' }}>
                        <S.ApiListBox>{item.apiUrl}</S.ApiListBox>
                      </Link>
                    ))}
                  </>
                ) : (
                  <>
                    <SkeletonUIApiBox
                      randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                    <SkeletonUIApiBox
                      randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                    <SkeletonUIApiBox
                      randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                    <SkeletonUIApiBox
                      randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                    <SkeletonUIApiBox
                      randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                  </>
                )}
              </S.ApiListSection>
            </>
          }
        />
        <Route path=":urlApi" element={<ApiPostPage />} />
      </Routes>
    </S.ApiPageContainer>
  );
};
