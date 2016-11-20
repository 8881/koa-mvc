'use strict';

import Router from "koa-router";
const index = new Router();

index.get(/^((\/)|(\/index(\.(html|js|ejs))?))$/, async function (ctx, next) {
  ctx.state = {
    title: 'home',
    index: 'hello world'
  };

  await ctx.render('index');
});

export default index;
