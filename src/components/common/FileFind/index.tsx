import React from 'react';

import * as S from './styled';

type FileFindProps = {
  handleChangeFile: any;
  fileProps: any;
};

export const FileFind: React.FC<FileFindProps> = ({ handleChangeFile, fileProps }) => (
  <S.FileFindContainer>
    <S.FileFindTextBox>
      파일이름: {fileProps.name} {fileProps.size != '' ? '/ size:' : ''} {fileProps.size}{' '}
      {fileProps.size != '' ? '/ filetype:' : ''} {fileProps.fileType}
    </S.FileFindTextBox>
    <S.FileFindButton htmlFor="file">찾아보기</S.FileFindButton>
    <input type={'file'} id="file" style={{ display: 'none' }} onChange={handleChangeFile} />
  </S.FileFindContainer>
);
