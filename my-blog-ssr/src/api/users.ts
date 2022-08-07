import request from '@/utils/request';

/**
 * @route POST api/uses/verificationCode
 * @desc 注册验证码接口
 * @access 接口是公开的
 */
export const apiverificationCode = () => {
  return request({
    method: 'GET',
    url: '/api/users/verificationCode'
  });
};

/**
 * @route POST api/uses/register
 * @desc 注册接口地址 返回token
 * @access 接口是公开的
 */
export const apiregister = (data: any) => {
  return request({
    method: 'POST',
    url: '/api/users/register',
    data
  });
};

/**
 * @route POST api/uses/login
 * @desc 登录接口地址 返回token
 * @access 接口是公开的
 */
export const apilogin = (data: any) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};
