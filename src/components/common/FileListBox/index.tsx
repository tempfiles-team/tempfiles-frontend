import React from 'react';

import * as S from './styled';

type FileListBoxProps = {
  filename: string;
  size: string;
  LastModified: any;
};

export const FileListBox: React.FC<FileListBoxProps> = ({ filename, size, LastModified }) => (
  <S.FileListBoxContainer>
    파일이름: {filename} / 크기:{size} / 업로드날짜:{LastModified.getFullYear()}-
    {LastModified.getMonth() + 1}-{LastModified.getDate()}
  </S.FileListBoxContainer>
);
