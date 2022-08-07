const Router = require("koa-router");
const User = require("../../model/User");
const router = new Router();
const bcrypt = require("bcryptjs"); // 密码加密
const gravatar = require("gravatar");
const tools = require("../../config/tools");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const koajwt = require("koa-jwt");

/**
 * @route Get /api/users/test
 * @desc 测试接口地址
 * @access 接口是公开的
 */
router.get("/test", async (ctx) => {
  ctx.status = 200;
  ctx.body = { msg: "users works..." };
});

/**
 * @route POST api/users/register
 * @desc 注册接口地址
 * @access 接口是公开的
 */
router.post("/register", async (ctx) => {
  const findResult = await User.find({
    name: ctx.request.body.userName._value,
  });
  if (findResult.length > 0) {
    ctx.status = 500;
    ctx.body = { message: "用户名被占用" };
  } else {
    // const avatar = gravatar.url(ctx.request.body.email, {
    //   s: "200",
    //   r: "pg",
    //   d: "mm",
    // });
    const newUSer = new User({
      name: ctx.request.body.userName._value,
      // email: ctx.request.body.email,
      // avatar: avatar,
      password: tools.enbcrypt(ctx.request.body.password._value),
      Category: true,
      Archive: true,
      Share: true,
    });
    // await bcrypt.genSalt(10, (err, salt) => {
    //   bcrypt.hash(newUSer.password, salt, (err, hash) => {
    //     if(err) throw err
    //     newUSer.password = hash
    //   });
    // });
    // console.log(newUSer)
    await newUSer
      .save()
      .then((user) => {
        ctx.body = user;
      })
      .catch((err) => {
        console.log(err);
      });
    // 返回json数据
    ctx.body = { code: 200, newUSer };
  }
});

/**
 * @route POST api/uses/login
 * @desc 登录接口地址 返回token
 * @access 接口是公开的
 */
router.post("/login", async (ctx) => {
  //查询
  const findResult = await User.find({
    name: ctx.request.body.userName._value,
  });
  const user = findResult[0];
  const password = ctx.request.body.password._value;
  //判断查没查到
  if (findResult.length == 0) {
    // ctx.status = 404;
    ctx.body = { email: "用户不存在" };
  } else {
    //查到后 验证加密的密码
    var result = await bcrypt.compareSync(password, user.password);
    //验证通过
    if (result) {
      //返回token
      const payload = { _id: user._id, name: user.name };
      const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });
      ctx.status = 200;
      const abpRole = {
        Archive: findResult[0].Archive,
        Category: findResult[0].Category,
        Share: findResult[0].Share,
      };
      ctx.body = {
        code: 200,
        success: true,
        token: "Bearer " + token,
        abpRole,
      };
    } else {
      ctx.status = 400;
      ctx.body = { message: "密码错误" };
    }
  }
});

/**
 * @route POST api/uses/verificationCode
 * @desc 注册验证码接口
 * @access 接口是公开的
 */
router.get("/verificationCode", async (ctx) => {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const num = rand(1000, 9999);
  ctx.body = num;
});

module.exports = router.routes();
