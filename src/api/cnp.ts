import axios from 'axios';

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

export interface CNPItemResponse {
  downloadCount: number;
  downloadLimit: number;
  expireTime: string;
  textId: string;
  textData?: string;
  data?: string;
  uploadDate: string;
}

export interface CNPDeleteValue {
  textId: string;
}

export interface CNPUploadValues {
  textData: string;
  downloadCount: number;
  expireTime: number;
}

export const getCNPList = async (): Promise<CNPListResponse> => {
  const { data } = await instance.get(API_SUFFIX.CNP_LIST);
  return data;
};

export const getCNP = async (textId: string): Promise<CNPResponse> => {
  const { data } = await instance.get(`${API_SUFFIX.CNP}/${textId}`);
  return data;
};

export const deleteCNP = async ({ textId }: CNPDeleteValue) => {
  const { data } = await instance.delete(`${API_SUFFIX.CNP}/${textId}`);
  return data;
};

export const uploadCNP = async ({ textData, downloadCount, expireTime }: CNPUploadValues) => {
  const { data } = await axios({
    method: 'post',
    url: `${API_SUFFIX.CNP_UPLOAD}`,
    data: textData,
    headers: {
      'Content-Type': 'text/plain',
      'X-Download-Limit': downloadCount,
      'X-Time-Limit': expireTime,
    },
  });
  return data;
};
