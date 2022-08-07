const Router = require("koa-router");
const User = require("../../model/User");
const router = new Router();

/**
 * @route Get /api/role/permission
 * @desc 修改角色权限
 */
router.post("/permission", async (ctx) => {
  try {
    const result = await User.updateOne(
      { _id: `${ctx.request.body._id}` },
      {
        $set: {
          Category: `${ctx.request.body.abpRole.category}`,
          Archive: `${ctx.request.body.abpRole.archive}`,
          Share: `${ctx.request.body.abpRole.share}`,
        },
      }
    );
    ctx.response.body = { code: 200, message: "修改成功" };
  } catch (error) {
    console.log(error);
  }
});

/**
 * @route Get /api/role/queryRole
 * @desc 获取角色
 */
router.get("/queryRole", async (ctx) => {
  const result = await User.find({});
  ctx.response.body = result;
});

/**
 * @route post /api/role/deleteRole
 * @desc 删除角色
 */
router.post("/deleteRole", async (ctx) => {
  const result = await User.deleteOne({ _id: `${ctx.request.body._id}` });
  ctx.response.body = result;
});

module.exports = router.routes();
