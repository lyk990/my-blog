
/**
 * 公共基础接口封装 
 */

import request  from "utils/request";
import { ILoginInfo, ILoginResponse } from './types/common'
interface ResponseData<T = any> {
  status: number
  msg: string
  data: T
}

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })

  // return request.get<{
  //   status: number
  //   msg: string
  //   data: {
  //     logo_square: string
  //     logo_rectangle: string
  //     logo_logo: string
  //     slide: string[]
  //   }
  // }>('/login/info')

  // return request.get<ResponseData<{
  //     logo_square: string
  //     logo_rectangle: string
  //     logo_logo: string
  //     slide: string[]
  // }>>('/login/info')


  // return request.get<ResponseData<{
  //   logo_square: string
  //   logo_rectangle: string
  //   logo_logo: string
  //   slide: string[]
  // }>>('/login/info').then(res => {
  //   return res.data
  // })
}

export const getCaptcha = () => {
  return request<ILoginResponse>({
    method: 'GET',
    url: '/captcha_pro',
    responseType: 'blob'
  })
}

export const login = (data: {
  account: string
  pwd: string
  imgcode: string
}) => {
  return request<Blob>({
    method: 'POST',
    url: '/login',
    data
  })
}