import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FileListBox, Button, SkeletonUI } from '../../components';
import { useDeletePageNavigator } from '../../hooks';
import { RootState } from '../../state/reducers';
import { getDate, getFileSize, getExpireTime } from '../../utils';
import * as S from './styled';

export const DownloadPage: React.FC = () => {
  const navigate = useNavigate();
  const downloadFileProps: any = useSelector((state: RootState) => state.DownloadFileProps);
  const [loading, setLoading] = useState(true);
  const { fileid } = useParams<{ fileid: string }>();
  const [fileProps, setFileProps] = useState({
    filename: '',
    // fileId: '',
    size: '',
    uploadDate: { year: 0, month: 0, day: 0 },
    download_url: '',
    delete_url: '',
    isEncrypted: false,
    downloadCount: 0,
    expireTime: { day: 0, hour: 0, minute: 0 },
  });
  const [move] = useDeletePageNavigator(
    fileProps.delete_url,
    fileProps.isEncrypted,
    downloadFileProps.token,
  );

  //https://github.com/facebook/react/issues/14920
  useEffect(() => {
    const getFileProps = async () => {
      await axios({
        method: 'get',
        url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/file/${fileid}${
          downloadFileProps.isEncrypted ? `?token=${downloadFileProps.token}` : ``
        }`,
      })
        .then((res) => {
          setLoading(false);
          if (res.data.isEncrypted && !res.data.provide_token) {
            navigate(`/check/${fileid}`);
          } else {
            setFileProps({
              filename: res.data.filename,
              // fileId: res.data.fileId,
              size: getFileSize(res.data.size),
              uploadDate: getDate(res.data.uploadDate),
              download_url: res.data.download_url,
              delete_url: res.data.delete_url,
              isEncrypted: res.data.isEncrypted,
              downloadCount: res.data.downloadLimit - res.data.downloadCount,
              expireTime: getExpireTime(res.data.expireTime),
            });
          }
        })
        .catch((err) => {
          navigate('/');
          if (err.response.status != 401) {
            toast.error(`error 문의해주세요. ${err.response.status}`, {
              autoClose: 1000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error(`잘못된 링크입니다`, {
              autoClose: 1000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        });
    };
    getFileProps();
  }, [downloadFileProps, navigate, fileid]);
  return (
    <S.DownloadPageContainer>
      {!loading ? (
        <>
          <FileListBox
            key={fileProps.filename}
            filename={fileProps.filename}
            size={fileProps.size}
            uploadDate={fileProps.uploadDate}
            fileId=""
            isEncrypted={false}
            click={() => {}}
          />

          <S.DownloadFileStatusText>
            만료까지 {fileProps.expireTime.day}일 {fileProps.expireTime.hour}시간{' '}
            {fileProps.expireTime.minute}분 / {fileProps.downloadCount}회 남았습니다.
          </S.DownloadFileStatusText>
          <S.DownloadPageButtonSection>
            <a
              href={`${fileProps.download_url}${
                fileProps.isEncrypted ? `?token=${downloadFileProps.token}` : ''
              }`}
            >
              <Button click={() => {}} bgColor="var(--color-button-primary)" label="다운로드" />
            </a>
            <Button
              click={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.success('복사 완료', {
                  autoClose: 1000,
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }}
              bgColor="var(--color-button-primary)"
              label="링크복사"
            />
            <Button
              click={() => {
                move();
              }}
              bgColor="var(--color-button-secondary)"
              label="파일삭제"
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
};
