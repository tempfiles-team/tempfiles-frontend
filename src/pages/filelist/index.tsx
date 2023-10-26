import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FolderListBox, SkeletonUIBox } from '../../components';
import { getElapsed } from '../../utils';
import * as S from './styled';

export function FileListPage() {
  const [loading, setLoading] = useState(false);
  const [listZero, setListZero] = useState(false); //test: true
  const SkeletonUIRandomWidth = ['50', '55', '60', '65', '70', '75', '80'];

  const navigate = useNavigate();
  const [fileList, setFileList] = useState<
    {
      fileCount: string;
      folderId: string;
      uploadDate: string;
      isHidden: boolean;
    }[]
  >();

  const getFileList = async () => {
    await axios({
      method: 'get',
      url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/list`,
    })
      .then((res) => {
        setFileList(res.data.list); //파일리스트 요소 갯수에 따른 핸들링 추가예정

        if (res.data.list === null) {
          setListZero(true);
        }
        setTimeout(() => {
          setLoading(true); //loading 확인하고싶으면 false로 바꿔주세요.
        }, 1000);
      })
      .catch((err) => {
        toast.error(`파일 리스트를 불러오는데 실패했습니다. ${err.response.status}`, {
          duration: 3000,
          icon: '❌',
        });
      });
  };
  useEffect(() => {
    getFileList();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <S.FileListPageContainer>
            {!listZero ? (
              <>
                {fileList?.map((item, index: number) => (
                  <FolderListBox
                    key={index}
                    folderId={item.folderId}
                    fileCount={item.fileCount}
                    uploadElapsed={getElapsed(item.uploadDate)}
                    isHidden={item.isHidden}
                    click={() => {
                      // if (item.isHidden) {
                      //   navigate(`/check/${item.folderId}`);
                      // } else {
                      // SetDownloadFileProps({
                      //   folderId: item.folderId,
                      // });
                      navigate(`/dl/${item.folderId}`);
                      // }
                    }}
                  />
                ))}
              </>
            ) : (
              <S.FileListZero>업로드된 파일이 없습니다.</S.FileListZero>
            )}
          </S.FileListPageContainer>
        </>
      ) : (
        <>
          <S.FileListPageContainer>
            <SkeletonUIBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
            <SkeletonUIBox randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]} />
          </S.FileListPageContainer>
        </>
      )}
    </>
  );
}
