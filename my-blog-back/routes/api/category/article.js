const Router = require("koa-router");
const Article = require("../../../model/category/Article");
const router = new Router();

/**
 * @router Get api/category/getArticleCategory
 * @desc 获取文章分类名称
 */
router.get("/getArticleCategory", async (ctx) => {
  const result = await Article.find({});
  ctx.response.body = result;
});

/**
 * @router Get api/category/addArticleCategory
 * @desc 增加文章分类名称
 */
router.post("/addArticleCategory", async (ctx) => {
  try {
    const result = await Article.insertMany({
      ArticleCategory: `${ctx.request.body.data}`,
    });
    ctx.response.body = { code: 200, message: "保存成功" };
  } catch (error) {
    ctx.response.body = { code: 500, message: "保存失败" };
  }
});

/**
 * @router Get api/category/deleteArticleCategory
 * @desc 删除文章分类名称
 */
router.post("/deleteArticleCategory", async (ctx) => {
  // ArticleCategory: `${ctx.request.body.data}`,
  try {
    const result = await Article.deleteOne({
      ArticleCategory: `${ctx.request.body.tag}`,
    });
    ctx.response.body = { code: 200, message: "保存成功" };
  } catch (error) {
    ctx.response.body = { code: 500, message: "保存失败" };
  }
});

module.exports = router.routes();
