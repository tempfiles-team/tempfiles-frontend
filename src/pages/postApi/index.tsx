import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';

export function ApiPostPage() {
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
        <div className="flex flex-col items-center justify-center gap-4">
          sh
          <div>
            {apiInfo?.apiName} / method: {apiInfo?.method}
          </div>
          <p>{apiInfo?.desc}</p>
          <code>{apiInfo?.command}</code>
          <Button
            onClick={async () => {
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
          >
            명령어 복사
          </Button>
        </div>
      ) : (
        <>loading...</>
      )}
    </>
  );
}
