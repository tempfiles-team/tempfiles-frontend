import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FileListBox, Button, SkeletonUI } from '../../components';
import { useDeletePageNavigator } from '../../hooks';
import { RootState } from '../../state/reducers';
import { getDate, getFileSize, getExpireTime } from '../../utils';
import * as S from './styled';

export function DownloadPage() {
  // const navigate = useNavigate();
  const downloadFileProps: {
    token: string | null;
    isEncrypted: boolean | null;
  } = useSelector((state: RootState) => state.downloadFile);
  const [loading, setLoading] = useState(true);
  const { folderid } = useParams<{ folderid: string }>();
  const [fileProps, setFileProps] = useState({
    files: null,
    uploadDate: '',
    isEncrypted: false,
    downloadCount: 0,
    deleteUrl: '',
    expireTime: '',
  });
  const [move] = useDeletePageNavigator(
    fileProps.deleteUrl,
    fileProps.isEncrypted,
    downloadFileProps.token
  );

  useEffect(() => {
    const getFileProps = async () => {
      await axios({
        method: 'get',
        url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/file/${folderid}`,
      })
        .then((res) => {
          const updatedFileProps = {
            files: res.data.files.map(
              (file: { fileName: string; fileSize: number; downloadUrl: string }) => ({
                filename: file.fileName,
                size: getFileSize(file.fileSize),
                downloadUrl: file.downloadUrl,
              })
            ),
            deleteUrl: res.data.deleteUrl,
            uploadDate: getDate(res.data.uploadDate),
            isEncrypted: res.data.isEncrypted,
            downloadCount: res.data.downloadLimit - res.data.downloadCount,
            expireTime: getExpireTime(res.data.expireTime),
          };

          setLoading(false);
          setFileProps(updatedFileProps);
        })
        .catch((err) => {
          // navigate('/');
          if (err.response.status !== 401) {
            toast.error(`error 문의해주세요. ${err.response.status}`, {
              duration: 3000,
              icon: '🔥',
            });
          } else {
            toast.error('잘못된 링크입니다', {
              duration: 3000,
              icon: '🔥',
            });
          }
        });
    };
    getFileProps();
  }, []);

  return (
    <S.DownloadPageContainer>
      {!loading ? (
        <>
          <S.DownloadFileListBoxContainer>
            {fileProps.files.map(
              (
                file: {
                  filename: string;
                  size: string;
                  downloadUrl: string;
                },
                index: number
              ) => (
                <div key={index}>
                  <FileListBox
                    filename={file.filename}
                    size={file.size}
                    downloadUrl={file.downloadUrl}
                  />
                </div>
              )
            )}
          </S.DownloadFileListBoxContainer>

          <S.DownloadFileStatusText>
            만료까지 {fileProps.expireTime} / {fileProps.downloadCount}회 남았습니다.
          </S.DownloadFileStatusText>
          <S.DownloadPageButtonSection>
            <Button
              click={() => {
                for (let i = 0; i < fileProps.files.length; i++) {
                  window.open(fileProps.files[i].downloadUrl, '_blank', 'noopener');
                }
              }}
              bgColor="var(--color-button-primary)"
              label="전체 다운로드"
            />
            <Button
              click={async () => {
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
              bgColor="var(--color-button-primary)"
              label="링크 복사"
            />
            <Button
              click={() => {
                move();
              }}
              bgColor="var(--color-button-secondary)"
              label="폴더 삭제"
            />
          </S.DownloadPageButtonSection>
        </>
      ) : (
        <>
          <SkeletonUI width="80rem" height="4.6rem" margin="0" />
          <SkeletonUI width="64rem" height="6rem" margin="3rem 0px 0px 0px" />
        </>
      )}
    </S.DownloadPageContainer>
  );
}
