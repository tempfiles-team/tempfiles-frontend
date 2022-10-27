import React from 'react';

import * as S from './styled';

type FileListBoxProps = {
  filename: string;
  size: string;
  LastModified: any;
  click: () => void;
};

export const FileListBox: React.FC<FileListBoxProps> = ({
  filename,
  size,
  LastModified,
  click,
}) => (
  <S.FileListBoxContainer onClick={click}>
    파일이름: {filename} / 크기:{size} / 업로드날짜:{LastModified.year}-{LastModified.month}-
    {LastModified.day}
  </S.FileListBoxContainer>
);
