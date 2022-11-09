import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, FileBox } from '../../components';
import { RootState } from '../../state/reducers';
import * as S from './styled';

export const DownloadPage: React.FC = () => {
  const navigate = useNavigate();
  const downloadFileProps: any = useSelector((state: RootState) => state.DownloadFileProps);
  const { year, month, day } = downloadFileProps.lastModified;
  useEffect(() => {
    if (
      downloadFileProps.filename === null ||
      downloadFileProps.size === null ||
      downloadFileProps.lastModified === null
    ) {
      navigate('/');
    }
  }, [navigate, downloadFileProps]);
  return (
    <S.DownloadPageContainer>
      <FileBox>
        파일이름:{downloadFileProps.filename} / 크기:{downloadFileProps.size} / 업로드된 날짜:
        {year}-{month}-{day}
      </FileBox>
      <S.DownloadPageButtonSection>
        <a
          href={`${process.env.REACT_APP_BACKEND_BASEURL}/dl/${downloadFileProps.name}${
            downloadFileProps.token != null ? `?${downloadFileProps.token}` : ''
          }`}
        >
          <Button click={() => {}} bgColor="var(--color-button-primary)" label="다운로드" />
        </a>
        <Button
          click={() => {
            navigator.clipboard.writeText(``);
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
            toast.success('제작중!', {
              autoClose: 1000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
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
