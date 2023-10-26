import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FileListBox, Button, SkeletonUI } from '../../components';
import { getDate, getFileSize, getExpireTime } from '../../utils';
import * as S from './styled';

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
            files: res.data.files.map(
              (file: { fileName: string; fileSize: number; downloadUrl: string }) => ({
                filename: file.fileName,
                size: getFileSize(file.fileSize),
                downloadUrl: file.downloadUrl,
              })
            ),
            folderId: res.data.folderId,
            deleteUrl: res.data.deleteUrl,
            uploadDate: getDate(res.data.uploadDate),
            isHidden: res.data.isHidden,
            downloadCount: res.data.downloadLimit - res.data.downloadCount,
            expireTime: getExpireTime(res.data.expireTime),
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
    <S.DownloadPageContainer>
      {!loading ? (
        <>
          <S.IdBox>
            {fileProps.isHidden ? '비공개 파일' : '공개 파일'} / {fileProps.folderId}
          </S.IdBox>
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
                navigate('/del/' + fileProps.folderId);
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
