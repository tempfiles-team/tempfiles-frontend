import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  CNPDeleteValue,
  CNPListResponse,
  CNPResponse,
  CNPUploadValues,
  deleteCNP,
  getCNP,
  getCNPList,
  uploadCNP,
} from '../cnp';

export const useGetCNPList = (): UseQueryResult<CNPListResponse> =>
  useQuery('useGetCNPList', getCNPList, {
    retry: 0,
  });

export const useGetCNP = (textId: string): UseQueryResult<CNPResponse> =>
  useQuery('useGetCNP', () => getCNP(textId), {
    retry: 0,
  });

export const useDeleteCNP = ({ textId }: CNPDeleteValue): UseMutationResult => {
  const navigate = useNavigate();
  return useMutation('useDeleteCNP', () => deleteCNP({ textId }), {
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

export const useUploadCNP = ({
  textData,
  downloadCount,
  expireTime,
}: CNPUploadValues): UseMutationResult => {
  const navigate = useNavigate();
  return useMutation('useUploadCNP', () => uploadCNP({ textData, downloadCount, expireTime }), {
    onSuccess: () => {
      toast.success('업로드 완료.', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate('/');
    },
    onError: (err) => {
      toast.error('업로드 실패.', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log(err);
    },
    retry: 0,
  });
};
