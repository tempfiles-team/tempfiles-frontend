import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { uploadState } from '../../atom';
import { FileUpLoad, TextUpLoad, UpLoadButton } from '../../components';
import * as S from './styled';

export const MainPage: React.FC = () => {
  const [upload, setUpload] = useRecoilState(uploadState);
  const [typingCount, setTypingCount] = useState(0);
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingCount(typingCount + 1);
      if (typingCount >= 2) {
        setTypingCount(0);
      }
    }, 500);
    return () => {
      clearInterval(typingInterval);
    };
  }, [typingCount]);
  return (
    <S.MainPageContainer>
      {upload.file ? (
        <FileUpLoad />
      ) : !upload.text && !upload.file ? (
        <S.MainPageButtonContainer>
          <UpLoadButton
            type={'button'}
            value={`파일 업로드`}
            onClick={() => setUpload({ file: true, text: false })}
            mainPage={true}
          />
          <UpLoadButton
            type={'button'}
            value={`텍스트 업로드`}
            onClick={() => setUpload({ file: false, text: true })}
            mainPage={true}
          />
        </S.MainPageButtonContainer>
      ) : (
        <TextUpLoad />
      )}
    </S.MainPageContainer>
  );
};
