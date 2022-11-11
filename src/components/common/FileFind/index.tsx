import React from 'react';

import * as S from './styled';

type FileFindProps = {
  handleChangeFile: any;
  fileProps: any;
};

export const FileFind: React.FC<FileFindProps> = ({ handleChangeFile, fileProps }) => (
  <S.FileFindContainer>
    <S.FileFindTextBox>
      {fileProps.filename != '' && fileProps.size != '' && fileProps.fileType != ''
        ? '이름:' +
          fileProps.filename +
          ' / 크기:' +
          fileProps.size +
          ' / 타입:' +
          fileProps.fileType
        : '업로드 할 파일을 선택해주세요....'}
    </S.FileFindTextBox>

    <S.FileFindButton htmlFor="file">찾아보기</S.FileFindButton>
    <input type={'file'} id="file" style={{ display: 'none' }} onChange={handleChangeFile} />
  </S.FileFindContainer>
);
