import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  CNPDeleteResponse,
  CNPListResponse,
  CNPResponse,
  deleteCNP,
  getCNP,
  getCNPList,
} from '../cnp';

export const useGetCNPList = (): UseQueryResult<CNPListResponse> =>
  useQuery('useGetCNPList', getCNPList, {
    retry: 0,
  });

export const useGetCNP = (textId: string): UseQueryResult<CNPResponse> =>
  useQuery('useGetCNP', () => getCNP(textId), {
    retry: 0,
  });

export const useDeleteCNP = (textId: string): UseMutationResult<CNPDeleteResponse> => {
  const navigate = useNavigate();
  return useMutation('useDeleteCNP', () => deleteCNP(textId), {
    onSuccess: () => {
      toast.success('삭제 완료.', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate('/');
    },
    onError: (err) => {
      toast.error('삭제 실패.', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log(err);
    },
    retry: 0,
  });
};
