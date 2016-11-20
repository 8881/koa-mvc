'use strict';

import Router from "koa-router";
const test = new Router();

test.get('/test', async function (ctx, next) {
  ctx.state = {
    title: 'test',
    test: 'test page'
  };

  await ctx.render('test');
});

export default test;
