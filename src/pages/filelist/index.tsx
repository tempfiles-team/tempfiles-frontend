import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { FileListBox } from '../../components';
import { getFileSize, getShortFileName } from '../../utils';
import * as S from './styled';

export const FileListPage: React.FC = () => {
  const [loading, setLoading] = useState(true); //loading 확인하고싶으면 false로 바꿔주세요.
  const SkeletonUIRandomWidth = ['50', '55', '60', '65', '70', '75', '80'];
  const [fileList, setFileList] = useState<any[]>();
  const getFileList = async () => {
    await axios({
      method: 'get',
      url: 'https://tfb.minpeter.cf/list',
    })
      .then((res) => {
        setFileList(res.data.list);
        setLoading(false);
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
      {loading ? (
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
      ) : (
        <>
          <S.FileListPageContainer>
            <S.FileListSkeletonUI
              randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]}
            />
            <S.FileListSkeletonUI
              randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]}
            />
            <S.FileListSkeletonUI
              randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]}
            />
            <S.FileListSkeletonUI
              randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]}
            />
            <S.FileListSkeletonUI
              randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]}
            />
            <S.FileListSkeletonUI
              randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]}
            />
            <S.FileListSkeletonUI
              randomWitdh={SkeletonUIRandomWidth[Math.floor(Math.random() * 6)]}
            />
          </S.FileListPageContainer>
          <S.FileListPageBoxShoadow />
        </>
      )}
    </>
  );
};
