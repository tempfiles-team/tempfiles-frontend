import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { FileListBox } from '../../components';
import { getFileSize, getShortFileName } from '../../utils';
import * as S from './styled';

export const FileListPage: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>();
  const getFileList = async () => {
    await axios({
      method: 'get',
      url: 'https://tfb.minpeter.cf/list',
    })
      .then((res) => {
        setFileList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFileList();
  }, []);
  return (
    <>
      <S.FileListPageContainer>
        {fileList?.map((item, index) => (
          <FileListBox
            key={index}
            filename={getShortFileName(item.Name)}
            size={getFileSize(item.Size)}
            LastModified={new Date(item.LastModified)}
          />
        ))}
      </S.FileListPageContainer>
      <S.FileListPageBoxShoadow />
    </>
  );
};
