const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const serverStatic = require('serve-static');
const Vite = require('vite');
const koaConnect = require('koa-connect');
const sendFile = require('koa-send');

const isProd = process.env.NODE_ENV === 'production';
async function createServer() {
  const app = new Koa();
  // 创建 vite 服务
  // const viteServer = await vite.createServer({
  //   root: process.cwd(),
  //   logLevel: 'error',
  //   server: {
  //     middlewareMode: true
  //   }
  // });
  // 注册 vite 的 Connect 实例作为中间件（注意：vite.middlewares 是一个 Connect 实例）
  // app.use(koaConnect(viteServer.middlewares));
  // 以中间件模式创建 Vite 应用，这将禁用 Vite 自身的 HTML 服务逻辑
  // 并让上级服务器接管控制
  //
  // 如果你想使用 Vite 自己的 HTML 服务逻辑（将 Vite 作为
  // 一个开发中间件来使用），那么这里请用 'html'
  const vite = await Vite.createServer({
    root: process.cwd(),
    logLevel: 'info', // 控制台打印级别
    server: {
      middlewareMode: 'ssr'
    }
  });
  if (!isProd) {
    // 使用 vite 的 Connect 实例作为中间件
    app.use(koaConnect(vite.middlewares));
    // app.use(vite.middlewares)
  } else {
    app.use(serverStatic(path.resolve(__dirname, 'dist/client')));
  }

  app.use(async (ctx) => {
    // const url = ctx.request.originalUrl;
    const url = ctx.path;
    let template;
    let render;
    try {
      if (!isProd) {
        // 1. 读取 index.html
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

        // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
        //    同时也会从 Vite 插件应用 HTML 转换。
        //    例如：@vitejs/plugin-react-refresh 中的 global preambles
        template = await vite.transformIndexHtml(url, template);

        // 3. 加载服务器入口。vite.ssrLoadModule 将自动转换
        //    你的 ESM 源码使之可以在 Node.js 中运行！无需打包
        //    并提供类似 HMR 的根据情况随时失效。
        render = (await vite.ssrLoadModule('/src/entry-server.ts')).render;
      } else {
        // 1. 读取 index.html
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        // 3. 加载服务器入口。vite.ssrLoadModule 将自动转换
        //    你的 ESM 源码使之可以在 Node.js 中运行！无需打包
        //    并提供类似 HMR 的根据情况随时失效。
        // eslint-disable-next-line global-require
        render = require('./dist/server/entry-server').render;
        const resolve = (p) => path.resolve(__dirname, p);
        const clientRoot = resolve(__dirname, p);
        if (ctx.path.startsWith('/assets')) {
          await sendFile(ctx, ctx.path , {
            root: clientRoot
          })
        }
      }

      // 4. 渲染应用的 HTML。这假设 entry-server.js 导出的 `render`
      //    函数调用了适当的 SSR 框架 API。
      //    例如 ReactDOMServer.renderToString()
      // eslint-disable-next-line global-require
      const manifest = require('./dist/client/ssr-manifest.json');
      const { appHtml, state, preloadLinks } = await render(url, manifest);
      // 5. 注入渲染后的应用程序 HTML 到模板中。
      const html = template
        .replace('<!--preload-links-->', preloadLinks)
        .replace('<!--ssr-outlet-->', appHtml)
        .replace("'<!--vuex-state-->'", JSON.stringify(state));

      // 6. 返回渲染后的 HTML。
      ctx.response.status = 200;
      ctx.type = 'text/html';
      ctx.body = html;
    } catch (e) {
      // 如果捕获到了一个错误，让 Vite 来修复该堆栈，这样它就可以映射回
      // 你的实际源码中。
      // eslint-disable-next-line no-unused-expressions
      vite && vite.ssrFixStacktrace(e);
      // ctx.response.status() = 500;
      ctx.throw(500, e.stack);
    }
  });

  app.listen(4000, () => {
    console.log('localhost:4000', isProd ? '生产环境' : '开发环境');
  });
}

createServer();
