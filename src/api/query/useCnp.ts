import { UseQueryResult, useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { LoadingState } from '../../atom';
import { CNPItemResponse, CNPListResponse, getCNP, getCNPList } from '../cnp';

export const useGetCNPList = (): UseQueryResult<CNPListResponse> => {
  const setIsLoading = useSetRecoilState(LoadingState);
  return useQuery('useGetCNPList', getCNPList, {
    retry: 0,
  });
};

export const useGetCNP = (textId: string): UseQueryResult<CNPItemResponse> => {
  const setIsLoading = useSetRecoilState(LoadingState);
  return useQuery('useGetCNP', () => getCNP(textId), {
    retry: 0,
  });
};
