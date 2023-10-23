import React from 'react';
import * as S from './styled';

type FileListBoxProps = {
  filename: string;
  size: string;
  downloadUrl: string;
};

export const FileListBox: React.FC<FileListBoxProps> = ({ filename, size, downloadUrl }) => (
  <S.FileListBoxContainer>
    {/* <div className="long">
      {isEncrypted ? '🔐' : ''} {folderId != '' ? folderId + ' / ' : ''} {filename} / {size} /{' '}
      {uploadDate}
    </div>

    <div className="middle">
      <p>
        {isEncrypted ? '🔐' : ''} {folderId != '' ? folderId + ' / ' : ''} {size} / {uploadDate}
      </p>
      <p>{filename}</p>
    </div>

    <div className="short">
      <p>
        {isEncrypted ? '🔐' : ''} {folderId != '' ? folderId + ' / ' : ''} {size} / {uploadDate}
      </p>
      <p>{getShortFileName(filename)}</p>
    </div> */}

    <div onClick={() => window.open(downloadUrl, '_blank', 'noopener')}>
      {filename} / {size}
    </div>
  </S.FileListBoxContainer>
);
