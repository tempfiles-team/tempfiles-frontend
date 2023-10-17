import React from 'react';
import { getShortFileName } from '../../../utils';
import * as S from './styled';

type FileListBoxProps = {
  filename: string;
  fileId: string;
  size: string;
  uploadDate: {
    year: number;
    month: number;
    day: number;
  };
  isEncrypted: boolean;
  click: () => void;
};

export const FileListBox: React.FC<FileListBoxProps> = ({
  filename,
  size,
  uploadDate,
  fileId,
  isEncrypted,
  click,
}) => (
  <S.FileListBoxContainer onClick={click}>
    <div className="long">
      {isEncrypted ? '🔐' : ''} {fileId != '' ? fileId : ''} / 파일이름: {filename} / {size} /
      {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
    </div>

    <div className="middle">
      <p>
        {isEncrypted ? '🔐' : ''} {fileId != '' ? fileId : ''} / {size} / {uploadDate.year}-
        {uploadDate.month}-{uploadDate.day}
      </p>
      <p>파일이름: {filename}</p>
    </div>

    <div className="short">
      <p>
        {isEncrypted ? '🔐' : ''} {fileId != '' ? fileId : ''} / {size} / {uploadDate.year}-
        {uploadDate.month}-{uploadDate.day}
      </p>
      <p>파일이름: {getShortFileName(filename)}</p>
    </div>
  </S.FileListBoxContainer>
);
