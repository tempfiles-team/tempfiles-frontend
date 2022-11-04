import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '../../components';
import { RootState } from '../../state/reducers';
import { getFileSize, getDate } from '../../utils';
import * as S from './styled';

export const DownloadPage: React.FC = () => {
  const navigate = useNavigate();
  const downloadFileProps: any = useSelector((state: RootState) => state.DownloadFileProps);
  const { year, month, day } = getDate(downloadFileProps.LastModified);
  useEffect(() => {
    if (
      downloadFileProps.Name === null ||
      downloadFileProps.Size === null ||
      downloadFileProps.LastModified === null
    ) {
      navigate('/');
    }
  }, [navigate, downloadFileProps]);
  return (
    <S.DownloadPageContainer>
      <S.DonwloadFileBox>
        파일이름:{downloadFileProps.Name} / 크기:{getFileSize(downloadFileProps.Size)} / 업로드된
        날짜:
        {year}-{month}-{day}
      </S.DonwloadFileBox>
      <S.DownloadPageButtonSection>
<<<<<<< HEAD
        <a href={`${process.env.BACKEND_BASEURL}/dl/${downloadFileProps.Name}`}>
=======
        <a href={`https://tfb.minpeter.cf/dl/${downloadFileProps.Name}}`}>
          {/* 패스워드 핸들링해서 다운로드 요청하기 ( token 넣어야됨 ) */}
>>>>>>> de99bb01cb25c312de34ceae7d6a30fb572cf083
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
