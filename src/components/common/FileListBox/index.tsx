import React from 'react';
import { getShortFileName } from '../../../utils';
import * as S from './styled';

type FileListBoxProps = {
  filename: string;
  fileId: string;
  size: string;
  uploadDate: string;
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
      {isEncrypted ? '🔐' : ''} {fileId != '' ? fileId + ' / ' : ''} {filename} / {size} / {uploadDate}
    </div>

    <div className="middle">
      <p>
        {isEncrypted ? '🔐' : ''} {fileId != '' ? fileId + ' / ' : ''} {size} / {uploadDate}
      </p>
      <p>{filename}</p>
    </div>

    <div className="short">
      <p>
        {isEncrypted ? '🔐' : ''} {fileId != '' ? fileId + ' / ' : ''} {size} / {uploadDate}
      </p>
      <p>{getShortFileName(filename)}</p>
    </div>
  </S.FileListBoxContainer>
);
