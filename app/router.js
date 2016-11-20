'use strict';

import Router from "koa-router";
import index from "./component/index";
import test from "./component/test";

const router = new Router();

router.use('', index.routes(), index.allowedMethods());
router.use('', test.routes(), test.allowedMethods());
/** add more here **/

export default router;
