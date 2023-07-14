import { UseQueryResult, useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { LoadingState } from '../../atom';
import { CNPListResponse, getCNPList } from '../cnp';

export const useGetCnpList = (): UseQueryResult<CNPListResponse> => {
  const setIsLoading = useSetRecoilState(LoadingState);
  return useQuery('useGetCnpList', getCNPList, {
    onSuccess: () => {
      setIsLoading(false);
    },
    onError: (err) => {
      console.log(err);
    },
    retry: 0,
    staleTime: 36000,
  });
};
