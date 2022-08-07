import axios, { AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})


request.interceptors.request.use(function (config) {
  
  return config;
}, function (error) {
 
  return Promise.reject(error);
});

// Add a response interceptor
request.interceptors.response.use(function (response) {
  if(response.data.status && response.data.status !== 200) {
    ElMessage.error(response.data.msg || '请求失败 请稍后重试')
    return Promise.reject(response.data)
  }
  return response;
}, function (error) { 
  
  return Promise.reject(error);
});


export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}