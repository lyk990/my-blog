import Axios, { AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { setItem, getItem } from '@/utils/storage';

const request = Axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: 10000 // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）
request.interceptors.request.use(
  (req: any) => {
    const token = getItem('blogToken');
    if (token != null) {
      req.headers.token = token;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

// 后置拦截器（获取到响应时的拦截）
request.interceptors.response.use(
  (response) => {
    if (response.data.status && response.data.status !== 200) {
      ElMessage.error(response.data.msg || '请求失败 请稍后重试');
      return Promise.reject(response.data);
    }
    if (response.data.token) {
      setItem('blogToken', response.data.token);
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      // ElMessage.error(`Code: ${code}, Message: ${msg}`);
      ElMessage.error(`${msg}`);
    } else {
      ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return (res.data.data || res.data) as T;
  });
};
