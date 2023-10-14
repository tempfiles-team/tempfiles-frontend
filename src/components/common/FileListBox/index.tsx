import React from 'react';

// import { ReactComponent as LockIcon } from '../../../assets/LockIcon.svg';
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
    {/* {isEncrypted ? <LockIcon width={'2.3rem'} style={{ marginRight: '0.5rem' }} /> : <></>}
    ID: {fileId} / 파일이름: {filename} / 크기:{size} / 업로드날짜:{uploadDate.year}-
    {uploadDate.month}-{uploadDate.day} */}
  </S.FileListBoxContainer>
);
