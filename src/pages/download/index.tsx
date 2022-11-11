import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, FileBox } from '../../components';
import { useDeletePageNavigator } from '../../hooks';
import { RootState } from '../../state/reducers';
import { getDate, getFileSize } from '../../utils';
import * as S from './styled';

export const DownloadPage: React.FC = () => {
  const navigate = useNavigate();
  const downloadFileProps: any = useSelector((state: RootState) => state.DownloadFileProps);
  const [fileProps, setFileProps] = useState({
    filename: '',
    // fileId: '',
    size: '',
    uploadDate: { year: 0, month: 0, day: 0 },
    download_url: '',
    delete_url: '',
    isEncrypted: false,
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
        url: `${process.env.REACT_APP_BACKEND_BASEURL}/file/${downloadFileProps.fileId}/${
          downloadFileProps.filename
        }${downloadFileProps.isEncrypted ? `?token=${downloadFileProps.token}` : ''}`,
      })
        .then((res) => {
          setFileProps({
            filename: res.data.filename,
            // fileId: res.data.fileId,
            size: getFileSize(res.data.size),
            uploadDate: getDate(res.data.uploadDate),
            download_url: res.data.download_url,
            delete_url: res.data.delete_url,
            isEncrypted: res.data.isEncrypted,
          });
        })
        .catch((err) => {
          navigate(-1);
          toast.error(`error 문의해주세요. ${err.response.status}`, {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          console.log(err);
        });
    };
    if (downloadFileProps.filename != null || downloadFileProps.fileId != null) {
      getFileProps();
    } else {
      navigate('/');
    }
  }, [downloadFileProps, navigate]);
  return (
    <S.DownloadPageContainer>
      <FileBox>
        파일이름:{fileProps.filename} / 크기:{fileProps.size} / 업로드된 날짜:
        {fileProps.uploadDate.year}-{fileProps.uploadDate.month}-{fileProps.uploadDate.day}
      </FileBox>
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
            navigator.clipboard.writeText(
              `${fileProps.download_url}${
                fileProps.isEncrypted ? `?token=${downloadFileProps.token}` : ''
              }`,
            );
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
        <Button
          click={() => {
            toast.success('제작중!', {
              autoClose: 1000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }}
          bgColor="var(--color-button-secondary)"
          label="신고"
        />
      </S.DownloadPageButtonSection>
    </S.DownloadPageContainer>
  );
};
