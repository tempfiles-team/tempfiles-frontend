import React from 'react';

import * as S from './styled';

type FileFindProps = {
  handleChangeFile: any;
  handleDrop: any;
  handleDragOver: any;
  fileProps: any;
};

export const FileFind: React.FC<FileFindProps> = ({
  handleChangeFile,
  fileProps,
  handleDrop,
  handleDragOver,
}) => (
  <S.FileFindContainer>
    <S.FileFindLabelBox
      id="label-file-upload"
      htmlFor="input-file-upload"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {fileProps.filename != '' && fileProps.size != '' && fileProps.fileType != ''
        ? '이름:' +
          fileProps.filename +
          ' / 크기:' +
          fileProps.size +
          ' / 타입:' +
          fileProps.fileType
        : '업로드1 할 파일을 선택해주세요....'}
    </S.FileFindLabelBox>

    <S.FileFindButton htmlFor="input-file-upload">찾아보기</S.FileFindButton>
    <input
      id="input-file-upload"
      type={'file'}
      style={{ display: 'none' }}
      onChange={handleChangeFile}
    />
  </S.FileFindContainer>
);
