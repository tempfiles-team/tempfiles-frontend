import axiosInstance from '@/lib/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FolderListBox } from '../../components';
import { getElapsed } from '../../utils';

import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';

import { Input } from '@/components/ui/input';

export function FileListPage() {
  const [loading, setLoading] = useState(false);
  const [listZero, setListZero] = useState(false);

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
    await axiosInstance({
      method: 'get',
      url: '/list',
    })
      .then((res) => {
        setFileList(res.data.data); //파일리스트 요소 갯수에 따른 핸들링 추가예정

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
    <div className="flex flex-col items-center justify-center gap-4">
      <Input
        type="text"
        placeholder="숨겨진 파일의 ID를 입력하세요"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            navigate(`/dl/${e.currentTarget.value}`);
          }
        }}
        className="mt-2 max-w-[300px] md:w-96"
      />

      <ScrollArea className="h-[300px] w-fit">
        <div className="flex flex-col gap-2 mr-4">
          {loading ? (
            listZero ? (
              <div>업로드된 파일이 없습니다.</div>
            ) : (
              fileList?.map((item, index: number) => (
                <FolderListBox
                  key={index}
                  folderId={item.folderId}
                  fileCount={item.fileCount}
                  uploadElapsed={getElapsed(item.uploadDate)}
                  isHidden={item.isHidden}
                  click={() => {
                    navigate(`/dl/${item.folderId}`);
                  }}
                />
              ))
            )
          ) : (
            Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} className="w-[300px] h-[48px]" />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
