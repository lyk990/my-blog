import request from "../utils/request";

/**
 * @router Get api/category/addArticleCategory
 * @desc 增加文章分类名称
 */
export const getLoginInfo = (data: any) => {
  return request({
    method: "POST",
    url: "/api/category/addArticleCategory",
    data,
  });
};

/**
 * @router Get api/category/getArticleCategory
 * @desc 获取文章分类名称
 */
export const getArticleCategory = () => {
  return request({
    method: "GET",
    url: "/api/category/getArticleCategory",
  });
};

/**
 * @router Get api/category/deleteArticleCategory
 * @desc 删除文章分类名称
 */
export const deleteArticleCategory = (data: any) => {
  return request({
    method: "POST",
    url: "/api/category/deleteArticleCategory",
    data,
  });
};

/**
 * @router Get /api/category/addArticleContent
 * @desc 新增文章
 */
export const addArticleContent = (data: any) => {
  return request({
    method: "POST",
    url: "/api/category/addArticleContent",
    data,
  });
};

/**
 * @router Get /api/category/queryArticleTitle
 * @desc 后台管理查询所有文章
 */
export const queryAllArticle = () => {
  return request({
    method: "GET",
    url: "/api/category/queryAllArticle",
  });
};

/**
 * @router Get /api/category/deleteArticle
 * @desc 后台管理删除文章
 */
export const deleteArticle = (data: any) => {
  return request({
    method: "POST",
    url: "/api/category/deleteArticle",
    data,
  });
};

/**
 * @router Get /api/category/updateOneArticle
 * @desc 后台管理修改文章
 */
export const updateOneArticle = (data: any) => {
  return request({
    method: "POST",
    url: "/api/category/updateOneArticle",
    data,
  });
};

/**
 * @router Get /api/category/queryArticleTitle
 * @desc 后台管理修改获取文章
 */
export const findOneArticle = (data: any) => {
  return request({
    method: "POST",
    url: "/api/category/findOneArticle",
    data,
  });
};
