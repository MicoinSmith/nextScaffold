const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const sslify = require('koa-sslify').default;
const next = require('next');
const dotenv = require('dotenv');
const session = require('koa-session');
require('isomorphic-fetch');
dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(()=>{
  const server = new Koa();
  const router = new Router();

  // 首页
  router.get('/', async ctx => {
    await app.render(ctx.req, ctx.res, '/', ctx.query);
    ctx.respond = false;
  });

  server.use(session(server));
  server.use(cors());


  server.use(async (ctx) =>{
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  server.use(router.routes());
  server.listen(port, ()=>{
    console.log(`> Ready on http://localhost:${port}`);
  });
});
