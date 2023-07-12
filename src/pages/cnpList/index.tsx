import React from 'react';
import { useRecoilValue } from 'recoil';

import { useGetCnpList } from '../../api/query';
import { LoadingState } from '../../atom/loading';

export const CNPList: React.FC = () => {
  const { data } = useGetCnpList();
  console.log(data);
  const isLoading = useRecoilValue(LoadingState);
  return (
    <>
      {isLoading ? (
        <div>
          <h1>loading</h1>
        </div>
      ) : (
        <div>
          <h1>sadf</h1>
        </div>
      )}
    </>
  );
};
