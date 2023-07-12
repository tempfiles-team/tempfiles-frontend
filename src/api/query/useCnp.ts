import { UseQueryResult, useQuery } from 'react-query';

import { CNPListResponse, getCNPList } from '../cnp';

export const useGetCnpList = (): UseQueryResult<CNPListResponse> =>
  useQuery('useGetCnpList', getCNPList, {
    retry: 0,
    staleTime: 36000,
  });
