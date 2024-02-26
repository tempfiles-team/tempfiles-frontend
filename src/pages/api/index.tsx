import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { SkeletonUIApiBox } from '../../components';
import { ApiPostPage } from '../postApi';
import * as S from './styled';

export function ApiPage() {
  const [loading, setLoading] = useState(false);
  const [apiInfo, setApiInfo] = useState<
    {
      apiName: string;
      apiUrl: string;
      apiHandler: string;
      method: string;
      desc: string;
      command: string;
    }[]
  >();
  const { toast } = useToast();
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
        // toast.error(`API 정보를 불러오는데 실패했습니다. ${err.response.status}`, {
        //   duration: 3000,
        //   icon: '❌',
        // });
        toast({
          title: 'API 정보를 불러오는데 실패했습니다.',
          description: `${err.response.status}`,
          duration: 3000,
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
}
