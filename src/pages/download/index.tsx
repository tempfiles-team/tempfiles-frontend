import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FileListBox, SkeletonUI } from '../../components';
import { Button } from '@/components/ui/button';
import { getDate, getFileSize, getExpireTime } from '../../utils';

export function DownloadPage() {
  const [loading, setLoading] = useState(true);
  const { folderid } = useParams<{ folderid: string }>();
  const [fileProps, setFileProps] = useState({
    files: null,
    uploadDate: '',
    isHidden: false,
    downloadCount: 0,
    deleteUrl: '',
    expireTime: '',
    folderId: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getFileProps = async () => {
      await axios({
        method: 'get',
        url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/file/${folderid}`,
      })
        .then((res) => {
          const updatedFileProps = {
            files: res.data.data.files.map(
              (file: { fileName: string; fileSize: number; downloadUrl: string }) => ({
                filename: file.fileName,
                size: getFileSize(file.fileSize),
                downloadUrl: file.downloadUrl,
              })
            ),
            folderId: res.data.data.folderId,
            deleteUrl: res.data.data.deleteUrl,
            uploadDate: getDate(res.data.data.uploadDate),
            isHidden: res.data.data.isHidden,
            downloadCount: res.data.data.downloadLimit - res.data.data.downloadCount,
            expireTime: getExpireTime(res.data.data.expireTime),
          };

          setLoading(false);
          setFileProps(updatedFileProps);
        })
        // .catch((err) => {
        // if (err.response.status !== 401) {
        .catch(() => {
          toast.error('ID를 다시 확인해주세요.', {
            duration: 3000,
            icon: '🔥',
          });

          navigate(-1);
        });
    };
    getFileProps();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {!loading ? (
        <div className="px-2 flex flex-col gap-4 items-center">
          <div>
            {fileProps.isHidden ? '비공개 파일' : '공개 파일'} / {fileProps.folderId}
          </div>
          <div className="flex flex-col gap-2">
            {fileProps.files.map(
              (
                file: {
                  filename: string;
                  size: string;
                  downloadUrl: string;
                },
                index: number
              ) => (
                <FileListBox
                  key={index}
                  filename={file.filename}
                  size={file.size}
                  downloadUrl={file.downloadUrl}
                />
              )
            )}
          </div>

          <div>
            만료까지 {fileProps.expireTime} / {fileProps.downloadCount}회 남았습니다.
          </div>
          <div className="flex gap-1">
            <Button
              onClick={() => {
                for (let i = 0; i < fileProps.files.length; i++) {
                  const durl =
                    import.meta.env.VITE_APP_BACKEND_BASEURL + fileProps.files[i].downloadUrl;
                  window.open(durl, '_blank', 'noopener');
                }
              }}
            >
              전체 다운로드
            </Button>
            <Button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.href);
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
              링크 복사
            </Button>
            <Button
              onClick={() => {
                navigate('/del/' + fileProps.folderId);
              }}
            >
              폴더 삭제
            </Button>
          </div>
        </div>
      ) : (
        <>
          <SkeletonUI width="80rem" height="4.6rem" margin="0" />
          <SkeletonUI width="64rem" height="6rem" margin="3rem 0px 0px 0px" />
        </>
      )}
    </div>
  );
}
