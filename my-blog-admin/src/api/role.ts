import request from "../utils/request";

/**
 * @route POST /api/role/permission
 * @desc 修改角色权限
 */
export const postRolePermission = (data: any) => {
  return request({
    method: "POST",
    url: "/api/role/permission",
    data,
  });
};

/**
 * @route GET /api/role/queryRole
 * @desc 获取角色
 */
export const getQueryRole = () => {
  return request({
    method: "GET",
    url: "/api/role/queryRole",
  });
};

/**
 * @route post /api/role/deleteRole
 * @desc 删除角色
 */
export const postDeleteRole = (data: any) => {
  return request({
    method: "POST",
    url: "/api/role/deleteRole",
    data,
  });
};
