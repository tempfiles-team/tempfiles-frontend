import { API_SUFFIX, instance } from './api';

export interface CNPItemResponse {
  downloadCount: number;
  downloadLimit: number;
  expireTime: string;
  textId: string;
  data?: string;
  uploadDate: string;
}

export interface CNPListResponse {
  list: [CNPItemResponse];
  message: string;
  numberOfList: number;
}

export interface CNPResponse extends CNPItemResponse {
  message: string;
  textData: string;
}

export const getCNPList = async (): Promise<CNPListResponse> => {
  const { data } = await instance.get(API_SUFFIX.CNP_LIST);
  return data;
};
