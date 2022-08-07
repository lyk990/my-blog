import request from '@/utils/request';
import { ILoginInfo, ILoginResponse } from './types/common';

interface ResponseData<T = any> {
  status: number;
  msg: string;
  data: T;
}

export const getCaptcha = () => {
  return request<ILoginResponse>({
    method: 'GET',
    url: '/api/users/test'
    // responseType: 'blob'
  });
};
export const login = (data: { account: string; pwd: string; imgcode: string }) => {
  return request<Blob>({
    method: 'POST',
    url: '/login',
    data
  });
};
