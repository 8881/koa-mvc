'use strict';

import Koa from "koa";
import view from "koa-views";
import router from "./router";

const PORT = 4000;
const app = new Koa();

app.use(view(`${process.cwd()}/views`, {
  map: {
    html: 'ejs'
  }
}));
app.use(router.routes());
app.use(router.allowedMethods());

router.get('*', async function (ctx, next) {
  ctx.set('content-type', 'text/html; charset-utf8');
  ctx.body = `<h1>${ctx.status}.</h1>`;
});

app.listen(PORT, () => {
  console.log(`[address] http://localhost:${PORT}`);
});
