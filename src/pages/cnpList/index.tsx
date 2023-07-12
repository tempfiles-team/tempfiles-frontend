import React from 'react';

import { useGetCnpList } from '../../api/query';

export const CNPList: React.FC = () => {
  const { data } = useGetCnpList();
  console.log(data);
  return (
    <div>
      <h1>sadf</h1>
    </div>
  );
};
