const koa = require("koa");
const Router = require("koa-router");
const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");
const app = new koa();
const router = new Router();
app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
const users = require("./routes/api/users");
const role = require("./routes/api/role");
const article = require("./routes/api/category/article");
const addArticleContent = require("./routes/api/category/content");
const koajwt = require("koa-jwt");
app.use(koajwt({ secret: "secret" }));
//  config  连接数据库
const db = require("./config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log("mongodb数据库连接失败", err);
    return;
  }
  console.log("mongodb数据库连接成功");
});
router.get("/", async (ctx) => {
  ctx.body = { msg: "Hello koa" };
});
router.use("/api/users", users);
router.use("/api/role", role);
router.use("/api/category", article);
router.use("/api/category", addArticleContent);

// 开启服务器监听
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("localhost:5000");
});

// websocket
const Ws = require("ws");

((Ws) => {
  const server = new Ws.Server({ port: 8000 });
  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    server.on("open", handleOpen);
    server.on("close", handleClose);
    server.on("error", handleError);
    server.on("connection", handleConnection);
  }
  function handleOpen() {
    console.log("websocket open");
  }
  function handleClose() {
    console.log("websocket close");
  }

  function handleError() {
    console.log("websocket error");
  }

  function handleConnection(ws) {
    console.log("websocket connect");
    ws.on("message", handleMessage);
  }

  function handleMessage(msg) {
    server.clients.forEach(function (item) {
      item.send(msg+'');
    });
  }
  init();
})(Ws);
