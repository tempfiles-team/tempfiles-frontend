import React from 'react';

import LockIcon from '../../../assets/LockIcon.svg';
import * as S from './styled';

type FileListBoxProps = {
  filename: string;
  fileId: string;
  size: string;
  uploadDate: any;
  isEncrypted: boolean;
  click: () => void;
};

export const FileListBox: React.FC<FileListBoxProps> = ({
  filename,
  fileId,
  size,
  uploadDate,
  isEncrypted,
  click,
}) => (
  <S.FileListBoxContainer onClick={click}>
    {isEncrypted ? <img src={LockIcon} alt="lock icon"/> : <></>}
    ID: {fileId} / 파일이름: {filename} / 크기:{size} / 업로드날짜:{uploadDate.year}-
    {uploadDate.month}-{uploadDate.day}

  </S.FileListBoxContainer>
);
