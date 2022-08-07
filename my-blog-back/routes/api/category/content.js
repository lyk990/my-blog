const Router = require("koa-router");
const Article = require("../../../model/category/ArticleContent");
const router = new Router();

/**
 * @router Get /api/category/addArticleContent
 * @desc 后台管理新增文章
 */
router.post("/addArticleContent", async (ctx) => {
  try {
    const result = await Article.insertMany({
      ArticleCategory: `${ctx.request.body.category._value}`,
      title: `${ctx.request.body.title._value}`,
      content: `${ctx.request.body.text._value}`,
    });
    ctx.response.body = { code: 200, message: "保存成功" };
  } catch (error) {
    ctx.response.body = { code: 500, message: "保存失败" };
  }
});

/**
 * @router Get /api/category/queryArticleTitle
 * @desc 客户端查询文章
 */
router.post("/queryArticleTitle", async (ctx) => {
  const data = [];
  ctx.request.body.map((item) => {
    data.push(item.ArticleCategory);
  });
  const result = await Article.find({ ArticleCategory: { $in: data } });
  ctx.response.body = result;
});

/**
 * @router Get /api/category/queryAllArticle
 * @desc 后台管理查询所有文章
 */
router.get("/queryAllArticle", async (ctx) => {
  const result = await Article.find({});
  ctx.response.body = result;
});

/**
 * @router post /api/category/deleteArticle
 * @desc 后台管理删除文章
 */
router.post("/deleteArticle", async (ctx) => {
  const result = await Article.deleteOne({ _id: `${ctx.request.body.data}` });
  ctx.response.body = result;
});

/**
 * @router Get /api/category/updateOneArticle
 * @desc 后台管理编辑文章
 */
router.post("/updateOneArticle", async (ctx) => {
  try {
    const result = await Article.updateOne(
      { _id: `${ctx.request.body._id._value}` },
      {
        $set: {
          ArticleCategory: `${ctx.request.body.category._value}`,
          title: `${ctx.request.body.title._value}`,
          content: `${ctx.request.body.text._value}`,
        },
      }
    );
    ctx.response.body = { code: 200, message: "修改成功" };
  } catch (error) {
    console.log(error);
    ctx.response.body = { code: 500, message: "修改失败" };
  }
});

/**
 * @router Get /api/category/updateOneArticle
 * @desc 后台管理修改获取文章
 */
router.post("/findOneArticle", async (ctx) => {
  const result = await Article.findOne({ _id: `${ctx.request.body.data}` });
  ctx.response.body = result;
});
module.exports = router.routes();
