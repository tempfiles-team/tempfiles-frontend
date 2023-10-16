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
    <div className='long'>
      ID: {fileId} / 파일이름: {filename} / 크기:{size} / 업로드날짜:{uploadDate.year}-
      {uploadDate.month}-{uploadDate.day}
    </div>

    <div className='short'>
      <p>ID: {fileId} / 파일이름: {filename}</p>
      <p>크기:{size} / 업로드날짜:{uploadDate.year}-
      {uploadDate.month}-{uploadDate.day}</p>
    </div>
  </S.FileListBoxContainer>
);
